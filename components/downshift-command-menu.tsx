"use client"

import type React from "react"

import { useState, useRef, useEffect, useMemo } from "react"
import { useCombobox } from "downshift"
import { useVirtualizer } from "@tanstack/react-virtual"
import { X, Loader2 } from "lucide-react"

// Import types and data from the separate data file
import { type ClassItem, type Category, categoryNames, getCategoryData } from "@/data/command-data"
import { useDebounce } from "@/hooks/use-debounce"

// Define types for selected and pending items
type SelectedItem = {
  group: string
  classItem: ClassItem
  customValue?: string
}

type PendingItem = {
  group: string
  classItem: ClassItem
  placeholder: string
}

// Define a type for flattened items for easier virtualization
type FlatItem = {
  id: string
  type: "group" | "item"
  categoryName: string
  groupName?: string
  classItem?: ClassItem
  isHeader?: boolean
}

export function DownshiftCommandMenu() {
  // Helper functions - moved to the top to avoid "Cannot access before initialization" errors
  const hasAngleBrackets = (str: string) => {
    return str.includes("<") && str.includes(">")
  }

  const getCustomizedName = (baseName: string, customValue: string) => {
    return baseName.replace(/<[^>]*>/, customValue)
  }

  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
  const [inputValue, setInputValue] = useState("")
  const debouncedInputValue = useDebounce(inputValue, 300)
  const [pendingItem, setPendingItem] = useState<PendingItem | null>(null)
  const [customInputValue, setCustomInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [loadedCategories, setLoadedCategories] = useState<Record<string, Category>>({})
  // Track which categories have been requested to prevent duplicate requests
  const [requestedCategories, setRequestedCategories] = useState<Set<string>>(new Set())

  const listRef = useRef<HTMLDivElement>(null)
  const customInputRef = useRef<HTMLInputElement>(null)
  const chipRef = useRef<HTMLDivElement>(null)

  const handleRemoveChip = (index: number) => {
    setSelectedItems((prev) => prev.filter((_, i) => i !== index))
  }

  const handleConfirmCustomInput = () => {
    if (pendingItem && customInputValue.trim()) {
      setSelectedItems((prev) => [
        ...prev,
        {
          group: pendingItem.group,
          classItem: pendingItem.classItem,
          customValue: customInputValue.trim(),
        },
      ])
      setPendingItem(null)
      setCustomInputValue("")
    }
  }

  const handleCustomInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && customInputValue.trim()) {
      handleConfirmCustomInput()
    } else if (e.key === "Escape") {
      setPendingItem(null)
      setCustomInputValue("")
    }
  }

  const handleSelect = (group: string, classItem: ClassItem) => {
    // Clear the input value
    setInputValue("")

    if (hasAngleBrackets(classItem.item)) {
      // Set the pending item if it requires custom input
      const placeholder = classItem.item.match(/<([^>]+)>/)?.[1] || "Value"
      setPendingItem({ group, classItem, placeholder })
    } else {
      // Directly add to selected items if no custom input is needed
      setSelectedItems((prev) => [...prev, { group, classItem }])
    }
  }

  // Focus the custom input field when a pending item is set
  useEffect(() => {
    if (pendingItem && customInputRef.current) {
      customInputRef.current.focus()
    }
  }, [pendingItem])

  // Handle click outside to confirm input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pendingItem &&
        chipRef.current &&
        !chipRef.current.contains(event.target as Node) &&
        customInputValue.trim()
      ) {
        handleConfirmCustomInput()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [pendingItem, customInputValue])

  // Load categories when input changes
  useEffect(() => {
    const loadCategories = async () => {
      if (!debouncedInputValue) return

      // Only proceed if we have input
      setIsLoading(true)

      try {
        // Track which categories need to be loaded
        const categoriesToLoad = categoryNames.filter(
          (name) => !loadedCategories[name] && !requestedCategories.has(name),
        )

        if (categoriesToLoad.length === 0) {
          setIsLoading(false)
          return
        }

        // Mark these categories as requested to prevent duplicate requests
        setRequestedCategories((prev) => {
          const newSet = new Set(prev)
          categoriesToLoad.forEach((name) => newSet.add(name))
          return newSet
        })

        // Load categories in parallel
        const categoryPromises = categoriesToLoad.map(async (name) => {
          try {
            const category = await getCategoryData(name)
            return { name, category }
          } catch (error) {
            console.error(`Error loading category ${name}:`, error)
            return { name, error }
          }
        })

        const results = await Promise.all(categoryPromises)

        // Update loaded categories using functional update to avoid dependency on loadedCategories
        setLoadedCategories((prev) => {
          const newCategories = { ...prev }
          results.forEach(({ name, category, error }) => {
            if (!error && category) {
              newCategories[name] = category
            }
          })
          return newCategories
        })
      } catch (error) {
        console.error("Error loading categories:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCategories()
  }, [debouncedInputValue]) // Remove loadedCategories from dependencies

  // Filter and flatten items for virtualization
  const flattenedItems = useMemo(() => {
    if (!debouncedInputValue) return []

    const lowercaseInput = debouncedInputValue.toLowerCase()
    const items: FlatItem[] = []

    // Get the IDs of selected regular items to filter them out
    const selectedIds = selectedItems
      .filter((selected) => !hasAngleBrackets(selected.classItem.item))
      .map((selected) => `${selected.group}-${selected.classItem.item}`)

    Object.entries(loadedCategories).forEach(([categoryName, category]) => {
      let hasMatchingItems = false
      const categoryItems: FlatItem[] = []
      const groupsByName: Record<string, FlatItem[]> = {}

      // Process all groups and their items
      category.groups.forEach((group) => {
        const matchingClasses = group.classes.filter(
          (classItem) =>
            (hasAngleBrackets(classItem.item) || !selectedIds.includes(`${group.group}-${classItem.item}`)) &&
            classItem.searchableText?.toLowerCase().includes(lowercaseInput),
        )

        if (matchingClasses.length > 0) {
          hasMatchingItems = true

          // Initialize group array if it doesn't exist
          if (!groupsByName[group.group]) {
            groupsByName[group.group] = []

            // Add group header
            groupsByName[group.group].push({
              id: `group-${categoryName}-${group.group}`,
              type: "group",
              categoryName: category.category,
              groupName: group.group,
              isHeader: true,
            })
          }

          // Add items to the group
          matchingClasses.forEach((classItem) => {
            groupsByName[group.group].push({
              id: `item-${categoryName}-${group.group}-${classItem.item}`,
              type: "item",
              categoryName: category.category,
              groupName: group.group,
              classItem,
            })
          })
        }
      })

      // Add all groups and their items to the category items
      Object.values(groupsByName).forEach((groupItems) => {
        categoryItems.push(...groupItems)
      })

      if (hasMatchingItems) {
        items.push(...categoryItems)
      }
    })

    return items
  }, [debouncedInputValue, loadedCategories, selectedItems])

  // Set up virtualization
  const rowVirtualizer = useVirtualizer({
    count: flattenedItems.length,
    getScrollElement: () => listRef.current,
    estimateSize: (index) => {
      const item = flattenedItems[index]
      return item?.isHeader ? 40 : 40 // Reduced heights for more compact UI
    },
    overscan: 10,
  })

  // Set up Downshift combobox
  const {
    isOpen,
    getInputProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    setInputValue: setDownshiftInputValue,
  } = useCombobox({
    items: flattenedItems,
    inputValue,
    onInputValueChange: ({ inputValue }) => {
      setInputValue(inputValue || "")
    },
    // Always return empty string for selected items to prevent populating the input
    itemToString: () => "",
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem?.type === "item" && selectedItem.classItem && selectedItem.groupName) {
        handleSelect(selectedItem.groupName, selectedItem.classItem)
        // Explicitly clear the input
        setDownshiftInputValue("")
      }
    },
  })

  return (
    <div className="rounded-lg border shadow-md overflow-clip">
      {/* Chips area */}
      <div className="flex flex-wrap gap-2 p-3 bg-gray-100 border-b rounded-t-lg min-h-[3rem]">
        {selectedItems.map((selected, index) => (
          <div
            key={index}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-black rounded-full"
          >
            <span>
              {selected.customValue
                ? getCustomizedName(selected.classItem.item, selected.customValue)
                : selected.classItem.item}
            </span>
            <button
              onClick={() => handleRemoveChip(index)}
              className="flex items-center justify-center w-4 h-4 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}

        {/* Pending item with custom input field */}
        {pendingItem && (
          <div
            ref={chipRef}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-black rounded-full"
          >
            <span>{pendingItem.classItem.item.split("<")[0]}</span>
            <div className="relative inline-flex items-center">
              <input
                ref={customInputRef}
                type="text"
                value={customInputValue}
                onChange={(e) => setCustomInputValue(e.target.value)}
                onKeyDown={handleCustomInputKeyPress}
                placeholder={pendingItem.placeholder}
                className="w-auto min-w-[1.5rem] px-1 py-0.5 text-xs text-white bg-black border border-white rounded-md focus:outline-none focus:border-white"
                style={{ width: `${Math.max(customInputValue.length * 0.6 + 1, 1.5)}rem` }}
              />
            </div>
            <button
              onClick={() => setPendingItem(null)}
              className="flex items-center justify-center w-4 h-4 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      {/* Combobox */}
      <div className="relative">
        <div className="flex items-center border-b">
          <input
            {...getInputProps()}
            placeholder="Type a class..."
            className="w-full h-12 border-none px-3 focus:ring-0 focus:outline-none"
          />
        </div>

        <div
          {...getMenuProps()}
          className={`overflow-hidden ${!isOpen || (!debouncedInputValue && !isLoading) ? "hidden" : ""}`}
        >
          {isLoading && (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              <span className="ml-2 text-sm text-gray-500">Loading categories...</span>
            </div>
          )}

          {!isLoading && debouncedInputValue && flattenedItems.length === 0 && (
            <div className="py-6 text-center text-sm text-gray-500">No results found.</div>
          )}

          {!isLoading && debouncedInputValue && flattenedItems.length > 0 && (
            <div ref={listRef} className="max-h-[300px] overflow-y-auto">
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: "100%",
                  position: "relative",
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const item = flattenedItems[virtualRow.index]
                  const isHighlighted = highlightedIndex === virtualRow.index

                  return (
                    <div
                      key={virtualRow.index}
                      {...getItemProps({
                        index: virtualRow.index,
                        item: item,
                      })}
                      className={`absolute px-2 top-0 left-0 right-0 ${
                        isHighlighted && item.type === "item" ? "bg-gray-100 ml-1 px-1 right-1 rounded-md" : ""
                      }`}
                      style={{
                        height: `${virtualRow.size}px`,
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      {item.type === "group" && (
                        <div className="-mt-1 pt-2 text-xs font-medium text-gray-500">
                          <div className={`px-4 -mx-2 pt-4 ${
                            virtualRow.index === 0 ? "" : "border-t"
                          }`}>
                            {item.groupName}
                          </div>
                        </div>
                      )}

                      {item.type === "item" && item.classItem && (
                        <div className="px-2 py-2 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div
                              className={`${hasAngleBrackets(item.classItem.item) ? "text-blue-600 font-medium" : ""}`}
                            >
                              {item.classItem.item}
                            </div>
                            <div className="text-xs text-gray-400 truncate max-w-[50%]">{item.classItem.item_meta}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {!debouncedInputValue && !isLoading && (
            <div className="py-6 text-center text-sm text-gray-500">Start typing to search...</div>
          )}
        </div>
      </div>
    </div>
  )
}

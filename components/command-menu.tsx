"use client"

import type React from "react"
import { useState, useRef, useEffect, useMemo } from "react"
import { X, Loader2 } from "lucide-react"
import {
  Command as CommandPrimitive,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

// Import types and data from the separate data file with the new naming
import { type ClassItem, type Category, categoryNames, getCategoryData } from "@/data/command-data"
import { useDebounce } from "@/hooks/use-debounce"

// Define a type for selected items to track which group they belong to with the new naming
type SelectedItem = {
  group: string
  classItem: ClassItem
  customValue?: string // For items with custom input
}

// Define a type for pending item that requires user input
type PendingItem = {
  group: string
  classItem: ClassItem
  placeholder: string // The text inside angle brackets
}

export function Command() {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
  const [inputValue, setInputValue] = useState("")
  const debouncedInputValue = useDebounce(inputValue, 300) // Debounce input for better performance
  const [pendingItem, setPendingItem] = useState<PendingItem | null>(null)
  const [customInputValue, setCustomInputValue] = useState("")
  const [isListPopulated, setIsListPopulated] = useState(false) // Track if list is populated
  const [isLoading, setIsLoading] = useState(false) // Track loading state
  const [loadedCategories, setLoadedCategories] = useState<Record<string, Category>>({}) // Store loaded categories
  const customInputRef = useRef<HTMLInputElement>(null)
  const chipRef = useRef<HTMLDivElement>(null)

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
      // If input is empty, don't load categories
      if (!debouncedInputValue) {
        setIsListPopulated(false)
        return
      }

      setIsLoading(true)
      setIsListPopulated(true)

      try {
        // Load all categories in parallel
        const categoryPromises = categoryNames.map(async (name) => {
          // Skip already loaded categories
          if (loadedCategories[name]) {
            return { name, category: loadedCategories[name] }
          }

          const category = await getCategoryData(name)
          return { name, category }
        })

        const results = await Promise.all(categoryPromises)

        // Update loaded categories
        const newLoadedCategories = { ...loadedCategories }
        results.forEach(({ name, category }) => {
          newLoadedCategories[name] = category
        })

        setLoadedCategories(newLoadedCategories)
      } catch (error) {
        console.error("Error loading categories:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCategories()
  }, [debouncedInputValue, loadedCategories])

  // Handle populating the list when the user starts typing
  const handleValueChange = (value: string) => {
    setInputValue(value)

    // If input is empty, hide the list
    if (value.length === 0) {
      setIsListPopulated(false)
    }
  }

  // Filter loaded categories based on input
  const filteredCategories = useMemo(() => {
    if (!debouncedInputValue) return []

    const lowercaseInput = debouncedInputValue.toLowerCase()

    return Object.values(loadedCategories)
      .map((category) => ({
        ...category,
        groups: category.groups
          .map((group) => ({
            ...group,
            classes: group.classes.filter((classItem) =>
              classItem.searchableText?.toLowerCase().includes(lowercaseInput),
            ),
          }))
          .filter((group) => group.classes.length > 0), // Only include groups with matching items
      }))
      .filter((category) => category.groups.length > 0) // Only include categories with matching groups
  }, [debouncedInputValue, loadedCategories])

  // Get the IDs of selected regular items (without angle brackets) to filter them out
  const selectedRegularItemIds = selectedItems
    .filter((selected) => !hasAngleBrackets(selected.classItem.item))
    .map((selected) => `${selected.group}-${selected.classItem.item}`)

  const hasAngleBrackets = (str: string) => {
    return str.includes("<") && str.includes(">")
  }

  const getCustomizedName = (baseName: string, customValue: string) => {
    return baseName.replace(/<[^>]*>/, customValue)
  }

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
    setInputValue("") // Clear the input
    setIsListPopulated(false) // Collapse the list

    if (hasAngleBrackets(classItem.item)) {
      // Set the pending item if it requires custom input
      const placeholder = classItem.item.match(/<([^>]+)>/)?.[1] || "Value"
      setPendingItem({ group, classItem, placeholder })
    } else {
      // Directly add to selected items if no custom input is needed
      setSelectedItems((prev) => [...prev, { group, classItem }])
    }
  }

  return (
    <div className="rounded-lg border shadow-md">
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

      <CommandPrimitive className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
        <CommandInput
          placeholder="Type a command or search..."
          className="border-none focus:ring-0 focus:outline-none"
          value={inputValue}
          onValueChange={handleValueChange}
        />
        <CommandList className="max-h-[300px] overflow-y-auto overflow-x-hidden">
          {!isListPopulated && (
            <CommandEmpty className="pt-6 pb-12 text-center text-sm">Start typing to load options...</CommandEmpty>
          )}

          {isListPopulated && isLoading && (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              <span className="ml-2 text-sm text-gray-500">Loading categories...</span>
            </div>
          )}

          {isListPopulated && !isLoading && filteredCategories.length === 0 && (
            <CommandEmpty className="pt-6 pb-12 text-center text-sm">No results found.</CommandEmpty>
          )}

          {isListPopulated &&
            !isLoading &&
            filteredCategories.map((categoryData, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Add separator between categories */}
                {categoryIndex > 0 && <CommandSeparator />}

                {/* Category heading */}
                <div className="px-3.5 pt-5 pb-3 text-lg font-medium text-gray-400">{categoryData.category}</div>

                {/* Groups within the category */}
                {categoryData.groups.map((groupData, groupIndex) => (
                  <div key={groupIndex}>
                    <CommandGroup heading={groupData.group} className="px-2 text-sm">
                      {groupData.classes
                        // Only filter out regular items (without angle brackets)
                        .filter(
                          (classItem) =>
                            hasAngleBrackets(classItem.item) ||
                            !selectedRegularItemIds.includes(`${groupData.group}-${classItem.item}`),
                        )
                        .map((classItem, itemIndex) => (
                          <CommandItem
                            key={itemIndex}
                            onSelect={() => handleSelect(groupData.group, classItem)}
                            className="cursor-pointer rounded-md text-sm"
                            value={classItem.searchableText}
                          >
                            <div className="grid grid-cols-2 w-full">
                              <div className={hasAngleBrackets(classItem.item) ? "text-blue-600 font-medium" : ""}>
                                {classItem.item}
                              </div>
                              <div className="text-xs text-muted-foreground">{classItem.item_meta}</div>
                            </div>
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </div>
                ))}
              </div>
            ))}
        </CommandList>
      </CommandPrimitive>
    </div>
  )
}

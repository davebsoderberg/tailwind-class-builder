"use client"

import { useState, useRef, useEffect } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import { Command as CommandPrimitive, CommandEmpty, CommandInput } from "@/components/ui/command"

import { type ClassItem, categoryNames, getCategoryData } from "@/data/command-data"

// Types remain the same as before
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

export function VirtualizedCommand() {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
  const [inputValue, setInputValue] = useState("")
  const [pendingItem, setPendingItem] = useState<PendingItem | null>(null)
  const [customInputValue, setCustomInputValue] = useState("")
  const [isListPopulated, setIsListPopulated] = useState(false)
  const [loadedCategories, setLoadedCategories] = useState<Record<string, any>>({})
  const [filteredItems, setFilteredItems] = useState<Array<{ category: string; group: string; item: ClassItem }>>([])

  const parentRef = useRef<HTMLDivElement>(null)
  const customInputRef = useRef<HTMLInputElement>(null)
  const chipRef = useRef<HTMLDivElement>(null)

  // Virtualization setup
  const rowVirtualizer = useVirtualizer({
    count: filteredItems.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40, // Estimated height of each item
    overscan: 10, // Number of items to render outside of the visible area
  })

  // Load categories and filter items when input changes
  useEffect(() => {
    const loadAndFilterData = async () => {
      if (inputValue.length === 0) {
        setFilteredItems([])
        setIsListPopulated(false)
        return
      }

      setIsListPopulated(true)

      // Load categories that haven't been loaded yet
      const newLoadedCategories = { ...loadedCategories }
      let hasNewCategories = false

      for (const categoryName of categoryNames) {
        if (!newLoadedCategories[categoryName]) {
          newLoadedCategories[categoryName] = await getCategoryData(categoryName)
          hasNewCategories = true
        }
      }

      if (hasNewCategories) {
        setLoadedCategories(newLoadedCategories)
      }

      // Filter items based on input
      const lowercaseInput = inputValue.toLowerCase()
      const filtered: Array<{ category: string; group: string; item: ClassItem }> = []

      Object.entries(newLoadedCategories).forEach(([categoryName, categoryData]) => {
        categoryData.groups.forEach((group) => {
          group.classes.forEach((classItem) => {
            if (classItem.searchableText?.toLowerCase().includes(lowercaseInput)) {
              filtered.push({
                category: categoryName,
                group: group.group,
                item: classItem,
              })
            }
          })
        })
      })

      setFilteredItems(filtered)
    }

    loadAndFilterData()
  }, [inputValue, loadedCategories])

  // Rest of the component logic (handleValueChange, handleSelect, etc.) remains similar
  // ...
  const handleValueChange = (value: string) => {
    setInputValue(value)
  }

  const handleSelect = (group: string, classItem: ClassItem) => {
    setSelectedItems([...selectedItems, { group, classItem }])
    setInputValue("")
  }

  return (
    <div className="rounded-lg border shadow-md">
      {/* Chips area - same as before */}
      <div className="flex flex-wrap gap-2 p-3 bg-gray-100 border-b rounded-t-lg min-h-[3rem]">{/* ... */}</div>

      <CommandPrimitive className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
        <CommandInput
          placeholder="Type a command or search..."
          className="border-none focus:ring-0 focus:outline-none"
          value={inputValue}
          onValueChange={handleValueChange}
        />

        {!isListPopulated ? (
          <CommandEmpty className="pt-6 pb-12 text-center text-sm">Start typing to load options...</CommandEmpty>
        ) : (
          <div ref={parentRef} className="max-h-[300px] overflow-y-auto overflow-x-hidden" style={{ height: "300px" }}>
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const item = filteredItems[virtualRow.index]
                return (
                  <div
                    key={virtualRow.index}
                    className="absolute top-0 left-0 w-full"
                    style={{
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <div
                      className="flex justify-between items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelect(item.group, item.item)}
                    >
                      <div className={item.item.item.includes("<") ? "text-blue-600 font-medium" : ""}>
                        {item.item.item}
                      </div>
                      <div className="text-xs text-muted-foreground">{item.item.item_meta}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </CommandPrimitive>
    </div>
  )
}

// Define types for the command data structure
export type ClassItem = {
  item: string
  item_meta: string
  searchableText?: string
}

export type Group = {
  group: string
  classes: ClassItem[]
}

export type Category = {
  category: string
  groups: Group[]
}

// Helper function to add searchable text to each item
export function addSearchableText(category: Category): Category {
  return {
    ...category,
    groups: category.groups.map((group) => ({
      ...group,
      classes: group.classes.map((classItem) => ({
        ...classItem,
        searchableText: `${group.group} ${classItem.item} ${classItem.item_meta}`,
      })),
    })),
  }
}

// List of all category names for reference
export const categoryNames = ["Layout", "Flexbox & Grid", "Spacing", "Sizing", "Typography", "Backgrounds", "Borders"]

// Function to dynamically import category data
export async function getCategoryData(categoryName: string): Promise<Category> {
  try {
    let categoryModule

    switch (categoryName) {
      case "Layout":
        categoryModule = await import("./categories/tailwind-classes-layout")
        break
      case "Flexbox & Grid":
        categoryModule = await import("./categories/tailwind-classes-flexbox-and-grid")
        break
      case "Spacing":
        categoryModule = await import("./categories/tailwind-classes-spacing")
        break
      case "Sizing":
        categoryModule = await import("./categories/tailwind-classes-sizing")
        break
      case "Typography":
        categoryModule = await import("./categories/tailwind-classes-typography")
        break
      case "Backgrounds":
        categoryModule = await import("./categories/tailwind-classes-backgrounds")
        break
      case "Borders":
        categoryModule = await import("./categories/tailwind-classes-borders")
        break
      default:
        return { category: "Not Found", groups: [] }
    }

    // Add searchable text to the imported category
    return addSearchableText(categoryModule.default)
  } catch (error) {
    console.error(`Error loading category ${categoryName}:`, error)
    return { category: "Error", groups: [] }
  }
}

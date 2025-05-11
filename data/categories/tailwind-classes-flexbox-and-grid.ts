import type { Category } from "../command-data"

// Flexbox and Grid-related Tailwind classes
const flexboxAndGridCategory: Category = {
  category: "Flexbox & Grid",
  groups: [
    {
      group: "Flex Direction",
      classes: [
        {
          item: "flex-row",
          item_meta: "flex-direction: row;",
        },
        {
          item: "flex-row-reverse",
          item_meta: "flex-direction: row-reverse;",
        },
        {
          item: "flex-col",
          item_meta: "flex-direction: column;",
        },
        {
          item: "flex-col-reverse",
          item_meta: "flex-direction: column-reverse;",
        },
      ],
    },
    {
      group: "Flex Wrap",
      classes: [
        {
          item: "flex-wrap",
          item_meta: "flex-wrap: wrap;",
        },
        {
          item: "flex-wrap-reverse",
          item_meta: "flex-wrap: wrap-reverse;",
        },
        {
          item: "flex-nowrap",
          item_meta: "flex-wrap: nowrap;",
        },
      ],
    },
    {
      group: "Grid Template",
      classes: [
        {
          item: "grid-cols-<number>",
          item_meta: "grid-template-columns: repeat(<number>, minmax(0, 1fr));",
        },
        {
          item: "grid-rows-<number>",
          item_meta: "grid-template-rows: repeat(<number>, minmax(0, 1fr));",
        },
        {
          item: "grid-flow-row",
          item_meta: "grid-auto-flow: row;",
        },
        {
          item: "grid-flow-col",
          item_meta: "grid-auto-flow: column;",
        },
      ],
    },
  ],
}

export default flexboxAndGridCategory

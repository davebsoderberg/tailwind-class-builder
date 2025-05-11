import type { Category } from "../command-data"

// Sizing-related Tailwind classes
const sizingCategory: Category = {
  category: "Sizing",
  groups: [
    {
      group: "Width",
      classes: [
        {
          item: "w-<number>",
          item_meta: "width: <number> * 0.25rem;",
        },
        {
          item: "w-px",
          item_meta: "width: 1px;",
        },
        {
          item: "w-<fraction>",
          item_meta: "width: <fraction>;",
        },
        {
          item: "w-full",
          item_meta: "width: 100%;",
        },
        {
          item: "w-screen",
          item_meta: "width: 100vw;",
        },
        {
          item: "w-min",
          item_meta: "width: min-content;",
        },
        {
          item: "w-max",
          item_meta: "width: max-content;",
        },
        {
          item: "w-auto",
          item_meta: "width: auto;",
        },
      ],
    },
    {
      group: "Height",
      classes: [
        {
          item: "h-<number>",
          item_meta: "height: <number> * 0.25rem;",
        },
        {
          item: "h-px",
          item_meta: "height: 1px;",
        },
        {
          item: "h-<fraction>",
          item_meta: "height: <fraction>;",
        },
        {
          item: "h-full",
          item_meta: "height: 100%;",
        },
        {
          item: "h-screen",
          item_meta: "height: 100vh;",
        },
        {
          item: "h-min",
          item_meta: "height: min-content;",
        },
        {
          item: "h-max",
          item_meta: "height: max-content;",
        },
        {
          item: "h-auto",
          item_meta: "height: auto;",
        },
      ],
    },
    {
      group: "Min/Max",
      classes: [
        {
          item: "min-w-0",
          item_meta: "min-width: 0;",
        },
        {
          item: "min-w-full",
          item_meta: "min-width: 100%;",
        },
        {
          item: "min-h-0",
          item_meta: "min-height: 0;",
        },
        {
          item: "min-h-full",
          item_meta: "min-height: 100%;",
        },
        {
          item: "max-w-<size>",
          item_meta: "max-width: <size>;",
        },
        {
          item: "max-h-<size>",
          item_meta: "max-height: <size>;",
        },
      ],
    },
  ],
}

export default sizingCategory

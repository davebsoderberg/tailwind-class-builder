import type { Category } from "../command-data"

// Border-related Tailwind classes
const bordersCategory: Category = {
  category: "Borders",
  groups: [
    {
      group: "Border Width",
      classes: [
        {
          item: "border",
          item_meta: "border-width: 1px;",
        },
        {
          item: "border-0",
          item_meta: "border-width: 0px;",
        },
        {
          item: "border-2",
          item_meta: "border-width: 2px;",
        },
        {
          item: "border-4",
          item_meta: "border-width: 4px;",
        },
        {
          item: "border-8",
          item_meta: "border-width: 8px;",
        },
        {
          item: "border-x",
          item_meta: "border-left-width: 1px; border-right-width: 1px;",
        },
        {
          item: "border-y",
          item_meta: "border-top-width: 1px; border-bottom-width: 1px;",
        },
        {
          item: "border-t",
          item_meta: "border-top-width: 1px;",
        },
        {
          item: "border-r",
          item_meta: "border-right-width: 1px;",
        },
        {
          item: "border-b",
          item_meta: "border-bottom-width: 1px;",
        },
        {
          item: "border-l",
          item_meta: "border-left-width: 1px;",
        },
      ],
    },
    {
      group: "Border Color",
      classes: [
        {
          item: "border-transparent",
          item_meta: "border-color: transparent;",
        },
        {
          item: "border-current",
          item_meta: "border-color: currentColor;",
        },
        {
          item: "border-black",
          item_meta: "border-color: rgb(0 0 0);",
        },
        {
          item: "border-white",
          item_meta: "border-color: rgb(255 255 255);",
        },
        {
          item: "border-gray-<number>",
          item_meta: "border-color: rgb(var(--gray-<number>));",
        },
        {
          item: "border-red-<number>",
          item_meta: "border-color: rgb(var(--red-<number>));",
        },
        {
          item: "border-blue-<number>",
          item_meta: "border-color: rgb(var(--blue-<number>));",
        },
      ],
    },
    {
      group: "Border Radius",
      classes: [
        {
          item: "rounded-none",
          item_meta: "border-radius: 0;",
        },
        {
          item: "rounded-sm",
          item_meta: "border-radius: 0.125rem;",
        },
        {
          item: "rounded",
          item_meta: "border-radius: 0.25rem;",
        },
        {
          item: "rounded-md",
          item_meta: "border-radius: 0.375rem;",
        },
        {
          item: "rounded-lg",
          item_meta: "border-radius: 0.5rem;",
        },
        {
          item: "rounded-xl",
          item_meta: "border-radius: 0.75rem;",
        },
        {
          item: "rounded-2xl",
          item_meta: "border-radius: 1rem;",
        },
        {
          item: "rounded-3xl",
          item_meta: "border-radius: 1.5rem;",
        },
        {
          item: "rounded-full",
          item_meta: "border-radius: 9999px;",
        },
      ],
    },
  ],
}

export default bordersCategory

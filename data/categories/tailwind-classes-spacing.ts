import type { Category } from "../command-data"

// Spacing-related Tailwind classes
const spacingCategory: Category = {
  category: "Spacing",
  groups: [
    {
      group: "Padding",
      classes: [
        {
          item: "p-<number>",
          item_meta: "padding: <number> * 0.25rem;",
        },
        {
          item: "px-<number>",
          item_meta: "padding-left: <number> * 0.25rem; padding-right: <number> * 0.25rem;",
        },
        {
          item: "py-<number>",
          item_meta: "padding-top: <number> * 0.25rem; padding-bottom: <number> * 0.25rem;",
        },
        {
          item: "pt-<number>",
          item_meta: "padding-top: <number> * 0.25rem;",
        },
        {
          item: "pr-<number>",
          item_meta: "padding-right: <number> * 0.25rem;",
        },
        {
          item: "pb-<number>",
          item_meta: "padding-bottom: <number> * 0.25rem;",
        },
        {
          item: "pl-<number>",
          item_meta: "padding-left: <number> * 0.25rem;",
        },
      ],
    },
    {
      group: "Margin",
      classes: [
        {
          item: "m-<number>",
          item_meta: "margin: <number> * 0.25rem;",
        },
        {
          item: "mx-<number>",
          item_meta: "margin-left: <number> * 0.25rem; margin-right: <number> * 0.25rem;",
        },
        {
          item: "my-<number>",
          item_meta: "margin-top: <number> * 0.25rem; margin-bottom: <number> * 0.25rem;",
        },
        {
          item: "mt-<number>",
          item_meta: "margin-top: <number> * 0.25rem;",
        },
        {
          item: "mr-<number>",
          item_meta: "margin-right: <number> * 0.25rem;",
        },
        {
          item: "mb-<number>",
          item_meta: "margin-bottom: <number> * 0.25rem;",
        },
        {
          item: "ml-<number>",
          item_meta: "margin-left: <number> * 0.25rem;",
        },
      ],
    },
    {
      group: "Space Between",
      classes: [
        {
          item: "space-x-<number>",
          item_meta: "margin-left: <number> * 0.25rem;",
        },
        {
          item: "space-y-<number>",
          item_meta: "margin-top: <number> * 0.25rem;",
        },
        {
          item: "space-x-reverse",
          item_meta: "flex-direction: row-reverse;",
        },
        {
          item: "space-y-reverse",
          item_meta: "flex-direction: column-reverse;",
        },
      ],
    },
  ],
}

export default spacingCategory

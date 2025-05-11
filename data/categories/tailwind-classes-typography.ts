import type { Category } from "../command-data"

// Typography-related Tailwind classes
const typographyCategory: Category = {
  category: "Typography",
  groups: [
    {
      group: "Font Family",
      classes: [
        {
          item: "font-sans",
          item_meta: "font-family: ui-sans-serif, system-ui, sans-serif;",
        },
        {
          item: "font-serif",
          item_meta: "font-family: ui-serif, Georgia, serif;",
        },
        {
          item: "font-mono",
          item_meta: "font-family: ui-monospace, monospace;",
        },
      ],
    },
    {
      group: "Font Size",
      classes: [
        {
          item: "text-xs",
          item_meta: "font-size: 0.75rem; line-height: 1rem;",
        },
        {
          item: "text-sm",
          item_meta: "font-size: 0.875rem; line-height: 1.25rem;",
        },
        {
          item: "text-base",
          item_meta: "font-size: 1rem; line-height: 1.5rem;",
        },
        {
          item: "text-lg",
          item_meta: "font-size: 1.125rem; line-height: 1.75rem;",
        },
        {
          item: "text-xl",
          item_meta: "font-size: 1.25rem; line-height: 1.75rem;",
        },
        {
          item: "text-2xl",
          item_meta: "font-size: 1.5rem; line-height: 2rem;",
        },
        {
          item: "text-3xl",
          item_meta: "font-size: 1.875rem; line-height: 2.25rem;",
        },
      ],
    },
    {
      group: "Font Weight",
      classes: [
        {
          item: "font-thin",
          item_meta: "font-weight: 100;",
        },
        {
          item: "font-extralight",
          item_meta: "font-weight: 200;",
        },
        {
          item: "font-light",
          item_meta: "font-weight: 300;",
        },
        {
          item: "font-normal",
          item_meta: "font-weight: 400;",
        },
        {
          item: "font-medium",
          item_meta: "font-weight: 500;",
        },
        {
          item: "font-semibold",
          item_meta: "font-weight: 600;",
        },
        {
          item: "font-bold",
          item_meta: "font-weight: 700;",
        },
        {
          item: "font-extrabold",
          item_meta: "font-weight: 800;",
        },
        {
          item: "font-black",
          item_meta: "font-weight: 900;",
        },
      ],
    },
  ],
}

export default typographyCategory

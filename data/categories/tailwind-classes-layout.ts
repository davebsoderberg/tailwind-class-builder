import type { Category } from "../command-data"

// Layout-related Tailwind classes
const layoutCategory: Category = {
  category: "Layout",
  groups: [
    {
      group: "Container",
      classes: [
        {
          item: "container",
          item_meta: "width: 100%;",
        },
        {
          item: "container-sm",
          item_meta: "max-width: 640px;",
        },
        {
          item: "container-md",
          item_meta: "max-width: 768px;",
        },
        {
          item: "container-lg",
          item_meta: "max-width: 1024px;",
        },
      ],
    },
    {
      group: "Display",
      classes: [
        {
          item: "block",
          item_meta: "display: block;",
        },
        {
          item: "inline-block",
          item_meta: "display: inline-block;",
        },
        {
          item: "inline",
          item_meta: "display: inline;",
        },
        {
          item: "flex",
          item_meta: "display: flex;",
        },
        {
          item: "inline-flex",
          item_meta: "display: inline-flex;",
        },
      ],
    },
    {
      group: "Position",
      classes: [
        {
          item: "static",
          item_meta: "position: static;",
        },
        {
          item: "fixed",
          item_meta: "position: fixed;",
        },
        {
          item: "absolute",
          item_meta: "position: absolute;",
        },
        {
          item: "relative",
          item_meta: "position: relative;",
        },
        {
          item: "sticky",
          item_meta: "position: sticky;",
        },
      ],
    },
  ],
}

export default layoutCategory

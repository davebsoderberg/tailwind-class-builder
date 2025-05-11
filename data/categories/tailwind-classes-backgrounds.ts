import type { Category } from "../command-data"

// Background-related Tailwind classes
const backgroundsCategory: Category = {
  category: "Backgrounds",
  groups: [
    {
      group: "Background Color",
      classes: [
        {
          item: "bg-transparent",
          item_meta: "background-color: transparent;",
        },
        {
          item: "bg-black",
          item_meta: "background-color: rgb(0 0 0);",
        },
        {
          item: "bg-white",
          item_meta: "background-color: rgb(255 255 255);",
        },
        {
          item: "bg-gray-<number>",
          item_meta: "background-color: rgb(var(--gray-<number>));",
        },
        {
          item: "bg-red-<number>",
          item_meta: "background-color: rgb(var(--red-<number>));",
        },
        {
          item: "bg-blue-<number>",
          item_meta: "background-color: rgb(var(--blue-<number>));",
        },
      ],
    },
    {
      group: "Background Opacity",
      classes: [
        {
          item: "bg-opacity-<number>",
          item_meta: "background-color: rgb(var(--bg-opacity-<number>));",
        },
        {
          item: "bg-opacity-0",
          item_meta: "background-color: rgb(var(--bg-opacity-0));",
        },
        {
          item: "bg-opacity-5",
          item_meta: "background-color: rgb(var(--bg-opacity-5));",
        },
        {
          item: "bg-opacity-10",
          item_meta: "background-color: rgb(var(--bg-opacity-10));",
        },
        {
          item: "bg-opacity-20",
          item_meta: "background-color: rgb(var(--bg-opacity-20));",
        },
        {
          item: "bg-opacity-25",
          item_meta: "background-color: rgb(var(--bg-opacity-25));",
        },
        {
          item: "bg-opacity-30",
          item_meta: "background-color: rgb(var(--bg-opacity-30));",
        },
        {
          item: "bg-opacity-40",
          item_meta: "background-color: rgb(var(--bg-opacity-40));",
        },
        {
          item: "bg-opacity-50",
          item_meta: "background-color: rgb(var(--bg-opacity-50));",
        },
        {
          item: "bg-opacity-60",
          item_meta: "background-color: rgb(var(--bg-opacity-60));",
        },
        {
          item: "bg-opacity-70",
          item_meta: "background-color: rgb(var(--bg-opacity-70));",
        },
        {
          item: "bg-opacity-75",
          item_meta: "background-color: rgb(var(--bg-opacity-75));",
        },
        {
          item: "bg-opacity-80",
          item_meta: "background-color: rgb(var(--bg-opacity-80));",
        },
        {
          item: "bg-opacity-90",
          item_meta: "background-color: rgb(var(--bg-opacity-90));",
        },
        {
          item: "bg-opacity-95",
          item_meta: "background-color: rgb(var(--bg-opacity-95));",
        },
        {
          item: "bg-opacity-100",
          item_meta: "background-color: rgb(var(--bg-opacity-100));",
        },
      ],
    },
    {
      group: "Background Position",
      classes: [
        {
          item: "bg-bottom",
          item_meta: "background-position: bottom;",
        },
        {
          item: "bg-center",
          item_meta: "background-position: center;",
        },
        {
          item: "bg-left",
          item_meta: "background-position: left;",
        },
        {
          item: "bg-left-bottom",
          item_meta: "background-position: left bottom;",
        },
        {
          item: "bg-left-top",
          item_meta: "background-position: left top;",
        },
        {
          item: "bg-right",
          item_meta: "background-position: right;",
        },
        {
          item: "bg-right-bottom",
          item_meta: "background-position: right bottom;",
        },
        {
          item: "bg-right-top",
          item_meta: "background-position: right top;",
        },
        {
          item: "bg-top",
          item_meta: "background-position: top;",
        },
      ],
    },
  ],
}

export default backgroundsCategory

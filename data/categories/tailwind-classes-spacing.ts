import type { Category } from "../command-data"

// Spacing-related Tailwind classes
const spacingCategory: Category = {
  category: "Spacing",
  groups: [
    {
      group: "padding",
      classes: [
        {
          item: "p-px",
          item_meta: "padding: 1px;",
        },
        {
          item: "p-(<custom-property>)",
          item_meta: "padding: var(<custom-property>);",
        },
        {
          item: "p-[<value>]",
          item_meta: "padding: <value>;",
        },
        {
          item: "px-<number>",
          item_meta: "padding-inline: calc(var(--spacing) * <number>);",
        },
        {
          item: "px-px",
          item_meta: "padding-inline: 1px;",
        },
        {
          item: "px-(<custom-property>)",
          item_meta: "padding-inline: var(<custom-property>);",
        },
        {
          item: "px-[<value>]",
          item_meta: "padding-inline: <value>;",
        },
        {
          item: "py-<number>",
          item_meta: "padding-block: calc(var(--spacing) * <number>);",
        },
        {
          item: "py-px",
          item_meta: "padding-block: 1px;",
        },
        {
          item: "py-(<custom-property>)",
          item_meta: "padding-block: var(<custom-property>);",
        },
        {
          item: "py-[<value>]",
          item_meta: "padding-block: <value>;",
        },
        {
          item: "ps-<number>",
          item_meta: "padding-inline-start: calc(var(--spacing) * <number>);",
        },
        {
          item: "ps-px",
          item_meta: "padding-inline-start: 1px;",
        },
        {
          item: "ps-(<custom-property>)",
          item_meta: "padding-inline-start: var(<custom-property>);",
        },
        {
          item: "ps-[<value>]",
          item_meta: "padding-inline-start: <value>;",
        },
        {
          item: "pe-<number>",
          item_meta: "padding-inline-end: calc(var(--spacing) * <number>);",
        },
        {
          item: "pe-px",
          item_meta: "padding-inline-end: 1px;",
        },
        {
          item: "pe-(<custom-property>)",
          item_meta: "padding-inline-end: var(<custom-property>);",
        },
        {
          item: "pe-[<value>]",
          item_meta: "padding-inline-end: <value>;",
        },
        {
          item: "pt-<number>",
          item_meta: "padding-top: calc(var(--spacing) * <number>);",
        },
        {
          item: "pt-px",
          item_meta: "padding-top: 1px;",
        },
        {
          item: "pt-(<custom-property>)",
          item_meta: "padding-top: var(<custom-property>);",
        },
        {
          item: "pt-[<value>]",
          item_meta: "padding-top: <value>;",
        },
        {
          item: "pr-<number>",
          item_meta: "padding-right: calc(var(--spacing) * <number>);",
        },
        {
          item: "pr-px",
          item_meta: "padding-right: 1px;",
        },
        {
          item: "pr-(<custom-property>)",
          item_meta: "padding-right: var(<custom-property>);",
        },
        {
          item: "pr-[<value>]",
          item_meta: "padding-right: <value>;",
        },
        {
          item: "pb-<number>",
          item_meta: "padding-bottom: calc(var(--spacing) * <number>);",
        },
        {
          item: "pb-px",
          item_meta: "padding-bottom: 1px;",
        },
        {
          item: "pb-(<custom-property>)",
          item_meta: "padding-bottom: var(<custom-property>);",
        },
        {
          item: "pb-[<value>]",
          item_meta: "padding-bottom: <value>;",
        },
        {
          item: "pl-<number>",
          item_meta: "padding-left: calc(var(--spacing) * <number>);",
        },
        {
          item: "pl-px",
          item_meta: "padding-left: 1px;",
        },
        {
          item: "pl-(<custom-property>)",
          item_meta: "padding-left: var(<custom-property>);",
        },
        {
          item: "pl-[<value>]",
          item_meta: "padding-left: <value>;",
        }
      ]
    },
    {
      group: "margin",
      classes: [
        {
          item: "m-<number>",
          item_meta: "margin: calc(var(--spacing) * <number>);",
        },
        {
          item: "-m-<number>",
          item_meta: "margin: calc(var(--spacing) * -<number>);",
        },
        {
          item: "m-auto",
          item_meta: "margin: auto;",
        },
        {
          item: "m-px",
          item_meta: "margin: 1px;",
        },
        {
          item: "-m-px",
          item_meta: "margin: -1px;",
        },
        {
          item: "m-(<custom-property>)",
          item_meta: "margin: var(<custom-property>);",
        },
        {
          item: "m-[<value>]",
          item_meta: "margin: <value>;",
        },
        {
          item: "mx-<number>",
          item_meta: "margin-inline: calc(var(--spacing) * <number>);",
        },
        {
          item: "-mx-<number>",
          item_meta: "margin-inline: calc(var(--spacing) * -<number>);",
        },
        {
          item: "mx-auto",
          item_meta: "margin-inline: auto;",
        },
        {
          item: "mx-px",
          item_meta: "margin-inline: 1px;",
        },
        {
          item: "-mx-px",
          item_meta: "margin-inline: -1px;",
        },
        {
          item: "mx-(<custom-property>)",
          item_meta: "margin-inline: var(<custom-property>);",
        },
        {
          item: "mx-[<value>]",
          item_meta: "margin-inline: <value>;",
        },
        {
          item: "my-<number>",
          item_meta: "margin-block: calc(var(--spacing) * <number>);",
        },
        {
          item: "-my-<number>",
          item_meta: "margin-block: calc(var(--spacing) * -<number>);",
        },
        {
          item: "my-auto",
          item_meta: "margin-block: auto;",
        },
        {
          item: "my-px",
          item_meta: "margin-block: 1px;",
        },
        {
          item: "-my-px",
          item_meta: "margin-block: -1px;",
        },
        {
          item: "my-(<custom-property>)",
          item_meta: "margin-block: var(<custom-property>);",
        },
        {
          item: "my-[<value>]",
          item_meta: "margin-block: <value>;",
        },
        {
          item: "ms-<number>",
          item_meta: "margin-inline-start: calc(var(--spacing) * <number>);",
        },
        {
          item: "-ms-<number>",
          item_meta: "margin-inline-start: calc(var(--spacing) * -<number>);",
        },
        {
          item: "ms-auto",
          item_meta: "margin-inline-start: auto;",
        },
        {
          item: "ms-px",
          item_meta: "margin-inline-start: 1px;",
        },
        {
          item: "-ms-px",
          item_meta: "margin-inline-start: -1px;",
        },
        {
          item: "ms-(<custom-property>)",
          item_meta: "margin-inline-start: var(<custom-property>);",
        },
        {
          item: "ms-[<value>]",
          item_meta: "margin-inline-start: <value>;",
        },
        {
          item: "me-<number>",
          item_meta: "margin-inline-end: calc(var(--spacing) * <number>);",
        },
        {
          item: "-me-<number>",
          item_meta: "margin-inline-end: calc(var(--spacing) * -<number>);",
        },
        {
          item: "me-auto",
          item_meta: "margin-inline-end: auto;",
        },
        {
          item: "me-px",
          item_meta: "margin-inline-end: 1px;",
        },
        {
          item: "-me-px",
          item_meta: "margin-inline-end: -1px;",
        },
        {
          item: "me-(<custom-property>)",
          item_meta: "margin-inline-end: var(<custom-property>);",
        },
        {
          item: "me-[<value>]",
          item_meta: "margin-inline-end: <value>;",
        },
        {
          item: "mt-<number>",
          item_meta: "margin-top: calc(var(--spacing) * <number>);",
        },
        {
          item: "-mt-<number>",
          item_meta: "margin-top: calc(var(--spacing) * -<number>);",
        },
        {
          item: "mt-auto",
          item_meta: "margin-top: auto;",
        },
        {
          item: "mt-px",
          item_meta: "margin-top: 1px;",
        },
        {
          item: "-mt-px",
          item_meta: "margin-top: -1px;",
        },
        {
          item: "mt-(<custom-property>)",
          item_meta: "margin-top: var(<custom-property>);",
        },
        {
          item: "mt-[<value>]",
          item_meta: "margin-top: <value>;",
        },
        {
          item: "mr-<number>",
          item_meta: "margin-right: calc(var(--spacing) * <number>);",
        },
        {
          item: "-mr-<number>",
          item_meta: "margin-right: calc(var(--spacing) * -<number>);",
        },
        {
          item: "mr-auto",
          item_meta: "margin-right: auto;",
        },
        {
          item: "mr-px",
          item_meta: "margin-right: 1px;",
        },
        {
          item: "-mr-px",
          item_meta: "margin-right: -1px;",
        },
        {
          item: "mr-(<custom-property>)",
          item_meta: "margin-right: var(<custom-property>);",
        },
        {
          item: "mr-[<value>]",
          item_meta: "margin-right: <value>;",
        },
        {
          item: "mb-<number>",
          item_meta: "margin-bottom: calc(var(--spacing) * <number>);",
        },
        {
          item: "-mb-<number>",
          item_meta: "margin-bottom: calc(var(--spacing) * -<number>);",
        },
        {
          item: "mb-auto",
          item_meta: "margin-bottom: auto;",
        },
        {
          item: "mb-px",
          item_meta: "margin-bottom: 1px;",
        },
        {
          item: "-mb-px",
          item_meta: "margin-bottom: -1px;",
        },
        {
          item: "mb-(<custom-property>)",
          item_meta: "margin-bottom: var(<custom-property>);",
        },
        {
          item: "mb-[<value>]",
          item_meta: "margin-bottom: <value>;",
        },
        {
          item: "ml-<number>",
          item_meta: "margin-left: calc(var(--spacing) * <number>);",
        },
        {
          item: "-ml-<number>",
          item_meta: "margin-left: calc(var(--spacing) * -<number>);",
        },
        {
          item: "ml-auto",
          item_meta: "margin-left: auto;",
        },
        {
          item: "ml-px",
          item_meta: "margin-left: 1px;",
        },
        {
          item: "-ml-px",
          item_meta: "margin-left: -1px;",
        },
        {
          item: "ml-(<custom-property>)",
          item_meta: "margin-left: var(<custom-property>);",
        },
        {
          item: "ml-[<value>]",
          item_meta: "margin-left: <value>;",
        }
      ]
    }
  ]
}

export default spacingCategory

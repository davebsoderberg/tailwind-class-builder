import type { Category } from "../command-data"

// Flexbox and Grid-related Tailwind classes
const flexboxAndGridCategory: Category = {
  category: "Flexbox & Grid",
  groups: [
    {
      group: "flex-basis",
      classes: [
        {
          item: "basis-<fraction>",
          item_meta: "flex-basis: calc(<fraction> * 100%);",
        },
        {
          item: "basis-full",
          item_meta: "flex-basis: 100%;",
        },
        {
          item: "basis-auto",
          item_meta: "flex-basis: auto;",
        },
        {
          item: "basis-3xs",
          item_meta: "flex-basis: var(--container-3xs); /* 16rem (256px) */",
        },
        {
          item: "basis-2xs",
          item_meta: "flex-basis: var(--container-2xs); /* 18rem (288px) */",
        },
        {
          item: "basis-xs",
          item_meta: "flex-basis: var(--container-xs); /* 20rem (320px) */",
        },
        {
          item: "basis-sm",
          item_meta: "flex-basis: var(--container-sm); /* 24rem (384px) */",
        },
        {
          item: "basis-md",
          item_meta: "flex-basis: var(--container-md); /* 28rem (448px) */",
        },
        {
          item: "basis-lg",
          item_meta: "flex-basis: var(--container-lg); /* 32rem (512px) */",
        },
        {
          item: "basis-xl",
          item_meta: "flex-basis: var(--container-xl); /* 36rem (576px) */",
        },
        {
          item: "basis-2xl",
          item_meta: "flex-basis: var(--container-2xl); /* 42rem (672px) */",
        },
        {
          item: "basis-3xl",
          item_meta: "flex-basis: var(--container-3xl); /* 48rem (768px) */",
        },
        {
          item: "basis-4xl",
          item_meta: "flex-basis: var(--container-4xl); /* 56rem (896px) */",
        },
        {
          item: "basis-5xl",
          item_meta: "flex-basis: var(--container-5xl); /* 64rem (1024px) */",
        },
        {
          item: "basis-6xl",
          item_meta: "flex-basis: var(--container-6xl); /* 72rem (1152px) */",
        },
        {
          item: "basis-7xl",
          item_meta: "flex-basis: var(--container-7xl); /* 80rem (1280px) */",
        },
        {
          item: "basis-(<custom-property>)",
          item_meta: "flex-basis: var(<custom-property>);",
        },
        {
          item: "basis-[<value>]",
          item_meta: "flex-basis: <value>;",
        }
      ]
    },
    {
      group: "flex-direction",
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
        }
      ]
    },
    {
      group: "flex-wrap",
      classes: [
        {
          item: "flex-nowrap",
          item_meta: "flex-wrap: nowrap;",
        },
        {
          item: "flex-wrap",
          item_meta: "flex-wrap: wrap;",
        },
        {
          item: "flex-wrap-reverse",
          item_meta: "flex-wrap: wrap-reverse;",
        }
      ]
    },
    {
      group: "flex",
      classes: [
        {
          item: "flex-<number>",
          item_meta: "flex: <number>;",
        },
        {
          item: "flex-<fraction>",
          item_meta: "flex: calc(<fraction> * 100%);",
        },
        {
          item: "flex-auto",
          item_meta: "flex: 1 1 auto;",
        },
        {
          item: "flex-initial",
          item_meta: "flex: 0 1 auto;",
        },
        {
          item: "flex-none",
          item_meta: "flex: none;",
        },
        {
          item: "flex-(<custom-property>)",
          item_meta: "flex: var(<custom-property>);",
        },
        {
          item: "flex-[<value>]",
          item_meta: "flex: <value>;",
        }
      ]
    },
    {
      group: "flex-grow",
      classes: [
        {
          item: "grow",
          item_meta: "flex-grow: 1;",
        },
        {
          item: "grow-<number>",
          item_meta: "flex-grow: <number>;",
        },
        {
          item: "grow-[<value>]",
          item_meta: "flex-grow: <value>;",
        },
        {
          item: "grow-(<custom-property>)",
          item_meta: "flex-grow: var(<custom-property>);",
        }
      ]
    },
    {
      group: "flex-shrink",
      classes: [
        {
          item: "shrink",
          item_meta: "flex-shrink: 1;",
        },
        {
          item: "shrink-<number>",
          item_meta: "flex-shrink: <number>;",
        },
        {
          item: "shrink-[<value>]",
          item_meta: "flex-shrink: <value>;",
        },
        {
          item: "shrink-(<custom-property>)",
          item_meta: "flex-shrink: var(<custom-property>);",
        }
      ]
    },
    {
      group: "order",
      classes: [
        {
          item: "order-<number>",
          item_meta: "order: <number>;",
        },
        {
          item: "-order-<number>",
          item_meta: "order: calc(<number> * -1);",
        },
        {
          item: "order-first",
          item_meta: "order: calc(-infinity);",
        },
        {
          item: "order-last",
          item_meta: "order: calc(infinity);",
        },
        {
          item: "order-none",
          item_meta: "order: 0;",
        },
        {
          item: "order-(<custom-property>)",
          item_meta: "order: var(<custom-property>);",
        },
        {
          item: "order-[<value>]",
          item_meta: "order: <value>;",
        }
      ]
    },
    {
      group: "grid-template-columns",
      classes: [
        {
          item: "grid-cols-<number>",
          item_meta: "grid-template-columns: repeat(<number>, minmax(0, 1fr));",
        },
        {
          item: "grid-cols-none",
          item_meta: "grid-template-columns: none;",
        },
        {
          item: "grid-cols-subgrid",
          item_meta: "grid-template-columns: subgrid;",
        },
        {
          item: "grid-cols-[<value>]",
          item_meta: "grid-template-columns: <value>;",
        },
        {
          item: "grid-cols-(<custom-property>)",
          item_meta: "grid-template-columns: var(<custom-property>);",
        }
      ]
    },
    {
      group: "grid-column",
      classes: [
        {
          item: "col-span-<number>",
          item_meta: "grid-column: span <number> / span <number>;",
        },
        {
          item: "col-span-full",
          item_meta: "grid-column: 1 / -1;",
        },
        {
          item: "col-span-(<custom-property>)",
          item_meta: "grid-column: span var(<custom-property>) / span var(<custom-property>);",
        },
        {
          item: "col-span-[<value>]",
          item_meta: "grid-column: span <value> / span <value>;",
        },
        {
          item: "col-start-<number>",
          item_meta: "grid-column-start: <number>;",
        },
        {
          item: "-col-start-<number>",
          item_meta: "grid-column-start: calc(<number> * -1);",
        },
        {
          item: "col-start-auto",
          item_meta: "grid-column-start: auto;",
        },
        {
          item: "col-start-(<custom-property>)",
          item_meta: "grid-column-start: var(<custom-property>);",
        },
        {
          item: "col-start-[<value>]",
          item_meta: "grid-column-start: <value>;",
        },
        {
          item: "col-end-<number>",
          item_meta: "grid-column-end: <number>;",
        },
        {
          item: "-col-end-<number>",
          item_meta: "grid-column-end: calc(<number> * -1);",
        },
        {
          item: "col-end-auto",
          item_meta: "grid-column-end: auto;",
        },
        {
          item: "col-end-(<custom-property>)",
          item_meta: "grid-column-end: var(<custom-property>);",
        },
        {
          item: "col-end-[<value>]",
          item_meta: "grid-column-end: <value>;",
        },
        {
          item: "col-auto",
          item_meta: "grid-column: auto;",
        },
        {
          item: "col-<number>",
          item_meta: "grid-column: <number>;",
        },
        {
          item: "-col-<number>",
          item_meta: "grid-column: calc(<number> * -1);",
        },
        {
          item: "col-(<custom-property>)",
          item_meta: "grid-column: var(<custom-property>);",
        },
        {
          item: "col-[<value>]",
          item_meta: "grid-column: <value>;",
        }
      ]
    },
    {
      group: "grid-template-rows",
      classes: [
        {
          item: "grid-rows-<number>",
          item_meta: "grid-template-rows: repeat(<number>, minmax(0, 1fr));",
        },
        {
          item: "grid-rows-none",
          item_meta: "grid-template-rows: none;",
        },
        {
          item: "grid-rows-subgrid",
          item_meta: "grid-template-rows: subgrid;",
        },
        {
          item: "grid-rows-[<value>]",
          item_meta: "grid-template-rows: <value>;",
        },
        {
          item: "grid-rows-(<custom-property>)",
          item_meta: "grid-template-rows: var(<custom-property>);",
        }
      ]
    },
    {
      group: "grid-row",
      classes: [
        {
          item: "row-span-<number>",
          item_meta: "grid-row: span <number> / span <number>;",
        },
        {
          item: "row-span-full",
          item_meta: "grid-row: 1 / -1;",
        },
        {
          item: "row-span-(<custom-property>)",
          item_meta: "grid-row: span var(<custom-property>) / span var(<custom-property>);",
        },
        {
          item: "row-span-[<value>]",
          item_meta: "grid-row: span <value> / span <value>;",
        },
        {
          item: "row-start-<number>",
          item_meta: "grid-row-start: <number>;",
        },
        {
          item: "-row-start-<number>",
          item_meta: "grid-row-start: calc(<number> * -1);",
        },
        {
          item: "row-start-auto",
          item_meta: "grid-row-start: auto;",
        },
        {
          item: "row-start-(<custom-property>)",
          item_meta: "grid-row-start: var(<custom-property>);",
        },
        {
          item: "row-start-[<value>]",
          item_meta: "grid-row-start: <value>;",
        },
        {
          item: "row-end-<number>",
          item_meta: "grid-row-end: <number>;",
        },
        {
          item: "-row-end-<number>",
          item_meta: "grid-row-end: calc(<number> * -1);",
        },
        {
          item: "row-end-auto",
          item_meta: "grid-row-end: auto;",
        },
        {
          item: "row-end-(<custom-property>)",
          item_meta: "grid-row-end: var(<custom-property>);",
        },
        {
          item: "row-end-[<value>]",
          item_meta: "grid-row-end: <value>;",
        },
        {
          item: "row-auto",
          item_meta: "grid-row: auto;",
        },
        {
          item: "row-<number>",
          item_meta: "grid-row: <number>;",
        },
        {
          item: "-row-<number>",
          item_meta: "grid-row: calc(<number> * -1);",
        },
        {
          item: "row-(<custom-property>)",
          item_meta: "grid-row: var(<custom-property>);",
        },
        {
          item: "row-[<value>]",
          item_meta: "grid-row: <value>;",
        }
      ]
    },
    {
      group: "grid-auto-flow",
      classes: [
        {
          item: "grid-flow-row",
          item_meta: "grid-auto-flow: row;",
        },
        {
          item: "grid-flow-col",
          item_meta: "grid-auto-flow: column;",
        },
        {
          item: "grid-flow-dense",
          item_meta: "grid-auto-flow: dense;",
        },
        {
          item: "grid-flow-row-dense",
          item_meta: "grid-auto-flow: row dense;",
        },
        {
          item: "grid-flow-col-dense",
          item_meta: "grid-auto-flow: column dense;",
        }
      ]
    },
    {
      group: "grid-auto-columns",
      classes: [
        {
          item: "auto-cols-auto",
          item_meta: "",
        },
        {
          item: "grid-auto-columns: auto;",
          item_meta: "",
        },
        {
          item: "auto-cols-min",
          item_meta: "",
        },
        {
          item: "grid-auto-columns: min-content;",
          item_meta: "",
        },
        {
          item: "auto-cols-max",
          item_meta: "",
        },
        {
          item: "grid-auto-columns: max-content;",
          item_meta: "",
        },
        {
          item: "auto-cols-fr",
          item_meta: "",
        },
        {
          item: "grid-auto-columns: minmax(0, 1fr);",
          item_meta: "",
        },
        {
          item: "auto-cols-(<custom-property>)",
          item_meta: "",
        },
        {
          item: "grid-auto-columns: var(<custom-property>);",
          item_meta: "",
        },
        {
          item: "auto-cols-[<value>]",
          item_meta: "",
        },
        {
          item: "grid-auto-columns: <value>;",
          item_meta: "",
        }
      ]
    },
    {
      group: "grid-auto-rows",
      classes: [
        {
          item: "auto-rows-auto",
          item_meta: "grid-auto-rows: auto;",
        },
        {
          item: "auto-rows-min",
          item_meta: "grid-auto-rows: min-content;",
        },
        {
          item: "auto-rows-max",
          item_meta: "grid-auto-rows: max-content;",
        },
        {
          item: "auto-rows-fr",
          item_meta: "grid-auto-rows: minmax(0, 1fr);",
        },
        {
          item: "auto-rows-(<custom-property>)",
          item_meta: "grid-auto-rows: var(<custom-property>);",
        },
        {
          item: "auto-rows-[<value>]",
          item_meta: "grid-auto-rows: <value>;",
        }
      ]
    },
    {
      group: "gap",
      classes: [
        {
          item: "gap-<number>",
          item_meta: "gap: calc(var(--spacing) * <value>);",
        },
        {
          item: "gap-(<custom-property>)",
          item_meta: "gap: var(<custom-property>);",
        },
        {
          item: "gap-[<value>]",
          item_meta: "gap: <value>;",
        },
        {
          item: "gap-x-<number>",
          item_meta: "column-gap: calc(var(--spacing) * <value>);",
        },
        {
          item: "gap-x-(<custom-property>)",
          item_meta: "column-gap: var(<custom-property>);",
        },
        {
          item: "gap-x-[<value>]",
          item_meta: "column-gap: <value>;",
        },
        {
          item: "gap-y-<number>",
          item_meta: "row-gap: calc(var(--spacing) * <value>);",
        },
        {
          item: "gap-y-(<custom-property>)",
          item_meta: "row-gap: var(<custom-property>);",
        },
        {
          item: "gap-y-[<value>]",
          item_meta: "row-gap: <value>;",
        }
      ]
    },
    {
      group: "justify-content",
      classes: [
        {
          item: "justify-start",
          item_meta: "justify-content: flex-start;",
        },
        {
          item: "justify-end",
          item_meta: "justify-content: flex-end;",
        },
        {
          item: "justify-end-safe",
          item_meta: "justify-content: safe flex-end;",
        },
        {
          item: "justify-center",
          item_meta: "justify-content: center;",
        },
        {
          item: "justify-center-safe",
          item_meta: "justify-content: safe center;",
        },
        {
          item: "justify-between",
          item_meta: "justify-content: space-between;",
        },
        {
          item: "justify-around",
          item_meta: "justify-content: space-around;",
        },
        {
          item: "justify-evenly",
          item_meta: "justify-content: space-evenly;",
        },
        {
          item: "justify-stretch",
          item_meta: "justify-content: stretch;",
        },
        {
          item: "justify-baseline",
          item_meta: "justify-content: baseline;",
        },
        {
          item: "justify-normal",
          item_meta: "justify-content: normal;",
        }
      ]
    },
    {
      group: "justify-items",
      classes: [
        {
          item: "justify-items-start",
          item_meta: "justify-items: start;",
        },
        {
          item: "justify-items-end",
          item_meta: "justify-items: end;",
        },
        {
          item: "justify-items-end-safe",
          item_meta: "justify-items: safe end;",
        },
        {
          item: "justify-items-center",
          item_meta: "justify-items: center;",
        },
        {
          item: "justify-items-center-safe",
          item_meta: "justify-items: safe center;",
        },
        {
          item: "justify-items-stretch",
          item_meta: "justify-items: stretch;",
        },
        {
          item: "justify-items-normal",
          item_meta: "justify-items: normal;",
        }
      ]
    },
    {
      group: "justify-self",
      classes: [
        {
          item: "justify-self-auto",
          item_meta: "justify-self: auto;",
        },
        {
          item: "justify-self-start",
          item_meta: "justify-self: start;",
        },
        {
          item: "justify-self-center",
          item_meta: "justify-self: center;",
        },
        {
          item: "justify-self-center-safe",
          item_meta: "justify-self: safe center;",
        },
        {
          item: "justify-self-end",
          item_meta: "justify-self: end;",
        },
        {
          item: "justify-self-end-safe",
          item_meta: "justify-self: safe end;",
        },
        {
          item: "justify-self-stretch",
          item_meta: "justify-self: stretch;",
        }
      ]
    },
    {
      group: "align-content",
      classes: [
        {
          item: "content-normal",
          item_meta: "align-content: normal;",
        },
        {
          item: "content-center",
          item_meta: "align-content: center;",
        },
        {
          item: "content-start",
          item_meta: "align-content: flex-start;",
        },
        {
          item: "content-end",
          item_meta: "align-content: flex-end;",
        },
        {
          item: "content-between",
          item_meta: "align-content: space-between;",
        },
        {
          item: "content-around",
          item_meta: "align-content: space-around;",
        },
        {
          item: "content-evenly",
          item_meta: "align-content: space-evenly;",
        },
        {
          item: "content-baseline",
          item_meta: "align-content: baseline;",
        },
        {
          item: "content-stretch",
          item_meta: "align-content: stretch;",
        }
      ]
    },
    {
      group: "align-items",
      classes: [
        {
          item: "items-start",
          item_meta: "align-items: flex-start;",
        },
        {
          item: "items-end",
          item_meta: "align-items: flex-end;",
        },
        {
          item: "items-end-safe",
          item_meta: "align-items: safe flex-end;",
        },
        {
          item: "items-center",
          item_meta: "align-items: center;",
        },
        {
          item: "items-center-safe",
          item_meta: "align-items: safe center;",
        },
        {
          item: "items-baseline",
          item_meta: "align-items: baseline;",
        },
        {
          item: "items-baseline-last",
          item_meta: "align-items: last baseline;",
        },
        {
          item: "items-stretch",
          item_meta: "align-items: stretch;",
        }
      ]
    },
    {
      group: "align-self",
      classes: [
        {
          item: "self-auto",
          item_meta: "align-self: auto;",
        },
        {
          item: "self-start",
          item_meta: "align-self: flex-start;",
        },
        {
          item: "self-end",
          item_meta: "align-self: flex-end;",
        },
        {
          item: "self-end-safe",
          item_meta: "align-self: safe flex-end;",
        },
        {
          item: "self-center",
          item_meta: "align-self: center;",
        },
        {
          item: "self-center-safe",
          item_meta: "align-self: safe center;",
        },
        {
          item: "self-stretch",
          item_meta: "align-self: stretch;",
        },
        {
          item: "self-baseline",
          item_meta: "align-self: baseline;",
        },
        {
          item: "self-baseline-last",
          item_meta: "align-self: last baseline;",
        }
      ]
    },
    {
      group: "place-content",
      classes: [
        {
          item: "place-content-center",
          item_meta: "place-content: center;",
        },
        {
          item: "place-content-center-safe",
          item_meta: "place-content: safe center;",
        },
        {
          item: "place-content-start",
          item_meta: "place-content: start;",
        },
        {
          item: "place-content-end",
          item_meta: "place-content: end;",
        },
        {
          item: "place-content-end-safe",
          item_meta: "place-content: safe end;",
        },
        {
          item: "place-content-between",
          item_meta: "place-content: space-between;",
        },
        {
          item: "place-content-around",
          item_meta: "place-content: space-around;",
        },
        {
          item: "place-content-evenly",
          item_meta: "place-content: space-evenly;",
        },
        {
          item: "place-content-baseline",
          item_meta: "place-content: baseline;",
        },
        {
          item: "place-content-stretch",
          item_meta: "place-content: stretch;",
        }
      ]
    },
    {
      group: "place-items",
      classes: [
        {
          item: "place-items-start",
          item_meta: "place-items: start;",
        },
        {
          item: "place-items-end",
          item_meta: "place-items: end;",
        },
        {
          item: "place-items-end-safe",
          item_meta: "place-items: safe end;",
        },
        {
          item: "place-items-center",
          item_meta: "place-items: center;",
        },
        {
          item: "place-items-center-safe",
          item_meta: "place-items: safe center;",
        },
        {
          item: "place-items-baseline",
          item_meta: "place-items: baseline;",
        },
        {
          item: "place-items-stretch",
          item_meta: "place-items: stretch;",
        }
      ]
    },
    {
      group: "place-self",
      classes: [
        {
          item: "place-self-auto",
          item_meta: "place-self: auto;",
        },
        {
          item: "place-self-start",
          item_meta: "place-self: start;",
        },
        {
          item: "place-self-end",
          item_meta: "place-self: end;",
        },
        {
          item: "place-self-end-safe",
          item_meta: "place-self: safe end;",
        },
        {
          item: "place-self-center",
          item_meta: "place-self: center;",
        },
        {
          item: "place-self-center-safe",
          item_meta: "place-self: safe center;",
        },
        {
          item: "place-self-stretch",
          item_meta: "place-self: stretch;",
        }
      ]
    }
  ]
}

export default flexboxAndGridCategory

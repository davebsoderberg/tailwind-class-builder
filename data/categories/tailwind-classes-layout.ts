import type { Category } from "../command-data"

// Layout-related Tailwind classes
const layoutCategory: Category = {
      category: "Layout",
      groups: [
        {
          group: "aspect-ratio",
          classes: [
            {
              item: "aspect-square",
              item_meta: "aspect-ratio: 1 / 1;",
            },
            {
              item: "aspect-video",
              item_meta: "aspect-ratio: var(--aspect-ratio-video); /* 16 / 9 */",
            },
            {
              item: "aspect-auto",
              item_meta: "aspect-ratio: auto;",
            },
            {
              item: "aspect-(<custom-property>)",
              item_meta: "aspect-ratio: var(<custom-property>);",
            },
            {
              item: "aspect-[<value>]",
              item_meta: "aspect-ratio: <value>;",
            }
          ]
        },
        {
          group: "columns",
          classes: [
            {
              item: "columns-<number>",
              item_meta: "columns: <number>;",
            },
            {
              item: "columns-3xs",
              item_meta: "columns: var(--container-3xs); /* 16rem (256px) */",
            },
            {
              item: "columns-2xs",
              item_meta: "columns: var(--container-2xs); /* 18rem (288px) */",
            },
            {
              item: "columns-xs",
              item_meta: "columns: var(--container-xs); /* 20rem (320px) */",
            },
            {
              item: "columns-sm",
              item_meta: "columns: var(--container-sm); /* 24rem (384px) */",
            },
            {
              item: "columns-md",
              item_meta: "columns: var(--container-md); /* 28rem (448px) */",
            },
            {
              item: "columns-lg",
              item_meta: "columns: var(--container-lg); /* 32rem (512px) */",
            },
            {
              item: "columns-xl",
              item_meta: "columns: var(--container-xl); /* 36rem (576px) */",
            },
            {
              item: "columns-2xl",
              item_meta: "columns: var(--container-2xl); /* 42rem (672px) */",
            },
            {
              item: "columns-3xl",
              item_meta: "columns: var(--container-3xl); /* 48rem (768px) */",
            },
            {
              item: "columns-4xl",
              item_meta: "columns: var(--container-4xl); /* 56rem (896px) */",
            },
            {
              item: "columns-5xl",
              item_meta: "columns: var(--container-5xl); /* 64rem (1024px) */",
            },
            {
              item: "columns-6xl",
              item_meta: "columns: var(--container-6xl); /* 72rem (1152px) */",
            },
            {
              item: "columns-7xl",
              item_meta: "columns: var(--container-7xl); /* 80rem (1280px) */",
            },
            {
              item: "columns-auto",
              item_meta: "columns: auto;",
            },
            {
              item: "columns-(<custom-property>)",
              item_meta: "columns: var(<custom-property>);",
            },
            {
              item: "columns-[<value>]",
              item_meta: "columns: <value>;",
            }
          ]
        },
        {
          group: "break-after",
          classes: [
            {
              item: "break-after-auto",
              item_meta: "break-after: auto;",
            },
            {
              item: "break-after-avoid",
              item_meta: "break-after: avoid;",
            },
            {
              item: "break-after-all",
              item_meta: "break-after: all;",
            },
            {
              item: "break-after-avoid-page",
              item_meta: "break-after: avoid-page;",
            },
            {
              item: "break-after-page",
              item_meta: "break-after: page;",
            },
            {
              item: "break-after-left",
              item_meta: "break-after: left;",
            },
            {
              item: "break-after-right",
              item_meta: "break-after: right;",
            },
            {
              item: "break-after-column",
              item_meta: "break-after: column;",
            }
          ]
        },
        {
          group: "break-before",
          classes: [
            {
              item: "break-before-auto",
              item_meta: "break-before: auto;",
            },
            {
              item: "break-before-avoid",
              item_meta: "break-before: avoid;",
            },
            {
              item: "break-before-all",
              item_meta: "break-before: all;",
            },
            {
              item: "break-before-avoid-page",
              item_meta: "break-before: avoid-page;",
            },
            {
              item: "break-before-page",
              item_meta: "break-before: page;",
            },
            {
              item: "break-before-left",
              item_meta: "break-before: left;",
            },
            {
              item: "break-before-right",
              item_meta: "break-before: right;",
            },
            {
              item: "break-before-column",
              item_meta: "break-before: column;",
            }
          ]
        },
        {
          group: "break-inside",
          classes: [
            {
              item: "break-inside-auto",
              item_meta: "break-inside: auto;",
            },
            {
              item: "break-inside-avoid",
              item_meta: "break-inside: avoid;",
            },
            {
              item: "break-inside-avoid-page",
              item_meta: "break-inside: avoid-page;",
            },
            {
              item: "break-inside-avoid-column",
              item_meta: "break-inside: avoid-column;",
            }
          ]
        },
        {
          group: "box-decoration-break",
          classes: [
            {
              item: "box-decoration-clone",
              item_meta: "box-decoration-break: clone",
            },
            {
              item: "box-decoration-slice",
              item_meta: "box-decoration-break: slice",
            }
          ]
        },
        {
          group: "box-sizing",
          classes: [
            {
              item: "box-border",
              item_meta: "box-sizing: border-box",
            },
            {
              item: "box-content",
              item_meta: "box-sizing: content-box",
            }
          ]
        },
        {
          group: "display",
          classes: [
            {
              item: "inline",
              item_meta: "display: inline;",
            },
            {
              item: "block",
              item_meta: "display: block;",
            },
            {
              item: "inline-block",
              item_meta: "display: inline-block;",
            },
            {
              item: "flow-root",
              item_meta: "display: flow-root;",
            },
            {
              item: "flex",
              item_meta: "display: flex;",
            },
            {
              item: "inline-flex",
              item_meta: "display: inline-flex;",
            },
            {
              item: "grid",
              item_meta: "display: grid;",
            },
            {
              item: "inline-grid",
              item_meta: "display: inline-grid;",
            },
            {
              item: "contents",
              item_meta: "display: contents;",
            },
            {
              item: "table",
              item_meta: "display: table;",
            },
            {
              item: "inline-table",
              item_meta: "display: inline-table;",
            },
            {
              item: "table-caption",
              item_meta: "display: table-caption;",
            },
            {
              item: "table-cell",
              item_meta: "display: table-cell;",
            },
            {
              item: "table-column",
              item_meta: "display: table-column;",
            },
            {
              item: "table-column-group",
              item_meta: "display: table-column-group;",
            },
            {
              item: "table-footer-group",
              item_meta: "display: table-footer-group;",
            },
            {
              item: "table-header-group",
              item_meta: "display: table-header-group;",
            },
            {
              item: "table-row-group",
              item_meta: "display: table-row-group;",
            },
            {
              item: "table-row",
              item_meta: "display: table-row;",
            },
            {
              item: "list-item",
              item_meta: "display: list-item;",
            },
            {
              item: "hidden",
              item_meta: "display: none;",
            }
          ]
        },
        {
          group: "float",
          classes: [
            {
              item: "float-right",
              item_meta: "float: right;",
            },
            {
              item: "float-left",
              item_meta: "float: left;",
            },
            {
              item: "float-start",
              item_meta: "float: inline-start;",
            },
            {
              item: "float-end",
              item_meta: "float: inline-end;",
            },
            {
              item: "float-none",
              item_meta: "float: none;",
            }
          ]
        },
        {
          group: "clear",
          classes: [
            {
              item: "clear-left",
              item_meta: "clear: left;",
            },
            {
              item: "clear-right",
              item_meta: "clear: right;",
            },
            {
              item: "clear-both",
              item_meta: "clear: both;",
            },
            {
              item: "clear-start",
              item_meta: "clear: inline-start;",
            },
            {
              item: "clear-end",
              item_meta: "clear: inline-end;",
            },
            {
              item: "clear-none",
              item_meta: "clear: none;",
            }
          ]
        },
        {
          group: "isolation",
          classes: [
            {
              item: "isolate",
              item_meta: "isolation: isolate;",
            },
            {
              item: "isolation-auto",
              item_meta: "isolation: auto;",
            }
          ]
        },
        {
          group: "object-fit",
          classes: [
            {
              item: "object-contain",
              item_meta: "object-fit: contain;",
            },
            {
              item: "object-cover",
              item_meta: "object-fit: cover;",
            },
            {
              item: "object-fill",
              item_meta: "object-fit: fill;",
            },
            {
              item: "object-none",
              item_meta: "object-fit: none;",
            },
            {
              item: "object-scale-down",
              item_meta: "object-fit: scale-down;",
            }
          ]
        },
        {
          group: "object-position",
          classes: [
            {
              item: "object-top-left",
              item_meta: "object-position: top left;",
            },
            {
              item: "object-top",
              item_meta: "object-position: top;",
            },
            {
              item: "object-top-right",
              item_meta: "object-position: top right;",
            },
            {
              item: "object-left",
              item_meta: "object-position: left;",
            },
            {
              item: "object-center",
              item_meta: "object-position: center;",
            },
            {
              item: "object-right",
              item_meta: "object-position: right;",
            },
            {
              item: "object-bottom-left",
              item_meta: "object-position: bottom left;",
            },
            {
              item: "object-bottom",
              item_meta: "object-position: bottom;",
            },
            {
              item: "object-bottom-right",
              item_meta: "object-position: bottom right;",
            },
            {
              item: "object-(<custom-property>)",
              item_meta: "object-position: var(<custom-property>);",
            },
            {
              item: "object-[<value>]",
              item_meta: "object-position: <value>;",
            }
          ]
        },
        {
          group: "overflow",
          classes: [
            {
              item: "overflow-auto",
              item_meta: "overflow: auto;",
            },
            {
              item: "overflow-hidden",
              item_meta: "overflow: hidden;",
            },
            {
              item: "overflow-clip",
              item_meta: "overflow: clip;",
            },
            {
              item: "overflow-visible",
              item_meta: "overflow: visible;",
            },
            {
              item: "overflow-scroll",
              item_meta: "overflow: scroll;",
            },
            {
              item: "overflow-x-auto",
              item_meta: "overflow-x: auto;",
            },
            {
              item: "overflow-y-auto",
              item_meta: "overflow-y: auto;",
            },
            {
              item: "overflow-x-hidden",
              item_meta: "overflow-x: hidden;",
            },
            {
              item: "overflow-y-hidden",
              item_meta: "overflow-y: hidden;",
            },
            {
              item: "overflow-x-clip",
              item_meta: "overflow-x: clip;",
            },
            {
              item: "overflow-y-clip",
              item_meta: "overflow-y: clip;",
            },
            {
              item: "overflow-x-visible",
              item_meta: "overflow-x: visible;",
            },
            {
              item: "overflow-y-visible",
              item_meta: "overflow-y: visible;",
            },
            {
              item: "overflow-x-scroll",
              item_meta: "overflow-x: scroll;",
            },
            {
              item: "overflow-y-scroll",
              item_meta: "overflow-y: scroll;",
            }
          ]
        },
        {
          group: "overscroll-behavior",
          classes: [
            {
              item: "overscroll-auto",
              item_meta: "overscroll-behavior: auto;",
            },
            {
              item: "overscroll-contain",
              item_meta: "overscroll-behavior: contain;",
            },
            {
              item: "overscroll-none",
              item_meta: "overscroll-behavior: none;",
            },
            {
              item: "overscroll-x-auto",
              item_meta: "overscroll-behavior-x: auto;",
            },
            {
              item: "overscroll-x-contain",
              item_meta: "overscroll-behavior-x: contain;",
            },
            {
              item: "overscroll-x-none",
              item_meta: "overscroll-behavior-x: none;",
            },
            {
              item: "overscroll-y-auto",
              item_meta: "overscroll-behavior-y: auto;",
            },
            {
              item: "overscroll-y-contain",
              item_meta: "overscroll-behavior-y: contain;",
            },
            {
              item: "overscroll-y-none",
              item_meta: "overscroll-behavior-y: none;",
            }
          ]
        },
        {
          group: "position",
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
            }
          ]
        },
        {
          group: "top / right / bottom / left",
          classes: [
            {
              item: "inset-<number>",
              item_meta: "inset: calc(var(--spacing) * <number>);",
            },
            {
              item: "-inset-<number>",
              item_meta: "inset: calc(var(--spacing) * -<number>);",
            },
            {
              item: "inset-<fraction>",
              item_meta: "inset: calc(<fraction> * 100%);",
            },
            {
              item: "-inset-<fraction>",
              item_meta: "inset: calc(<fraction> * -100%);",
            },
            {
              item: "inset-px",
              item_meta: "inset: 1px;",
            },
            {
              item: "-inset-px",
              item_meta: "inset: -1px;",
            },
            {
              item: "inset-full",
              item_meta: "inset: 100%;",
            },
            {
              item: "-inset-full",
              item_meta: "inset: -100%;",
            },
            {
              item: "inset-auto",
              item_meta: "inset: auto;",
            },
            {
              item: "inset-(<custom-property>)",
              item_meta: "inset: var(<custom-property>);",
            },
            {
              item: "inset-[<value>]",
              item_meta: "inset: <value>;",
            },
            {
              item: "inset-x-<number>",
              item_meta: "inset-inline: calc(var(--spacing) * <number>);",
            },
            {
              item: "-inset-x-<number>",
              item_meta: "inset-inline: calc(var(--spacing) * -<number>);",
            },
            {
              item: "inset-x-<fraction>",
              item_meta: "inset-inline: calc(<fraction> * 100%);",
            },
            {
              item: "-inset-x-<fraction>",
              item_meta: "inset-inline: calc(<fraction> * -100%);",
            },
            {
              item: "inset-x-px",
              item_meta: "inset-inline: 1px;",
            },
            {
              item: "-inset-x-px",
              item_meta: "inset-inline: -1px;",
            },
            {
              item: "inset-x-full",
              item_meta: "inset-inline: 100%;",
            },
            {
              item: "-inset-x-full",
              item_meta: "inset-inline: -100%;",
            },
            {
              item: "inset-x-auto",
              item_meta: "inset-inline: auto;",
            },
            {
              item: "inset-x-(<custom-property>)",
              item_meta: "inset-inline: var(<custom-property>);",
            },
            {
              item: "inset-x-[<value>]",
              item_meta: "inset-inline: <value>;",
            },
            {
              item: "inset-y-<number>",
              item_meta: "inset-block: calc(var(--spacing) * <number>);",
            },
            {
              item: "-inset-y-<number>",
              item_meta: "inset-block: calc(var(--spacing) * -<number>);",
            },
            {
              item: "inset-y-<fraction>",
              item_meta: "inset-block: calc(<fraction> * 100%);",
            },
            {
              item: "-inset-y-<fraction>",
              item_meta: "inset-block: calc(<fraction> * -100%);",
            },
            {
              item: "inset-y-px",
              item_meta: "inset-block: 1px;",
            },
            {
              item: "-inset-y-px",
              item_meta: "inset-block: -1px;",
            },
            {
              item: "inset-y-full",
              item_meta: "inset-block: 100%;",
            },
            {
              item: "-inset-y-full",
              item_meta: "inset-block: -100%;",
            },
            {
              item: "inset-y-auto",
              item_meta: "inset-block: auto;",
            },
            {
              item: "inset-y-(<custom-property>)",
              item_meta: "inset-block: var(<custom-property>);",
            },
            {
              item: "inset-y-[<value>]",
              item_meta: "inset-block: <value>;",
            },
            {
              item: "start-<number>",
              item_meta: "inset-inline-start: calc(var(--spacing) * <number>);",
            },
            {
              item: "-start-<number>",
              item_meta: "inset-inline-start: calc(var(--spacing) * -<number>);",
            },
            {
              item: "start-<fraction>",
              item_meta: "inset-inline-start: calc(<fraction> * 100%);",
            },
            {
              item: "-start-<fraction>",
              item_meta: "inset-inline-start: calc(<fraction> * -100%);",
            },
            {
              item: "start-px",
              item_meta: "inset-inline-start: 1px;",
            },
            {
              item: "-start-px",
              item_meta: "inset-inline-start: -1px;",
            },
            {
              item: "start-full",
              item_meta: "inset-inline-start: 100%;",
            },
            {
              item: "-start-full",
              item_meta: "inset-inline-start: -100%;",
            },
            {
              item: "start-auto",
              item_meta: "inset-inline-start: auto;",
            },
            {
              item: "start-(<custom-property>)",
              item_meta: "inset-inline-start: var(<custom-property>);",
            },
            {
              item: "start-[<value>]",
              item_meta: "inset-inline-start: <value>;",
            },
            {
              item: "end-<number>",
              item_meta: "inset-inline-end: calc(var(--spacing) * <number>);",
            },
            {
              item: "-end-<number>",
              item_meta: "inset-inline-end: calc(var(--spacing) * -<number>);",
            },
            {
              item: "end-<fraction>",
              item_meta: "inset-inline-end: calc(<fraction> * 100%);",
            },
            {
              item: "-end-<fraction>",
              item_meta: "inset-inline-end: calc(<fraction> * -100%);",
            },
            {
              item: "end-px",
              item_meta: "inset-inline-end: 1px;",
            },
            {
              item: "-end-px",
              item_meta: "inset-inline-end: -1px;",
            },
            {
              item: "end-full",
              item_meta: "inset-inline-end: 100%;",
            },
            {
              item: "-end-full",
              item_meta: "inset-inline-end: -100%;",
            },
            {
              item: "end-auto",
              item_meta: "inset-inline-end: auto;",
            },
            {
              item: "end-(<custom-property>)",
              item_meta: "inset-inline-end: var(<custom-property>);",
            },
            {
              item: "end-[<value>]",
              item_meta: "inset-inline-end: <value>;",
            },
            {
              item: "top-<number>",
              item_meta: "top: calc(var(--spacing) * <number>);",
            },
            {
              item: "-top-<number>",
              item_meta: "top: calc(var(--spacing) * -<number>);",
            },
            {
              item: "top-<fraction>",
              item_meta: "top: calc(<fraction> * 100%);",
            },
            {
              item: "-top-<fraction>",
              item_meta: "top: calc(<fraction> * -100%);",
            },
            {
              item: "top-px",
              item_meta: "top: 1px;",
            },
            {
              item: "-top-px",
              item_meta: "top: -1px;",
            },
            {
              item: "top-full",
              item_meta: "top: 100%;",
            },
            {
              item: "-top-full",
              item_meta: "top: -100%;",
            },
            {
              item: "top-auto",
              item_meta: "top: auto;",
            },
            {
              item: "top-(<custom-property>)",
              item_meta: "top: var(<custom-property>);",
            },
            {
              item: "top-[<value>]",
              item_meta: "top: <value>;",
            },
            {
              item: "right-<number>",
              item_meta: "right: calc(var(--spacing) * <number>);",
            },
            {
              item: "-right-<number>",
              item_meta: "right: calc(var(--spacing) * -<number>);",
            },
            {
              item: "right-<fraction>",
              item_meta: "right: calc(<fraction> * 100%);",
            },
            {
              item: "-right-<fraction>",
              item_meta: "right: calc(<fraction> * -100%);",
            },
            {
              item: "right-px",
              item_meta: "right: 1px;",
            },
            {
              item: "-right-px",
              item_meta: "right: -1px;",
            },
            {
              item: "right-full",
              item_meta: "right: 100%;",
            },
            {
              item: "-right-full",
              item_meta: "right: -100%;",
            },
            {
              item: "right-auto",
              item_meta: "right: auto;",
            },
            {
              item: "right-(<custom-property>)",
              item_meta: "right: var(<custom-property>);",
            },
            {
              item: "right-[<value>]",
              item_meta: "right: <value>;",
            },
            {
              item: "bottom-<number>",
              item_meta: "bottom: calc(var(--spacing) * <number>);",
            },
            {
              item: "-bottom-<number>",
              item_meta: "bottom: calc(var(--spacing) * -<number>);",
            },
            {
              item: "bottom-<fraction>",
              item_meta: "bottom: calc(<fraction> * 100%);",
            },
            {
              item: "-bottom-<fraction>",
              item_meta: "bottom: calc(<fraction> * -100%);",
            },
            {
              item: "bottom-px",
              item_meta: "bottom: 1px;",
            },
            {
              item: "-bottom-px",
              item_meta: "bottom: -1px;",
            },
            {
              item: "bottom-full",
              item_meta: "bottom: 100%;",
            },
            {
              item: "-bottom-full",
              item_meta: "bottom: -100%;",
            },
            {
              item: "bottom-auto",
              item_meta: "bottom: auto;",
            },
            {
              item: "bottom-(<custom-property>)",
              item_meta: "bottom: var(<custom-property>);",
            },
            {
              item: "bottom-[<value>]",
              item_meta: "bottom: <value>;",
            },
            {
              item: "left-<number>",
              item_meta: "left: calc(var(--spacing) * <number>);",
            },
            {
              item: "-left-<number>",
              item_meta: "left: calc(var(--spacing) * -<number>);",
            },
            {
              item: "left-<fraction>",
              item_meta: "left: calc(<fraction> * 100%);",
            },
            {
              item: "-left-<fraction>",
              item_meta: "left: calc(<fraction> * -100%);",
            },
            {
              item: "left-px",
              item_meta: "left: 1px;",
            },
            {
              item: "-left-px",
              item_meta: "left: -1px;",
            },
            {
              item: "left-full",
              item_meta: "left: 100%;",
            },
            {
              item: "-left-full",
              item_meta: "left: -100%;",
            },
            {
              item: "left-auto",
              item_meta: "left: auto;",
            },
            {
              item: "left-(<custom-property>)",
              item_meta: "left: var(<custom-property>);",
            },
            {
              item: "left-[<value>]",
              item_meta: "left: <value>;",
            }
          ]
        },
        {
          group: "visibility",
          classes: [
            {
              item: "visible",
              item_meta: "visibility: visible;",
            },
            {
              item: "invisible",
              item_meta: "visibility: hidden;",
            },
            {
              item: "collapse",
              item_meta: "visibility: collapse;",
            }
          ]
        },
        {
          group: "z-index",
          classes: [
            {
              item: "z-<number>",
              item_meta: "z-index: <number>;",
            },
            {
              item: "z-auto",
              item_meta: "z-index: auto;",
            },
            {
              item: "z-[<value>]",
              item_meta: "z-index: <value>;",
            },
            {
              item: "z-(<custom-property>)",
              item_meta: "z-index: var(<custom-property>);",
            }
          ]
        }
      ]
    }

export default layoutCategory

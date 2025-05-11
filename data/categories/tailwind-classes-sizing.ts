import type { Category } from "../command-data"

// Sizing-related Tailwind classes
const sizingCategory: Category = {
  category: "Sizing",
  groups: [
    {
      group: "width",
      classes: [
        {
          item: "w-<fraction>",
          item_meta: "width: calc(<fraction> * 100%);",
        },
        {
          item: "w-3xs",
          item_meta: "width: var(--container-3xs); /* 16rem (256px) */",
        },
        {
          item: "w-2xs",
          item_meta: "width: var(--container-2xs); /* 18rem (288px) */",
        },
        {
          item: "w-xs",
          item_meta: "width: var(--container-xs); /* 20rem (320px) */",
        },
        {
          item: "w-sm",
          item_meta: "width: var(--container-sm); /* 24rem (384px) */",
        },
        {
          item: "w-md",
          item_meta: "width: var(--container-md); /* 28rem (448px) */",
        },
        {
          item: "w-lg",
          item_meta: "width: var(--container-lg); /* 32rem (512px) */",
        },
        {
          item: "w-xl",
          item_meta: "width: var(--container-xl); /* 36rem (576px) */",
        },
        {
          item: "w-2xl",
          item_meta: "width: var(--container-2xl); /* 42rem (672px) */",
        },
        {
          item: "w-3xl",
          item_meta: "width: var(--container-3xl); /* 48rem (768px) */",
        },
        {
          item: "w-4xl",
          item_meta: "width: var(--container-4xl); /* 56rem (896px) */",
        },
        {
          item: "w-5xl",
          item_meta: "width: var(--container-5xl); /* 64rem (1024px) */",
        },
        {
          item: "w-6xl",
          item_meta: "width: var(--container-6xl); /* 72rem (1152px) */",
        },
        {
          item: "w-7xl",
          item_meta: "width: var(--container-7xl); /* 80rem (1280px) */",
        },
        {
          item: "w-auto",
          item_meta: "width: auto;",
        },
        {
          item: "w-px",
          item_meta: "width: 1px;",
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
          item: "w-dvw",
          item_meta: "width: 100dvw;",
        },
        {
          item: "w-dvh",
          item_meta: "width: 100dvh;",
        },
        {
          item: "w-lvw",
          item_meta: "width: 100lvw;",
        },
        {
          item: "w-lvh",
          item_meta: "width: 100lvh;",
        },
        {
          item: "w-svw",
          item_meta: "width: 100svw;",
        },
        {
          item: "w-svh",
          item_meta: "width: 100svh;",
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
          item: "w-fit",
          item_meta: "width: fit-content;",
        },
        {
          item: "w-(<custom-property>)",
          item_meta: "width: var(<custom-property>);",
        },
        {
          item: "w-[<value>]",
          item_meta: "width: <value>;",
        },
        {
          item: "size-<number>",
          item_meta: "width: calc(var(--spacing) * <number>); height: calc(var(--spacing) * <number>);",
        },
        {
          item: "size-<fraction>",
          item_meta: "width: calc(<fraction> * 100%); height: calc(<fraction> * 100%);",
        },
        {
          item: "size-auto",
          item_meta: "width: auto; height: auto;",
        },
        {
          item: "size-px",
          item_meta: "width: 1px; height: 1px;",
        },
        {
          item: "size-full",
          item_meta: "width: 100%; height: 100%;",
        },
        {
          item: "size-dvw",
          item_meta: "width: 100dvw; height: 100dvw;",
        },
        {
          item: "size-dvh",
          item_meta: "width: 100dvh; height: 100dvh;",
        },
        {
          item: "size-lvw",
          item_meta: "width: 100lvw; height: 100lvw;",
        },
        {
          item: "size-lvh",
          item_meta: "width: 100lvh; height: 100lvh;",
        },
        {
          item: "size-svw",
          item_meta: "width: 100svw; height: 100svw;",
        },
        {
          item: "size-svh",
          item_meta: "width: 100svh; height: 100svh;",
        },
        {
          item: "size-min",
          item_meta: "width: min-content; height: min-content;",
        },
        {
          item: "size-max",
          item_meta: "width: max-content; height: max-content;",
        },
        {
          item: "size-fit",
          item_meta: "width: fit-content; height: fit-content;",
        },
        {
          item: "size-(<custom-property>)",
          item_meta: "width: var(<custom-property>); height: var(<custom-property>);",
        },
        {
          item: "size-[<value>]",
          item_meta: "width: <value>; height: <value>;",
        }
      ]
    },
    {
      group: "min-width",
      classes: [
        {
          item: "min-w-<number>",
          item_meta: "min-width: calc(var(--spacing) * <number>);",
        },
        {
          item: "min-w-<fraction>",
          item_meta: "min-width: calc(<fraction> * 100%);",
        },
        {
          item: "min-w-3xs",
          item_meta: "min-width: var(--container-3xs); /* 16rem (256px) */",
        },
        {
          item: "min-w-2xs",
          item_meta: "min-width: var(--container-2xs); /* 18rem (288px) */",
        },
        {
          item: "min-w-xs",
          item_meta: "min-width: var(--container-xs); /* 20rem (320px) */",
        },
        {
          item: "min-w-sm",
          item_meta: "min-width: var(--container-sm); /* 24rem (384px) */",
        },
        {
          item: "min-w-md",
          item_meta: "min-width: var(--container-md); /* 28rem (448px) */",
        },
        {
          item: "min-w-lg",
          item_meta: "min-width: var(--container-lg); /* 32rem (512px) */",
        },
        {
          item: "min-w-xl",
          item_meta: "min-width: var(--container-xl); /* 36rem (576px) */",
        },
        {
          item: "min-w-2xl",
          item_meta: "min-width: var(--container-2xl); /* 42rem (672px) */",
        },
        {
          item: "min-w-3xl",
          item_meta: "min-width: var(--container-3xl); /* 48rem (768px) */",
        },
        {
          item: "min-w-4xl",
          item_meta: "min-width: var(--container-4xl); /* 56rem (896px) */",
        },
        {
          item: "min-w-5xl",
          item_meta: "min-width: var(--container-5xl); /* 64rem (1024px) */",
        },
        {
          item: "min-w-6xl",
          item_meta: "min-width: var(--container-6xl); /* 72rem (1152px) */",
        },
        {
          item: "min-w-7xl",
          item_meta: "min-width: var(--container-7xl); /* 80rem (1280px) */",
        },
        {
          item: "min-w-auto",
          item_meta: "min-width: auto;",
        },
        {
          item: "min-w-px",
          item_meta: "min-width: 1px;",
        },
        {
          item: "min-w-full",
          item_meta: "min-width: 100%;",
        },
        {
          item: "min-w-screen",
          item_meta: "min-width: 100vw;",
        },
        {
          item: "min-w-dvw",
          item_meta: "min-width: 100dvw;",
        },
        {
          item: "min-w-dvh",
          item_meta: "min-width: 100dvh;",
        },
        {
          item: "min-w-lvw",
          item_meta: "min-width: 100lvw;",
        },
        {
          item: "min-w-lvh",
          item_meta: "min-width: 100lvh;",
        },
        {
          item: "min-w-svw",
          item_meta: "min-width: 100svw;",
        },
        {
          item: "min-w-svh",
          item_meta: "min-width: 100svh;",
        },
        {
          item: "min-w-min",
          item_meta: "min-width: min-content;",
        },
        {
          item: "min-w-max",
          item_meta: "min-width: max-content;",
        },
        {
          item: "min-w-fit",
          item_meta: "min-width: fit-content;",
        },
        {
          item: "min-w-(<custom-property>)",
          item_meta: "min-width: var(<custom-property>);",
        },
        {
          item: "min-w-[<value>]",
          item_meta: "min-width: <value>;",
        }
      ]
    },
    {
      group: "max-width",
      classes: [
        {
          item: "max-w-<number>",
          item_meta: "max-width: calc(var(--spacing) * <number>);",
        },
        {
          item: "max-w-<fraction>",
          item_meta: "max-width: calc(<fraction> * 100%);",
        },
        {
          item: "max-w-3xs",
          item_meta: "max-width: var(--container-3xs); /* 16rem (256px) */",
        },
        {
          item: "max-w-2xs",
          item_meta: "max-width: var(--container-2xs); /* 18rem (288px) */",
        },
        {
          item: "max-w-xs",
          item_meta: "max-width: var(--container-xs); /* 20rem (320px) */",
        },
        {
          item: "max-w-sm",
          item_meta: "max-width: var(--container-sm); /* 24rem (384px) */",
        },
        {
          item: "max-w-md",
          item_meta: "max-width: var(--container-md); /* 28rem (448px) */",
        },
        {
          item: "max-w-lg",
          item_meta: "max-width: var(--container-lg); /* 32rem (512px) */",
        },
        {
          item: "max-w-xl",
          item_meta: "max-width: var(--container-xl); /* 36rem (576px) */",
        },
        {
          item: "max-w-2xl",
          item_meta: "max-width: var(--container-2xl); /* 42rem (672px) */",
        },
        {
          item: "max-w-3xl",
          item_meta: "max-width: var(--container-3xl); /* 48rem (768px) */",
        },
        {
          item: "max-w-4xl",
          item_meta: "max-width: var(--container-4xl); /* 56rem (896px) */",
        },
        {
          item: "max-w-5xl",
          item_meta: "max-width: var(--container-5xl); /* 64rem (1024px) */",
        },
        {
          item: "max-w-6xl",
          item_meta: "max-width: var(--container-6xl); /* 72rem (1152px) */",
        },
        {
          item: "max-w-7xl",
          item_meta: "max-width: var(--container-7xl); /* 80rem (1280px) */",
        },
        {
          item: "max-w-none",
          item_meta: "max-width: none;",
        },
        {
          item: "max-w-px",
          item_meta: "max-width: 1px;",
        },
        {
          item: "max-w-full",
          item_meta: "max-width: 100%;",
        },
        {
          item: "max-w-dvw",
          item_meta: "max-width: 100dvw;",
        },
        {
          item: "max-w-dvh",
          item_meta: "max-width: 100dvh;",
        },
        {
          item: "max-w-lvw",
          item_meta: "max-width: 100lvw;",
        },
        {
          item: "max-w-lvh",
          item_meta: "max-width: 100lvh;",
        },
        {
          item: "max-w-svw",
          item_meta: "max-width: 100svw;",
        },
        {
          item: "max-w-svh",
          item_meta: "max-width: 100svh;",
        },
        {
          item: "max-w-screen",
          item_meta: "max-width: 100vw;",
        },
        {
          item: "max-w-min",
          item_meta: "max-width: min-content;",
        },
        {
          item: "max-w-max",
          item_meta: "max-width: max-content;",
        },
        {
          item: "max-w-fit",
          item_meta: "max-width: fit-content;",
        },
        {
          item: "container",
          item_meta: "width: 100%; @media (width >= 40rem) { max-width: 40rem; } @media (width >= 48rem) { max-width: 48rem; } @media (width >= 64rem) { max-width: 64rem; } @media (width >= 80rem) { max-width: 80rem; } @media (width >= 96rem) { max-width: 96rem; }",
        },
        {
          item: "max-w-(<custom-property>)",
          item_meta: "max-width: var(<custom-property>);",
        },
        {
          item: "max-w-[<value>]",
          item_meta: "max-width: <value>;",
        }
      ]
    },
    {
      group: "height",
      classes: [
        {
          item: "h-<number>",
          item_meta: "height: calc(var(--spacing) * <number>);",
        },
        {
          item: "h-<fraction>",
          item_meta: "height: calc(<fraction> * 100%);",
        },
        {
          item: "h-auto",
          item_meta: "height: auto;",
        },
        {
          item: "h-px",
          item_meta: "height: 1px;",
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
          item: "h-dvh",
          item_meta: "height: 100dvh;",
        },
        {
          item: "h-dvw",
          item_meta: "height: 100dvw;",
        },
        {
          item: "h-lvh",
          item_meta: "height: 100lvh;",
        },
        {
          item: "h-lvw",
          item_meta: "height: 100lvw;",
        },
        {
          item: "h-svh",
          item_meta: "height: 100svh;",
        },
        {
          item: "h-svw",
          item_meta: "height: 100svw;",
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
          item: "h-fit",
          item_meta: "height: fit-content;",
        },
        {
          item: "h-lh",
          item_meta: "height: 1lh;",
        },
        {
          item: "h-(<custom-property>)",
          item_meta: "height: var(<custom-property>);",
        },
        {
          item: "h-[<value>]",
          item_meta: "height: <value>;",
        },
        {
          item: "size-<number>",
          item_meta: "width: calc(var(--spacing) * <number>); height: calc(var(--spacing) * <number>);",
        },
        {
          item: "size-<fraction>",
          item_meta: "width: calc(<fraction> * 100%); height: calc(<fraction> * 100%);",
        },
        {
          item: "size-auto",
          item_meta: "width: auto; height: auto;",
        },
        {
          item: "size-px",
          item_meta: "width: 1px; height: 1px;",
        },
        {
          item: "size-full",
          item_meta: "width: 100%; height: 100%;",
        },
        {
          item: "size-dvw",
          item_meta: "width: 100dvw; height: 100dvw;",
        },
        {
          item: "size-dvh",
          item_meta: "width: 100dvh; height: 100dvh;",
        },
        {
          item: "size-lvw",
          item_meta: "width: 100lvw; height: 100lvw;",
        },
        {
          item: "size-lvh",
          item_meta: "width: 100lvh; height: 100lvh;",
        },
        {
          item: "size-svw",
          item_meta: "width: 100svw; height: 100svw;",
        },
        {
          item: "size-svh",
          item_meta: "width: 100svh; height: 100svh;",
        },
        {
          item: "size-min",
          item_meta: "width: min-content; height: min-content;",
        },
        {
          item: "size-max",
          item_meta: "width: max-content; height: max-content;",
        },
        {
          item: "size-fit",
          item_meta: "width: fit-content; height: fit-content;",
        },
        {
          item: "size-(<custom-property>)",
          item_meta: "width: var(<custom-property>); height: var(<custom-property>);",
        },
        {
          item: "size-[<value>]",
          item_meta: "width: <value>; height: <value>;",
        }
      ]
    },
    {
      group: "min-height",
      classes: [
        {
          item: "min-h-<number>",
          item_meta: "min-height: calc(var(--spacing) * <number>);",
        },
        {
          item: "min-h-<fraction>",
          item_meta: "min-height: calc(<fraction> * 100%);",
        },
        {
          item: "min-h-px",
          item_meta: "min-height: 1px;",
        },
        {
          item: "min-h-full",
          item_meta: "min-height: 100%;",
        },
        {
          item: "min-h-screen",
          item_meta: "min-height: 100vh;",
        },
        {
          item: "min-h-dvh",
          item_meta: "min-height: 100dvh;",
        },
        {
          item: "min-h-dvw",
          item_meta: "min-height: 100dvw;",
        },
        {
          item: "min-h-lvh",
          item_meta: "min-height: 100lvh;",
        },
        {
          item: "min-h-lvw",
          item_meta: "min-height: 100lvw;",
        },
        {
          item: "min-h-svw",
          item_meta: "min-height: 100svw;",
        },
        {
          item: "min-h-svh",
          item_meta: "min-height: 100svh;",
        },
        {
          item: "min-h-auto",
          item_meta: "min-height: auto;",
        },
        {
          item: "min-h-min",
          item_meta: "min-height: min-content;",
        },
        {
          item: "min-h-max",
          item_meta: "min-height: max-content;",
        },
        {
          item: "min-h-fit",
          item_meta: "min-height: fit-content;",
        },
        {
          item: "min-h-lh",
          item_meta: "min-height: 1lh;",
        },
        {
          item: "min-h-(<custom-property>)",
          item_meta: "min-height: var(<custom-property>);",
        },
        {
          item: "min-h-[<value>]",
          item_meta: "min-height: <value>;",
        }
      ]
    },
    {
      group: "max-height",
      classes: [
        {
          item: "max-h-<number>",
          item_meta: "max-height: calc(var(--spacing) * <number>);",
        },
        {
          item: "max-h-<fraction>",
          item_meta: "max-height: calc(<fraction> * 100%);",
        },
        {
          item: "max-h-none",
          item_meta: "max-height: none;",
        },
        {
          item: "max-h-px",
          item_meta: "max-height: 1px;",
        },
        {
          item: "max-h-full",
          item_meta: "max-height: 100%;",
        },
        {
          item: "max-h-screen",
          item_meta: "max-height: 100vh;",
        },
        {
          item: "max-h-dvh",
          item_meta: "max-height: 100dvh;",
        },
        {
          item: "max-h-dvw",
          item_meta: "max-height: 100dvw;",
        },
        {
          item: "max-h-lvh",
          item_meta: "max-height: 100lvh;",
        },
        {
          item: "max-h-lvw",
          item_meta: "max-height: 100lvw;",
        },
        {
          item: "max-h-svh",
          item_meta: "max-height: 100svh;",
        },
        {
          item: "max-h-svw",
          item_meta: "max-height: 100svw;",
        },
        {
          item: "max-h-min",
          item_meta: "max-height: min-content;",
        },
        {
          item: "max-h-max",
          item_meta: "max-height: max-content;",
        },
        {
          item: "max-h-fit",
          item_meta: "max-height: fit-content;",
        },
        {
          item: "max-h-lh",
          item_meta: "max-height: 1lh;",
        },
        {
          item: "max-h-(<custom-property>)",
          item_meta: "max-height: var(<custom-property>);",
        },
        {
          item: "max-h-[<value>]",
          item_meta: "max-height: <value>;",
        }
      ]
    }
  ]
}

export default sizingCategory

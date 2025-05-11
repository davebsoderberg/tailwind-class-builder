import type { Category } from "../command-data"

// Background-related Tailwind classes
const backgroundsCategory: Category = {
  category: "Borders",
  groups: [
    {
      group: "border-radius",
      classes: [
        {
          item: "rounded-sm",
          item_meta: "border-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-md",
          item_meta: "border-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-lg",
          item_meta: "border-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-xl",
          item_meta: "border-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-2xl",
          item_meta: "border-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-3xl",
          item_meta: "border-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-4xl",
          item_meta: "border-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-none",
          item_meta: "border-radius: 0;",
        },
        {
          item: "rounded-full",
          item_meta: "border-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-(<custom-property>)",
          item_meta: "border-radius: var(<custom-property>);",
        },
        {
          item: "rounded-[<value>]",
          item_meta: "border-radius: <value>;",
        },
        {
          item: "rounded-s-xs",
          item_meta: "border-start-start-radius: var(--radius-xs); /* 0.125rem (2px) */ border-end-start-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-s-sm",
          item_meta: "border-start-start-radius: var(--radius-sm); /* 0.25rem (4px) */ border-end-start-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-s-md",
          item_meta: "border-start-start-radius: var(--radius-md); /* 0.375rem (6px) */ border-end-start-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-s-lg",
          item_meta: "border-start-start-radius: var(--radius-lg); /* 0.5rem (8px) */ border-end-start-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-s-xl",
          item_meta: "border-start-start-radius: var(--radius-xl); /* 0.75rem (12px) */ border-end-start-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-s-2xl",
          item_meta: "border-start-start-radius: var(--radius-2xl); /* 1rem (16px) */ border-end-start-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-s-3xl",
          item_meta: "border-start-start-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-end-start-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-s-4xl",
          item_meta: "border-start-start-radius: var(--radius-4xl); /* 2rem (32px) */ border-end-start-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-s-none",
          item_meta: "border-start-start-radius: 0; border-end-start-radius: 0;",
        },
        {
          item: "rounded-s-full",
          item_meta: "border-start-start-radius: calc(infinity * 1px); border-end-start-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-s-(<custom-property>)",
          item_meta: "border-start-start-radius: var(<custom-property>); border-end-start-radius: var(<custom-property>);",
        },
        {
          item: "rounded-s-[<value>]",
          item_meta: "border-start-start-radius: <value>; border-end-start-radius: <value>;",
        },
        {
          item: "rounded-e-xs",
          item_meta: "border-start-end-radius: var(--radius-xs); /* 0.125rem (2px) */ border-end-end-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-e-sm",
          item_meta: "border-start-end-radius: var(--radius-sm); /* 0.25rem (4px) */ border-end-end-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-e-md",
          item_meta: "border-start-end-radius: var(--radius-md); /* 0.375rem (6px) */ border-end-end-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-e-lg",
          item_meta: "border-start-end-radius: var(--radius-lg); /* 0.5rem (8px) */ border-end-end-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-e-xl",
          item_meta: "border-start-end-radius: var(--radius-xl); /* 0.75rem (12px) */ border-end-end-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-e-2xl",
          item_meta: "border-start-end-radius: var(--radius-2xl); /* 1rem (16px) */ border-end-end-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-e-3xl",
          item_meta: "border-start-end-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-end-end-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-e-4xl",
          item_meta: "border-start-end-radius: var(--radius-4xl); /* 2rem (32px) */ border-end-end-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-e-none",
          item_meta: "border-start-end-radius: 0; border-end-end-radius: 0;",
        },
        {
          item: "rounded-e-full",
          item_meta: "border-start-end-radius: calc(infinity * 1px); border-end-end-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-e-(<custom-property>)",
          item_meta: "border-start-end-radius: var(<custom-property>); border-end-end-radius: var(<custom-property>);",
        },
        {
          item: "rounded-e-[<value>]",
          item_meta: "border-start-end-radius: <value>; border-end-end-radius: <value>;",
        },
        {
          item: "rounded-t-xs",
          item_meta: "border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */ border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-t-sm",
          item_meta: "border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */ border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-t-md",
          item_meta: "border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */ border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-t-lg",
          item_meta: "border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */ border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-t-xl",
          item_meta: "border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */ border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-t-2xl",
          item_meta: "border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */ border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-t-3xl",
          item_meta: "border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-t-4xl",
          item_meta: "border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */ border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-t-none",
          item_meta: "border-top-left-radius: 0; border-top-right-radius: 0;",
        },
        {
          item: "rounded-t-full",
          item_meta: "border-top-left-radius: calc(infinity * 1px); border-top-right-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-t-(<custom-property>)",
          item_meta: "border-top-left-radius: var(<custom-property>); border-top-right-radius: var(<custom-property>);",
        },
        {
          item: "rounded-t-[<value>]",
          item_meta: "border-top-left-radius: <value>; border-top-right-radius: <value>;",
        },
        {
          item: "rounded-r-xs",
          item_meta: "border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */ border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-r-sm",
          item_meta: "border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */ border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-r-md",
          item_meta: "border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */ border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-r-lg",
          item_meta: "border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */ border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-r-xl",
          item_meta: "border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */ border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-r-2xl",
          item_meta: "border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */ border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-r-3xl",
          item_meta: "border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-r-4xl",
          item_meta: "border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */ border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-r-none",
          item_meta: "border-top-right-radius: 0; border-bottom-right-radius: 0;",
        },
        {
          item: "rounded-r-full",
          item_meta: "border-top-right-radius: calc(infinity * 1px); border-bottom-right-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-r-(<custom-property>)",
          item_meta: "border-top-right-radius: var(<custom-property>); border-bottom-right-radius: var(<custom-property>);",
        },
        {
          item: "rounded-r-[<value>]",
          item_meta: "border-top-right-radius: <value>; border-bottom-right-radius: <value>;",
        },
        {
          item: "rounded-b-xs",
          item_meta: "border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */ border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-b-sm",
          item_meta: "border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */ border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-b-md",
          item_meta: "border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */ border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-b-lg",
          item_meta: "border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */ border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-b-xl",
          item_meta: "border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */ border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-b-2xl",
          item_meta: "border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */ border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-b-3xl",
          item_meta: "border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-b-4xl",
          item_meta: "border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */ border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-b-none",
          item_meta: "border-bottom-right-radius: 0; border-bottom-left-radius: 0;",
        },
        {
          item: "rounded-b-full",
          item_meta: "border-bottom-right-radius: calc(infinity * 1px); border-bottom-left-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-b-(<custom-property>)",
          item_meta: "border-bottom-right-radius: var(<custom-property>); border-bottom-left-radius: var(<custom-property>);",
        },
        {
          item: "rounded-b-[<value>]",
          item_meta: "border-bottom-right-radius: <value>; border-bottom-left-radius: <value>;",
        },
        {
          item: "rounded-l-xs",
          item_meta: "border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */ border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-l-sm",
          item_meta: "border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */ border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-l-md",
          item_meta: "border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */ border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-l-lg",
          item_meta: "border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */ border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-l-xl",
          item_meta: "border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */ border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-l-2xl",
          item_meta: "border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */ border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-l-3xl",
          item_meta: "border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */ border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-l-4xl",
          item_meta: "border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */ border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-l-none",
          item_meta: "border-top-left-radius: 0; border-bottom-left-radius: 0;",
        },
        {
          item: "rounded-l-full",
          item_meta: "border-top-left-radius: calc(infinity * 1px); border-bottom-left-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-l-(<custom-property>)",
          item_meta: "border-top-left-radius: var(<custom-property>); border-bottom-left-radius: var(<custom-property>);",
        },
        {
          item: "rounded-l-[<value>]",
          item_meta: "border-top-left-radius: <value>; border-bottom-left-radius: <value>;",
        },
        {
          item: "rounded-ss-xs",
          item_meta: "border-start-start-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-ss-sm",
          item_meta: "border-start-start-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-ss-md",
          item_meta: "border-start-start-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-ss-lg",
          item_meta: "border-start-start-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-ss-xl",
          item_meta: "border-start-start-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-ss-2xl",
          item_meta: "border-start-start-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-ss-3xl",
          item_meta: "border-start-start-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-ss-4xl",
          item_meta: "border-start-start-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-ss-none",
          item_meta: "border-start-start-radius: 0;",
        },
        {
          item: "rounded-ss-full",
          item_meta: "border-start-start-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-ss-(<custom-property>)",
          item_meta: "border-start-start-radius: var(<custom-property>);",
        },
        {
          item: "rounded-ss-[<value>]",
          item_meta: "border-start-start-radius: <value>;",
        },
        {
          item: "rounded-se-xs",
          item_meta: "border-start-end-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-se-sm",
          item_meta: "border-start-end-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-se-md",
          item_meta: "border-start-end-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-se-lg",
          item_meta: "border-start-end-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-se-xl",
          item_meta: "border-start-end-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-se-2xl",
          item_meta: "border-start-end-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-se-3xl",
          item_meta: "border-start-end-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-se-4xl",
          item_meta: "border-start-end-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-se-none",
          item_meta: "border-start-end-radius: 0;",
        },
        {
          item: "rounded-se-full",
          item_meta: "border-start-end-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-se-(<custom-property>)",
          item_meta: "border-start-end-radius: var(<custom-property>);",
        },
        {
          item: "rounded-se-[<value>]",
          item_meta: "border-start-end-radius: <value>;",
        },
        {
          item: "rounded-ee-xs",
          item_meta: "border-end-end-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-ee-sm",
          item_meta: "border-end-end-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-ee-md",
          item_meta: "border-end-end-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-ee-lg",
          item_meta: "border-end-end-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-ee-xl",
          item_meta: "border-end-end-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-ee-2xl",
          item_meta: "border-end-end-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-ee-3xl",
          item_meta: "border-end-end-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-ee-4xl",
          item_meta: "border-end-end-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-ee-none",
          item_meta: "border-end-end-radius: 0;",
        },
        {
          item: "rounded-ee-full",
          item_meta: "border-end-end-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-ee-(<custom-property>)",
          item_meta: "border-end-end-radius: var(<custom-property>);",
        },
        {
          item: "rounded-ee-[<value>]",
          item_meta: "border-end-end-radius: <value>;",
        },
        {
          item: "rounded-es-xs",
          item_meta: "border-end-start-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-es-sm",
          item_meta: "border-end-start-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-es-md",
          item_meta: "border-end-start-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-es-lg",
          item_meta: "border-end-start-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-es-xl",
          item_meta: "border-end-start-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-es-2xl",
          item_meta: "border-end-start-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-es-3xl",
          item_meta: "border-end-start-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-es-4xl",
          item_meta: "border-end-start-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-es-none",
          item_meta: "border-end-start-radius: 0;",
        },
        {
          item: "rounded-es-full",
          item_meta: "border-end-start-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-es-(<custom-property>)",
          item_meta: "border-end-start-radius: var(<custom-property>);",
        },
        {
          item: "rounded-es-[<value>]",
          item_meta: "border-end-start-radius: <value>;",
        },
        {
          item: "rounded-tl-xs",
          item_meta: "border-top-left-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-tl-sm",
          item_meta: "border-top-left-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-tl-md",
          item_meta: "border-top-left-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-tl-lg",
          item_meta: "border-top-left-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-tl-xl",
          item_meta: "border-top-left-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-tl-2xl",
          item_meta: "border-top-left-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-tl-3xl",
          item_meta: "border-top-left-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-tl-4xl",
          item_meta: "border-top-left-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-tl-none",
          item_meta: "border-top-left-radius: 0;",
        },
        {
          item: "rounded-tl-full",
          item_meta: "border-top-left-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-tl-(<custom-property>)",
          item_meta: "border-top-left-radius: var(<custom-property>);",
        },
        {
          item: "rounded-tl-[<value>]",
          item_meta: "border-top-left-radius: <value>;",
        },
        {
          item: "rounded-tr-xs",
          item_meta: "border-top-right-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-tr-sm",
          item_meta: "border-top-right-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-tr-md",
          item_meta: "border-top-right-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-tr-lg",
          item_meta: "border-top-right-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-tr-xl",
          item_meta: "border-top-right-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-tr-2xl",
          item_meta: "border-top-right-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-tr-3xl",
          item_meta: "border-top-right-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-tr-4xl",
          item_meta: "border-top-right-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-tr-none",
          item_meta: "border-top-right-radius: 0;",
        },
        {
          item: "rounded-tr-full",
          item_meta: "border-top-right-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-tr-(<custom-property>)",
          item_meta: "border-top-right-radius: var(<custom-property>);",
        },
        {
          item: "rounded-tr-[<value>]",
          item_meta: "border-top-right-radius: <value>;",
        },
        {
          item: "rounded-br-xs",
          item_meta: "border-bottom-right-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-br-sm",
          item_meta: "border-bottom-right-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-br-md",
          item_meta: "border-bottom-right-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-br-lg",
          item_meta: "border-bottom-right-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-br-xl",
          item_meta: "border-bottom-right-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-br-2xl",
          item_meta: "border-bottom-right-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-br-3xl",
          item_meta: "border-bottom-right-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-br-4xl",
          item_meta: "border-bottom-right-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-br-none",
          item_meta: "border-bottom-right-radius: 0;",
        },
        {
          item: "rounded-br-full",
          item_meta: "border-bottom-right-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-br-(<custom-property>)",
          item_meta: "border-bottom-right-radius: var(<custom-property>);",
        },
        {
          item: "rounded-br-[<value>]",
          item_meta: "border-bottom-right-radius: <value>;",
        },
        {
          item: "rounded-bl-xs",
          item_meta: "border-bottom-left-radius: var(--radius-xs); /* 0.125rem (2px) */",
        },
        {
          item: "rounded-bl-sm",
          item_meta: "border-bottom-left-radius: var(--radius-sm); /* 0.25rem (4px) */",
        },
        {
          item: "rounded-bl-md",
          item_meta: "border-bottom-left-radius: var(--radius-md); /* 0.375rem (6px) */",
        },
        {
          item: "rounded-bl-lg",
          item_meta: "border-bottom-left-radius: var(--radius-lg); /* 0.5rem (8px) */",
        },
        {
          item: "rounded-bl-xl",
          item_meta: "border-bottom-left-radius: var(--radius-xl); /* 0.75rem (12px) */",
        },
        {
          item: "rounded-bl-2xl",
          item_meta: "border-bottom-left-radius: var(--radius-2xl); /* 1rem (16px) */",
        },
        {
          item: "rounded-bl-3xl",
          item_meta: "border-bottom-left-radius: var(--radius-3xl); /* 1.5rem (24px) */",
        },
        {
          item: "rounded-bl-4xl",
          item_meta: "border-bottom-left-radius: var(--radius-4xl); /* 2rem (32px) */",
        },
        {
          item: "rounded-bl-none",
          item_meta: "border-bottom-left-radius: 0;",
        },
        {
          item: "rounded-bl-full",
          item_meta: "border-bottom-left-radius: calc(infinity * 1px);",
        },
        {
          item: "rounded-bl-(<custom-property>)",
          item_meta: "border-bottom-left-radius: var(<custom-property>);",
        },
        {
          item: "rounded-bl-[<value>]",
          item_meta: "border-bottom-left-radius: <value>;",
        }
      ]
    },
    {
      group: "border-width",
      classes: [
        {
          item: "border",
          item_meta: "border-width: 1px;",
        },
        {
          item: "border-<number>",
          item_meta: "border-width: <number>px;",
        },
        {
          item: "border-(length:<custom-property>)",
          item_meta: "border-width: var(<custom-property>);",
        },
        {
          item: "border-[<value>]",
          item_meta: "border-width: <value>;",
        },
        {
          item: "border-x",
          item_meta: "border-inline-width: 1px;",
        },
        {
          item: "border-x-<number>",
          item_meta: "border-inline-width: <number>px;",
        },
        {
          item: "border-x-(length:<custom-property>)",
          item_meta: "border-inline-width: var(<custom-property>);",
        },
        {
          item: "border-x-[<value>]",
          item_meta: "border-inline-width: <value>;",
        },
        {
          item: "border-y",
          item_meta: "border-block-width: 1px;",
        },
        {
          item: "border-y-<number>",
          item_meta: "border-block-width: <number>px;",
        },
        {
          item: "border-y-(length:<custom-property>)",
          item_meta: "border-block-width: var(<custom-property>);",
        },
        {
          item: "border-y-[<value>]",
          item_meta: "border-block-width: <value>;",
        },
        {
          item: "border-s",
          item_meta: "border-inline-start-width: 1px;",
        },
        {
          item: "border-s-<number>",
          item_meta: "border-inline-start-width: <number>px;",
        },
        {
          item: "border-s-(length:<custom-property>)",
          item_meta: "border-inline-start-width: var(<custom-property>);",
        },
        {
          item: "border-s-[<value>]",
          item_meta: "border-inline-start-width: <value>;",
        },
        {
          item: "border-e",
          item_meta: "border-inline-end-width: 1px;",
        },
        {
          item: "border-e-<number>",
          item_meta: "border-inline-end-width: <number>px;",
        },
        {
          item: "border-e-(length:<custom-property>)",
          item_meta: "border-inline-end-width: var(<custom-property>);",
        },
        {
          item: "border-e-[<value>]",
          item_meta: "border-inline-end-width: <value>;",
        },
        {
          item: "border-t",
          item_meta: "border-top-width: 1px;",
        },
        {
          item: "border-t-<number>",
          item_meta: "border-top-width: <number>px;",
        },
        {
          item: "border-t-(length:<custom-property>)",
          item_meta: "border-top-width: var(<custom-property>);",
        },
        {
          item: "border-t-[<value>]",
          item_meta: "border-top-width: <value>;",
        },
        {
          item: "border-r",
          item_meta: "border-right-width: 1px;",
        },
        {
          item: "border-r-<number>",
          item_meta: "border-right-width: <number>px;",
        },
        {
          item: "border-r-(length:<custom-property>)",
          item_meta: "border-right-width: var(<custom-property>);",
        },
        {
          item: "border-r-[<value>]",
          item_meta: "border-right-width: <value>;",
        },
        {
          item: "border-b",
          item_meta: "border-bottom-width: 1px;",
        },
        {
          item: "border-b-<number>",
          item_meta: "border-bottom-width: <number>px;",
        },
        {
          item: "border-b-(length:<custom-property>)",
          item_meta: "border-bottom-width: var(<custom-property>);",
        },
        {
          item: "border-b-[<value>]",
          item_meta: "border-bottom-width: <value>;",
        },
        {
          item: "border-l",
          item_meta: "border-left-width: 1px;",
        },
        {
          item: "border-l-<number>",
          item_meta: "border-left-width: <number>px;",
        },
        {
          item: "border-l-(length:<custom-property>)",
          item_meta: "border-left-width: var(<custom-property>);",
        },
        {
          item: "border-l-[<value>]",
          item_meta: "border-left-width: <value>;",
        },
        {
          item: "divide-x",
          item_meta: "& > :not(:last-child) { border-inline-start-width: 0px; border-inline-end-width: 1px; }",
        },
        {
          item: "divide-x-<number>",
          item_meta: "& > :not(:last-child) { border-inline-start-width: 0px; border-inline-end-width: <number>px; }",
        },
        {
          item: "divide-x-(length:<custom-property>)",
          item_meta: "& > :not(:last-child) { border-inline-start-width: 0px; border-inline-end-width: var(<custom-property>); }",
        },
        {
          item: "divide-x-[<value>]",
          item_meta: "& > :not(:last-child) { border-inline-start-width: 0px; border-inline-end-width: <value>; }",
        },
        {
          item: "divide-y",
          item_meta: "& > :not(:last-child) { border-top-width: 0px; border-bottom-width: 1px; }",
        },
        {
          item: "divide-y-<number>",
          item_meta: "& > :not(:last-child) { border-top-width: 0px; border-bottom-width: <number>px; }",
        },
        {
          item: "divide-y-(length:<custom-property>)",
          item_meta: "& > :not(:last-child) { border-top-width: 0px; border-bottom-width: var(<custom-property>); }",
        },
        {
          item: "divide-y-[<value>]",
          item_meta: "& > :not(:last-child) { border-top-width: 0px; border-bottom-width: <value>; }",
        },
        {
          item: "divide-x-reverse",
          item_meta: "--tw-divide-x-reverse: 1;",
        },
        {
          item: "divide-y-reverse",
          item_meta: "--tw-divide-y-reverse: 1;",
        }
      ]
    },
    {
      group: "border-color",
      classes: [
        {
          item: "border-inherit",
          item_meta: "border-color: inherit;",
        },
        {
          item: "border-current",
          item_meta: "border-color: currentColor;",
        },
        {
          item: "border-transparent",
          item_meta: "border-color: transparent;",
        },
        {
          item: "border-black",
          item_meta: "border-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-white",
          item_meta: "border-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-red-50",
          item_meta: "border-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-red-100",
          item_meta: "border-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-red-200",
          item_meta: "border-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-red-300",
          item_meta: "border-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-red-400",
          item_meta: "border-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-red-500",
          item_meta: "border-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-red-600",
          item_meta: "border-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-red-700",
          item_meta: "border-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-red-800",
          item_meta: "border-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-red-900",
          item_meta: "border-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-red-950",
          item_meta: "border-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-orange-50",
          item_meta: "border-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-orange-100",
          item_meta: "border-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-orange-200",
          item_meta: "border-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-orange-300",
          item_meta: "border-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-orange-400",
          item_meta: "border-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-orange-500",
          item_meta: "border-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-orange-600",
          item_meta: "border-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-orange-700",
          item_meta: "border-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-orange-800",
          item_meta: "border-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-orange-900",
          item_meta: "border-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-orange-950",
          item_meta: "border-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-amber-50",
          item_meta: "border-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-amber-100",
          item_meta: "border-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-amber-200",
          item_meta: "border-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-amber-300",
          item_meta: "border-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-amber-400",
          item_meta: "border-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-amber-500",
          item_meta: "border-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-amber-600",
          item_meta: "border-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-amber-700",
          item_meta: "border-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-amber-800",
          item_meta: "border-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-amber-900",
          item_meta: "border-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-amber-950",
          item_meta: "border-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-yellow-50",
          item_meta: "border-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-yellow-100",
          item_meta: "border-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-yellow-200",
          item_meta: "border-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-yellow-300",
          item_meta: "border-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-yellow-400",
          item_meta: "border-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-yellow-500",
          item_meta: "border-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-yellow-600",
          item_meta: "border-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-yellow-700",
          item_meta: "border-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-yellow-800",
          item_meta: "border-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-yellow-900",
          item_meta: "border-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-yellow-950",
          item_meta: "border-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-lime-50",
          item_meta: "border-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-lime-100",
          item_meta: "border-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-lime-200",
          item_meta: "border-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-lime-300",
          item_meta: "border-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-lime-400",
          item_meta: "border-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-lime-500",
          item_meta: "border-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-lime-600",
          item_meta: "border-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-lime-700",
          item_meta: "border-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-lime-800",
          item_meta: "border-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-lime-900",
          item_meta: "border-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-lime-950",
          item_meta: "border-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-green-50",
          item_meta: "border-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-green-100",
          item_meta: "border-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-green-200",
          item_meta: "border-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-green-300",
          item_meta: "border-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-green-400",
          item_meta: "border-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-green-500",
          item_meta: "border-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-green-600",
          item_meta: "border-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-green-700",
          item_meta: "border-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-green-800",
          item_meta: "border-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-green-900",
          item_meta: "border-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-green-950",
          item_meta: "border-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-emerald-50",
          item_meta: "border-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-emerald-100",
          item_meta: "border-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-emerald-200",
          item_meta: "border-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-emerald-300",
          item_meta: "border-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-emerald-400",
          item_meta: "border-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-emerald-500",
          item_meta: "border-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-emerald-600",
          item_meta: "border-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-emerald-700",
          item_meta: "border-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-emerald-800",
          item_meta: "border-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-emerald-900",
          item_meta: "border-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-emerald-950",
          item_meta: "border-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-teal-50",
          item_meta: "border-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-teal-100",
          item_meta: "border-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-teal-200",
          item_meta: "border-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-teal-300",
          item_meta: "border-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-teal-400",
          item_meta: "border-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-teal-500",
          item_meta: "border-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-teal-600",
          item_meta: "border-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-teal-700",
          item_meta: "border-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-teal-800",
          item_meta: "border-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-teal-900",
          item_meta: "border-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-teal-950",
          item_meta: "border-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-cyan-50",
          item_meta: "border-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-cyan-100",
          item_meta: "border-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-cyan-200",
          item_meta: "border-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-cyan-300",
          item_meta: "border-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-cyan-400",
          item_meta: "border-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-cyan-500",
          item_meta: "border-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-cyan-600",
          item_meta: "border-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-cyan-700",
          item_meta: "border-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-cyan-800",
          item_meta: "border-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-cyan-900",
          item_meta: "border-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-cyan-950",
          item_meta: "border-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-sky-50",
          item_meta: "border-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-sky-100",
          item_meta: "border-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-sky-200",
          item_meta: "border-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-sky-300",
          item_meta: "border-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-sky-400",
          item_meta: "border-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-sky-500",
          item_meta: "border-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-sky-600",
          item_meta: "border-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-sky-700",
          item_meta: "border-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-sky-800",
          item_meta: "border-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-sky-900",
          item_meta: "border-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-sky-950",
          item_meta: "border-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-blue-50",
          item_meta: "border-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-blue-100",
          item_meta: "border-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-blue-200",
          item_meta: "border-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-blue-300",
          item_meta: "border-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-blue-400",
          item_meta: "border-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-blue-500",
          item_meta: "border-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-blue-600",
          item_meta: "border-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-blue-700",
          item_meta: "border-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-blue-800",
          item_meta: "border-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-blue-900",
          item_meta: "border-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-blue-950",
          item_meta: "border-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-indigo-50",
          item_meta: "border-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-indigo-100",
          item_meta: "border-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-indigo-200",
          item_meta: "border-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-indigo-300",
          item_meta: "border-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-indigo-400",
          item_meta: "border-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-indigo-500",
          item_meta: "border-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-indigo-600",
          item_meta: "border-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-indigo-700",
          item_meta: "border-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-indigo-800",
          item_meta: "border-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-indigo-900",
          item_meta: "border-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-indigo-950",
          item_meta: "border-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-violet-50",
          item_meta: "border-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-violet-100",
          item_meta: "border-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-violet-200",
          item_meta: "border-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-violet-300",
          item_meta: "border-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-violet-400",
          item_meta: "border-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-violet-500",
          item_meta: "border-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-violet-600",
          item_meta: "border-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-violet-700",
          item_meta: "border-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-violet-800",
          item_meta: "border-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-violet-900",
          item_meta: "border-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-violet-950",
          item_meta: "border-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-purple-50",
          item_meta: "border-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-purple-100",
          item_meta: "border-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-purple-200",
          item_meta: "border-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-purple-300",
          item_meta: "border-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-purple-400",
          item_meta: "border-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-purple-500",
          item_meta: "border-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-purple-600",
          item_meta: "border-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-purple-700",
          item_meta: "border-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-purple-800",
          item_meta: "border-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-purple-900",
          item_meta: "border-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-purple-950",
          item_meta: "border-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-fuchsia-50",
          item_meta: "border-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-fuchsia-100",
          item_meta: "border-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-fuchsia-200",
          item_meta: "border-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-fuchsia-300",
          item_meta: "border-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-fuchsia-400",
          item_meta: "border-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-fuchsia-500",
          item_meta: "border-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-fuchsia-600",
          item_meta: "border-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-fuchsia-700",
          item_meta: "border-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-fuchsia-800",
          item_meta: "border-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-fuchsia-900",
          item_meta: "border-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-fuchsia-950",
          item_meta: "border-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-pink-50",
          item_meta: "border-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-pink-100",
          item_meta: "border-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-pink-200",
          item_meta: "border-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-pink-300",
          item_meta: "border-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-pink-400",
          item_meta: "border-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-pink-500",
          item_meta: "border-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-pink-600",
          item_meta: "border-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-pink-700",
          item_meta: "border-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-pink-800",
          item_meta: "border-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-pink-900",
          item_meta: "border-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-pink-950",
          item_meta: "border-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-rose-50",
          item_meta: "border-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-rose-100",
          item_meta: "border-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-rose-200",
          item_meta: "border-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-rose-300",
          item_meta: "border-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-rose-400",
          item_meta: "border-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-rose-500",
          item_meta: "border-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-rose-600",
          item_meta: "border-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-rose-700",
          item_meta: "border-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-rose-800",
          item_meta: "border-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-rose-900",
          item_meta: "border-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-rose-950",
          item_meta: "border-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-slate-50",
          item_meta: "border-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-slate-100",
          item_meta: "border-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-slate-200",
          item_meta: "border-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-slate-300",
          item_meta: "border-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-slate-400",
          item_meta: "border-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-slate-500",
          item_meta: "border-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-slate-600",
          item_meta: "border-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-slate-700",
          item_meta: "border-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-slate-800",
          item_meta: "border-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-slate-900",
          item_meta: "border-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-slate-950",
          item_meta: "border-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-gray-50",
          item_meta: "border-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-gray-100",
          item_meta: "border-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-gray-200",
          item_meta: "border-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-gray-300",
          item_meta: "border-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-gray-400",
          item_meta: "border-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-gray-500",
          item_meta: "border-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-gray-600",
          item_meta: "border-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-gray-700",
          item_meta: "border-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-gray-800",
          item_meta: "border-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-gray-900",
          item_meta: "border-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-gray-950",
          item_meta: "border-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-zinc-50",
          item_meta: "border-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-zinc-100",
          item_meta: "border-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-zinc-200",
          item_meta: "border-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-zinc-300",
          item_meta: "border-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-zinc-400",
          item_meta: "border-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-zinc-500",
          item_meta: "border-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-zinc-600",
          item_meta: "border-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-zinc-700",
          item_meta: "border-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-zinc-800",
          item_meta: "border-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-zinc-900",
          item_meta: "border-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-zinc-950",
          item_meta: "border-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-neutral-50",
          item_meta: "border-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-neutral-100",
          item_meta: "border-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-neutral-200",
          item_meta: "border-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-neutral-300",
          item_meta: "border-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-neutral-400",
          item_meta: "border-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-neutral-500",
          item_meta: "border-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-neutral-600",
          item_meta: "border-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-neutral-700",
          item_meta: "border-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-neutral-800",
          item_meta: "border-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-neutral-900",
          item_meta: "border-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-neutral-950",
          item_meta: "border-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-stone-50",
          item_meta: "border-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-stone-100",
          item_meta: "border-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-stone-200",
          item_meta: "border-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-stone-300",
          item_meta: "border-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-stone-400",
          item_meta: "border-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-stone-500",
          item_meta: "border-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-stone-600",
          item_meta: "border-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-stone-700",
          item_meta: "border-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-stone-800",
          item_meta: "border-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-stone-900",
          item_meta: "border-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-stone-950",
          item_meta: "border-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-(<custom-property>)",
          item_meta: "border-color: var(<custom-property>);",
        },
        {
          item: "border-[<value>]",
          item_meta: "border-color: <value>;",
        },
        {
          item: "border-x-inherit",
          item_meta: "border-inline-color: inherit;",
        },
        {
          item: "border-x-current",
          item_meta: "border-inline-color: currentColor;",
        },
        {
          item: "border-x-transparent",
          item_meta: "border-inline-color: transparent;",
        },
        {
          item: "border-x-black",
          item_meta: "border-inline-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-x-white",
          item_meta: "border-inline-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-x-red-50",
          item_meta: "border-inline-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-x-red-100",
          item_meta: "border-inline-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-x-red-200",
          item_meta: "border-inline-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-x-red-300",
          item_meta: "border-inline-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-x-red-400",
          item_meta: "border-inline-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-x-red-500",
          item_meta: "border-inline-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-x-red-600",
          item_meta: "border-inline-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-x-red-700",
          item_meta: "border-inline-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-x-red-800",
          item_meta: "border-inline-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-x-red-900",
          item_meta: "border-inline-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-x-red-950",
          item_meta: "border-inline-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-x-orange-50",
          item_meta: "border-inline-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-x-orange-100",
          item_meta: "border-inline-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-x-orange-200",
          item_meta: "border-inline-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-x-orange-300",
          item_meta: "border-inline-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-x-orange-400",
          item_meta: "border-inline-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-x-orange-500",
          item_meta: "border-inline-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-x-orange-600",
          item_meta: "border-inline-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-x-orange-700",
          item_meta: "border-inline-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-x-orange-800",
          item_meta: "border-inline-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-x-orange-900",
          item_meta: "border-inline-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-x-orange-950",
          item_meta: "border-inline-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-x-amber-50",
          item_meta: "border-inline-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-x-amber-100",
          item_meta: "border-inline-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-x-amber-200",
          item_meta: "border-inline-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-x-amber-300",
          item_meta: "border-inline-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-x-amber-400",
          item_meta: "border-inline-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-x-amber-500",
          item_meta: "border-inline-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-x-amber-600",
          item_meta: "border-inline-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-x-amber-700",
          item_meta: "border-inline-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-x-amber-800",
          item_meta: "border-inline-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-x-amber-900",
          item_meta: "border-inline-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-x-amber-950",
          item_meta: "border-inline-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-x-yellow-50",
          item_meta: "border-inline-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-x-yellow-100",
          item_meta: "border-inline-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-x-yellow-200",
          item_meta: "border-inline-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-x-yellow-300",
          item_meta: "border-inline-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-x-yellow-400",
          item_meta: "border-inline-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-x-yellow-500",
          item_meta: "border-inline-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-x-yellow-600",
          item_meta: "border-inline-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-x-yellow-700",
          item_meta: "border-inline-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-x-yellow-800",
          item_meta: "border-inline-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-x-yellow-900",
          item_meta: "border-inline-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-x-yellow-950",
          item_meta: "border-inline-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-x-lime-50",
          item_meta: "border-inline-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-x-lime-100",
          item_meta: "border-inline-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-x-lime-200",
          item_meta: "border-inline-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-x-lime-300",
          item_meta: "border-inline-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-x-lime-400",
          item_meta: "border-inline-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-x-lime-500",
          item_meta: "border-inline-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-x-lime-600",
          item_meta: "border-inline-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-x-lime-700",
          item_meta: "border-inline-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-x-lime-800",
          item_meta: "border-inline-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-x-lime-900",
          item_meta: "border-inline-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-x-lime-950",
          item_meta: "border-inline-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-x-green-50",
          item_meta: "border-inline-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-x-green-100",
          item_meta: "border-inline-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-x-green-200",
          item_meta: "border-inline-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-x-green-300",
          item_meta: "border-inline-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-x-green-400",
          item_meta: "border-inline-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-x-green-500",
          item_meta: "border-inline-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-x-green-600",
          item_meta: "border-inline-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-x-green-700",
          item_meta: "border-inline-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-x-green-800",
          item_meta: "border-inline-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-x-green-900",
          item_meta: "border-inline-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-x-green-950",
          item_meta: "border-inline-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-x-emerald-50",
          item_meta: "border-inline-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-x-emerald-100",
          item_meta: "border-inline-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-x-emerald-200",
          item_meta: "border-inline-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-x-emerald-300",
          item_meta: "border-inline-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-x-emerald-400",
          item_meta: "border-inline-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-x-emerald-500",
          item_meta: "border-inline-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-x-emerald-600",
          item_meta: "border-inline-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-x-emerald-700",
          item_meta: "border-inline-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-x-emerald-800",
          item_meta: "border-inline-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-x-emerald-900",
          item_meta: "border-inline-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-x-emerald-950",
          item_meta: "border-inline-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-x-teal-50",
          item_meta: "border-inline-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-x-teal-100",
          item_meta: "border-inline-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-x-teal-200",
          item_meta: "border-inline-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-x-teal-300",
          item_meta: "border-inline-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-x-teal-400",
          item_meta: "border-inline-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-x-teal-500",
          item_meta: "border-inline-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-x-teal-600",
          item_meta: "border-inline-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-x-teal-700",
          item_meta: "border-inline-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-x-teal-800",
          item_meta: "border-inline-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-x-teal-900",
          item_meta: "border-inline-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-x-teal-950",
          item_meta: "border-inline-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-x-cyan-50",
          item_meta: "border-inline-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-x-cyan-100",
          item_meta: "border-inline-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-x-cyan-200",
          item_meta: "border-inline-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-x-cyan-300",
          item_meta: "border-inline-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-x-cyan-400",
          item_meta: "border-inline-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-x-cyan-500",
          item_meta: "border-inline-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-x-cyan-600",
          item_meta: "border-inline-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-x-cyan-700",
          item_meta: "border-inline-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-x-cyan-800",
          item_meta: "border-inline-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-x-cyan-900",
          item_meta: "border-inline-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-x-cyan-950",
          item_meta: "border-inline-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-x-sky-50",
          item_meta: "border-inline-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-x-sky-100",
          item_meta: "border-inline-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-x-sky-200",
          item_meta: "border-inline-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-x-sky-300",
          item_meta: "border-inline-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-x-sky-400",
          item_meta: "border-inline-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-x-sky-500",
          item_meta: "border-inline-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-x-sky-600",
          item_meta: "border-inline-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-x-sky-700",
          item_meta: "border-inline-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-x-sky-800",
          item_meta: "border-inline-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-x-sky-900",
          item_meta: "border-inline-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-x-sky-950",
          item_meta: "border-inline-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-x-blue-50",
          item_meta: "border-inline-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-x-blue-100",
          item_meta: "border-inline-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-x-blue-200",
          item_meta: "border-inline-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-x-blue-300",
          item_meta: "border-inline-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-x-blue-400",
          item_meta: "border-inline-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-x-blue-500",
          item_meta: "border-inline-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-x-blue-600",
          item_meta: "border-inline-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-x-blue-700",
          item_meta: "border-inline-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-x-blue-800",
          item_meta: "border-inline-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-x-blue-900",
          item_meta: "border-inline-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-x-blue-950",
          item_meta: "border-inline-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-x-indigo-50",
          item_meta: "border-inline-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-x-indigo-100",
          item_meta: "border-inline-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-x-indigo-200",
          item_meta: "border-inline-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-x-indigo-300",
          item_meta: "border-inline-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-x-indigo-400",
          item_meta: "border-inline-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-x-indigo-500",
          item_meta: "border-inline-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-x-indigo-600",
          item_meta: "border-inline-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-x-indigo-700",
          item_meta: "border-inline-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-x-indigo-800",
          item_meta: "border-inline-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-x-indigo-900",
          item_meta: "border-inline-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-x-indigo-950",
          item_meta: "border-inline-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-x-violet-50",
          item_meta: "border-inline-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-x-violet-100",
          item_meta: "border-inline-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-x-violet-200",
          item_meta: "border-inline-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-x-violet-300",
          item_meta: "border-inline-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-x-violet-400",
          item_meta: "border-inline-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-x-violet-500",
          item_meta: "border-inline-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-x-violet-600",
          item_meta: "border-inline-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-x-violet-700",
          item_meta: "border-inline-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-x-violet-800",
          item_meta: "border-inline-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-x-violet-900",
          item_meta: "border-inline-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-x-violet-950",
          item_meta: "border-inline-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-x-purple-50",
          item_meta: "border-inline-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-x-purple-100",
          item_meta: "border-inline-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-x-purple-200",
          item_meta: "border-inline-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-x-purple-300",
          item_meta: "border-inline-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-x-purple-400",
          item_meta: "border-inline-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-x-purple-500",
          item_meta: "border-inline-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-x-purple-600",
          item_meta: "border-inline-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-x-purple-700",
          item_meta: "border-inline-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-x-purple-800",
          item_meta: "border-inline-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-x-purple-900",
          item_meta: "border-inline-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-x-purple-950",
          item_meta: "border-inline-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-x-fuchsia-50",
          item_meta: "border-inline-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-x-fuchsia-100",
          item_meta: "border-inline-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-x-fuchsia-200",
          item_meta: "border-inline-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-x-fuchsia-300",
          item_meta: "border-inline-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-x-fuchsia-400",
          item_meta: "border-inline-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-x-fuchsia-500",
          item_meta: "border-inline-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-x-fuchsia-600",
          item_meta: "border-inline-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-x-fuchsia-700",
          item_meta: "border-inline-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-x-fuchsia-800",
          item_meta: "border-inline-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-x-fuchsia-900",
          item_meta: "border-inline-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-x-fuchsia-950",
          item_meta: "border-inline-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-x-pink-50",
          item_meta: "border-inline-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-x-pink-100",
          item_meta: "border-inline-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-x-pink-200",
          item_meta: "border-inline-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-x-pink-300",
          item_meta: "border-inline-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-x-pink-400",
          item_meta: "border-inline-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-x-pink-500",
          item_meta: "border-inline-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-x-pink-600",
          item_meta: "border-inline-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-x-pink-700",
          item_meta: "border-inline-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-x-pink-800",
          item_meta: "border-inline-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-x-pink-900",
          item_meta: "border-inline-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-x-pink-950",
          item_meta: "border-inline-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-x-rose-50",
          item_meta: "border-inline-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-x-rose-100",
          item_meta: "border-inline-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-x-rose-200",
          item_meta: "border-inline-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-x-rose-300",
          item_meta: "border-inline-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-x-rose-400",
          item_meta: "border-inline-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-x-rose-500",
          item_meta: "border-inline-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-x-rose-600",
          item_meta: "border-inline-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-x-rose-700",
          item_meta: "border-inline-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-x-rose-800",
          item_meta: "border-inline-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-x-rose-900",
          item_meta: "border-inline-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-x-rose-950",
          item_meta: "border-inline-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-x-slate-50",
          item_meta: "border-inline-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-x-slate-100",
          item_meta: "border-inline-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-x-slate-200",
          item_meta: "border-inline-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-x-slate-300",
          item_meta: "border-inline-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-x-slate-400",
          item_meta: "border-inline-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-x-slate-500",
          item_meta: "border-inline-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-x-slate-600",
          item_meta: "border-inline-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-x-slate-700",
          item_meta: "border-inline-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-x-slate-800",
          item_meta: "border-inline-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-x-slate-900",
          item_meta: "border-inline-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-x-slate-950",
          item_meta: "border-inline-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-x-gray-50",
          item_meta: "border-inline-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-x-gray-100",
          item_meta: "border-inline-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-x-gray-200",
          item_meta: "border-inline-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-x-gray-300",
          item_meta: "border-inline-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-x-gray-400",
          item_meta: "border-inline-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-x-gray-500",
          item_meta: "border-inline-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-x-gray-600",
          item_meta: "border-inline-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-x-gray-700",
          item_meta: "border-inline-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-x-gray-800",
          item_meta: "border-inline-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-x-gray-900",
          item_meta: "border-inline-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-x-gray-950",
          item_meta: "border-inline-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-x-zinc-50",
          item_meta: "border-inline-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-x-zinc-100",
          item_meta: "border-inline-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-x-zinc-200",
          item_meta: "border-inline-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-x-zinc-300",
          item_meta: "border-inline-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-x-zinc-400",
          item_meta: "border-inline-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-x-zinc-500",
          item_meta: "border-inline-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-x-zinc-600",
          item_meta: "border-inline-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-x-zinc-700",
          item_meta: "border-inline-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-x-zinc-800",
          item_meta: "border-inline-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-x-zinc-900",
          item_meta: "border-inline-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-x-zinc-950",
          item_meta: "border-inline-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-x-neutral-50",
          item_meta: "border-inline-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-x-neutral-100",
          item_meta: "border-inline-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-x-neutral-200",
          item_meta: "border-inline-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-x-neutral-300",
          item_meta: "border-inline-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-x-neutral-400",
          item_meta: "border-inline-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-x-neutral-500",
          item_meta: "border-inline-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-x-neutral-600",
          item_meta: "border-inline-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-x-neutral-700",
          item_meta: "border-inline-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-x-neutral-800",
          item_meta: "border-inline-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-x-neutral-900",
          item_meta: "border-inline-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-x-neutral-950",
          item_meta: "border-inline-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-x-stone-50",
          item_meta: "border-inline-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-x-stone-100",
          item_meta: "border-inline-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-x-stone-200",
          item_meta: "border-inline-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-x-stone-300",
          item_meta: "border-inline-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-x-stone-400",
          item_meta: "border-inline-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-x-stone-500",
          item_meta: "border-inline-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-x-stone-600",
          item_meta: "border-inline-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-x-stone-700",
          item_meta: "border-inline-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-x-stone-800",
          item_meta: "border-inline-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-x-stone-900",
          item_meta: "border-inline-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-x-stone-950",
          item_meta: "border-inline-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-x-(<custom-property>)",
          item_meta: "border-inline-color: var(<custom-property>);",
        },
        {
          item: "border-x-[<value>]",
          item_meta: "border-inline-color: <value>;",
        },
        {
          item: "border-y-inherit",
          item_meta: "border-block-color: inherit;",
        },
        {
          item: "border-y-current",
          item_meta: "border-block-color: currentColor;",
        },
        {
          item: "border-y-transparent",
          item_meta: "border-block-color: transparent;",
        },
        {
          item: "border-y-black",
          item_meta: "border-block-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-y-white",
          item_meta: "border-block-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-y-red-50",
          item_meta: "border-block-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-y-red-100",
          item_meta: "border-block-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-y-red-200",
          item_meta: "border-block-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-y-red-300",
          item_meta: "border-block-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-y-red-400",
          item_meta: "border-block-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-y-red-500",
          item_meta: "border-block-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-y-red-600",
          item_meta: "border-block-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-y-red-700",
          item_meta: "border-block-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-y-red-800",
          item_meta: "border-block-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-y-red-900",
          item_meta: "border-block-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-y-red-950",
          item_meta: "border-block-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-y-orange-50",
          item_meta: "border-block-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-y-orange-100",
          item_meta: "border-block-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-y-orange-200",
          item_meta: "border-block-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-y-orange-300",
          item_meta: "border-block-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-y-orange-400",
          item_meta: "border-block-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-y-orange-500",
          item_meta: "border-block-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-y-orange-600",
          item_meta: "border-block-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-y-orange-700",
          item_meta: "border-block-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-y-orange-800",
          item_meta: "border-block-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-y-orange-900",
          item_meta: "border-block-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-y-orange-950",
          item_meta: "border-block-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-y-amber-50",
          item_meta: "border-block-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-y-amber-100",
          item_meta: "border-block-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-y-amber-200",
          item_meta: "border-block-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-y-amber-300",
          item_meta: "border-block-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-y-amber-400",
          item_meta: "border-block-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-y-amber-500",
          item_meta: "border-block-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-y-amber-600",
          item_meta: "border-block-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-y-amber-700",
          item_meta: "border-block-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-y-amber-800",
          item_meta: "border-block-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-y-amber-900",
          item_meta: "border-block-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-y-amber-950",
          item_meta: "border-block-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-y-yellow-50",
          item_meta: "border-block-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-y-yellow-100",
          item_meta: "border-block-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-y-yellow-200",
          item_meta: "border-block-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-y-yellow-300",
          item_meta: "border-block-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-y-yellow-400",
          item_meta: "border-block-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-y-yellow-500",
          item_meta: "border-block-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-y-yellow-600",
          item_meta: "border-block-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-y-yellow-700",
          item_meta: "border-block-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-y-yellow-800",
          item_meta: "border-block-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-y-yellow-900",
          item_meta: "border-block-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-y-yellow-950",
          item_meta: "border-block-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-y-lime-50",
          item_meta: "border-block-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-y-lime-100",
          item_meta: "border-block-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-y-lime-200",
          item_meta: "border-block-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-y-lime-300",
          item_meta: "border-block-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-y-lime-400",
          item_meta: "border-block-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-y-lime-500",
          item_meta: "border-block-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-y-lime-600",
          item_meta: "border-block-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-y-lime-700",
          item_meta: "border-block-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-y-lime-800",
          item_meta: "border-block-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-y-lime-900",
          item_meta: "border-block-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-y-lime-950",
          item_meta: "border-block-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-y-green-50",
          item_meta: "border-block-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-y-green-100",
          item_meta: "border-block-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-y-green-200",
          item_meta: "border-block-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-y-green-300",
          item_meta: "border-block-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-y-green-400",
          item_meta: "border-block-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-y-green-500",
          item_meta: "border-block-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-y-green-600",
          item_meta: "border-block-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-y-green-700",
          item_meta: "border-block-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-y-green-800",
          item_meta: "border-block-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-y-green-900",
          item_meta: "border-block-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-y-green-950",
          item_meta: "border-block-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-y-emerald-50",
          item_meta: "border-block-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-y-emerald-100",
          item_meta: "border-block-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-y-emerald-200",
          item_meta: "border-block-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-y-emerald-300",
          item_meta: "border-block-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-y-emerald-400",
          item_meta: "border-block-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-y-emerald-500",
          item_meta: "border-block-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-y-emerald-600",
          item_meta: "border-block-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-y-emerald-700",
          item_meta: "border-block-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-y-emerald-800",
          item_meta: "border-block-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-y-emerald-900",
          item_meta: "border-block-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-y-emerald-950",
          item_meta: "border-block-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-y-teal-50",
          item_meta: "border-block-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-y-teal-100",
          item_meta: "border-block-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-y-teal-200",
          item_meta: "border-block-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-y-teal-300",
          item_meta: "border-block-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-y-teal-400",
          item_meta: "border-block-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-y-teal-500",
          item_meta: "border-block-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-y-teal-600",
          item_meta: "border-block-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-y-teal-700",
          item_meta: "border-block-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-y-teal-800",
          item_meta: "border-block-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-y-teal-900",
          item_meta: "border-block-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-y-teal-950",
          item_meta: "border-block-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-y-cyan-50",
          item_meta: "border-block-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-y-cyan-100",
          item_meta: "border-block-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-y-cyan-200",
          item_meta: "border-block-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-y-cyan-300",
          item_meta: "border-block-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-y-cyan-400",
          item_meta: "border-block-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-y-cyan-500",
          item_meta: "border-block-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-y-cyan-600",
          item_meta: "border-block-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-y-cyan-700",
          item_meta: "border-block-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-y-cyan-800",
          item_meta: "border-block-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-y-cyan-900",
          item_meta: "border-block-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-y-cyan-950",
          item_meta: "border-block-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-y-sky-50",
          item_meta: "border-block-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-y-sky-100",
          item_meta: "border-block-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-y-sky-200",
          item_meta: "border-block-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-y-sky-300",
          item_meta: "border-block-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-y-sky-400",
          item_meta: "border-block-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-y-sky-500",
          item_meta: "border-block-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-y-sky-600",
          item_meta: "border-block-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-y-sky-700",
          item_meta: "border-block-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-y-sky-800",
          item_meta: "border-block-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-y-sky-900",
          item_meta: "border-block-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-y-sky-950",
          item_meta: "border-block-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-y-blue-50",
          item_meta: "border-block-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-y-blue-100",
          item_meta: "border-block-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-y-blue-200",
          item_meta: "border-block-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-y-blue-300",
          item_meta: "border-block-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-y-blue-400",
          item_meta: "border-block-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-y-blue-500",
          item_meta: "border-block-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-y-blue-600",
          item_meta: "border-block-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-y-blue-700",
          item_meta: "border-block-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-y-blue-800",
          item_meta: "border-block-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-y-blue-900",
          item_meta: "border-block-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-y-blue-950",
          item_meta: "border-block-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-y-indigo-50",
          item_meta: "border-block-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-y-indigo-100",
          item_meta: "border-block-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-y-indigo-200",
          item_meta: "border-block-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-y-indigo-300",
          item_meta: "border-block-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-y-indigo-400",
          item_meta: "border-block-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-y-indigo-500",
          item_meta: "border-block-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-y-indigo-600",
          item_meta: "border-block-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-y-indigo-700",
          item_meta: "border-block-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-y-indigo-800",
          item_meta: "border-block-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-y-indigo-900",
          item_meta: "border-block-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-y-indigo-950",
          item_meta: "border-block-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-y-violet-50",
          item_meta: "border-block-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-y-violet-100",
          item_meta: "border-block-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-y-violet-200",
          item_meta: "border-block-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-y-violet-300",
          item_meta: "border-block-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-y-violet-400",
          item_meta: "border-block-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-y-violet-500",
          item_meta: "border-block-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-y-violet-600",
          item_meta: "border-block-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-y-violet-700",
          item_meta: "border-block-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-y-violet-800",
          item_meta: "border-block-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-y-violet-900",
          item_meta: "border-block-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-y-violet-950",
          item_meta: "border-block-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-y-purple-50",
          item_meta: "border-block-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-y-purple-100",
          item_meta: "border-block-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-y-purple-200",
          item_meta: "border-block-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-y-purple-300",
          item_meta: "border-block-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-y-purple-400",
          item_meta: "border-block-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-y-purple-500",
          item_meta: "border-block-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-y-purple-600",
          item_meta: "border-block-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-y-purple-700",
          item_meta: "border-block-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-y-purple-800",
          item_meta: "border-block-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-y-purple-900",
          item_meta: "border-block-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-y-purple-950",
          item_meta: "border-block-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-y-fuchsia-50",
          item_meta: "border-block-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-y-fuchsia-100",
          item_meta: "border-block-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-y-fuchsia-200",
          item_meta: "border-block-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-y-fuchsia-300",
          item_meta: "border-block-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-y-fuchsia-400",
          item_meta: "border-block-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-y-fuchsia-500",
          item_meta: "border-block-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-y-fuchsia-600",
          item_meta: "border-block-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-y-fuchsia-700",
          item_meta: "border-block-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-y-fuchsia-800",
          item_meta: "border-block-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-y-fuchsia-900",
          item_meta: "border-block-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-y-fuchsia-950",
          item_meta: "border-block-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-y-pink-50",
          item_meta: "border-block-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-y-pink-100",
          item_meta: "border-block-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-y-pink-200",
          item_meta: "border-block-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-y-pink-300",
          item_meta: "border-block-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-y-pink-400",
          item_meta: "border-block-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-y-pink-500",
          item_meta: "border-block-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-y-pink-600",
          item_meta: "border-block-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-y-pink-700",
          item_meta: "border-block-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-y-pink-800",
          item_meta: "border-block-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-y-pink-900",
          item_meta: "border-block-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-y-pink-950",
          item_meta: "border-block-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-y-rose-50",
          item_meta: "border-block-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-y-rose-100",
          item_meta: "border-block-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-y-rose-200",
          item_meta: "border-block-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-y-rose-300",
          item_meta: "border-block-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-y-rose-400",
          item_meta: "border-block-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-y-rose-500",
          item_meta: "border-block-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-y-rose-600",
          item_meta: "border-block-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-y-rose-700",
          item_meta: "border-block-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-y-rose-800",
          item_meta: "border-block-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-y-rose-900",
          item_meta: "border-block-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-y-rose-950",
          item_meta: "border-block-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-y-slate-50",
          item_meta: "border-block-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-y-slate-100",
          item_meta: "border-block-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-y-slate-200",
          item_meta: "border-block-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-y-slate-300",
          item_meta: "border-block-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-y-slate-400",
          item_meta: "border-block-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-y-slate-500",
          item_meta: "border-block-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-y-slate-600",
          item_meta: "border-block-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-y-slate-700",
          item_meta: "border-block-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-y-slate-800",
          item_meta: "border-block-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-y-slate-900",
          item_meta: "border-block-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-y-slate-950",
          item_meta: "border-block-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-y-gray-50",
          item_meta: "border-block-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-y-gray-100",
          item_meta: "border-block-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-y-gray-200",
          item_meta: "border-block-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-y-gray-300",
          item_meta: "border-block-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-y-gray-400",
          item_meta: "border-block-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-y-gray-500",
          item_meta: "border-block-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-y-gray-600",
          item_meta: "border-block-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-y-gray-700",
          item_meta: "border-block-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-y-gray-800",
          item_meta: "border-block-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-y-gray-900",
          item_meta: "border-block-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-y-gray-950",
          item_meta: "border-block-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-y-zinc-50",
          item_meta: "border-block-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-y-zinc-100",
          item_meta: "border-block-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-y-zinc-200",
          item_meta: "border-block-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-y-zinc-300",
          item_meta: "border-block-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-y-zinc-400",
          item_meta: "border-block-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-y-zinc-500",
          item_meta: "border-block-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-y-zinc-600",
          item_meta: "border-block-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-y-zinc-700",
          item_meta: "border-block-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-y-zinc-800",
          item_meta: "border-block-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-y-zinc-900",
          item_meta: "border-block-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-y-zinc-950",
          item_meta: "border-block-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-y-neutral-50",
          item_meta: "border-block-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-y-neutral-100",
          item_meta: "border-block-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-y-neutral-200",
          item_meta: "border-block-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-y-neutral-300",
          item_meta: "border-block-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-y-neutral-400",
          item_meta: "border-block-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-y-neutral-500",
          item_meta: "border-block-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-y-neutral-600",
          item_meta: "border-block-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-y-neutral-700",
          item_meta: "border-block-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-y-neutral-800",
          item_meta: "border-block-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-y-neutral-900",
          item_meta: "border-block-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-y-neutral-950",
          item_meta: "border-block-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-y-stone-50",
          item_meta: "border-block-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-y-stone-100",
          item_meta: "border-block-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-y-stone-200",
          item_meta: "border-block-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-y-stone-300",
          item_meta: "border-block-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-y-stone-400",
          item_meta: "border-block-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-y-stone-500",
          item_meta: "border-block-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-y-stone-600",
          item_meta: "border-block-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-y-stone-700",
          item_meta: "border-block-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-y-stone-800",
          item_meta: "border-block-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-y-stone-900",
          item_meta: "border-block-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-y-stone-950",
          item_meta: "border-block-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-y-(<custom-property>)",
          item_meta: "border-block-color: var(<custom-property>);",
        },
        {
          item: "border-y-[<value>]",
          item_meta: "border-block-color: <value>;",
        },
        {
          item: "border-s-inherit",
          item_meta: "border-inline-start-color: inherit;",
        },
        {
          item: "border-s-current",
          item_meta: "border-inline-start-color: currentColor;",
        },
        {
          item: "border-s-transparent",
          item_meta: "border-inline-start-color: transparent;",
        },
        {
          item: "border-s-black",
          item_meta: "border-inline-start-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-s-white",
          item_meta: "border-inline-start-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-s-red-50",
          item_meta: "border-inline-start-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-s-red-100",
          item_meta: "border-inline-start-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-s-red-200",
          item_meta: "border-inline-start-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-s-red-300",
          item_meta: "border-inline-start-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-s-red-400",
          item_meta: "border-inline-start-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-s-red-500",
          item_meta: "border-inline-start-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-s-red-600",
          item_meta: "border-inline-start-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-s-red-700",
          item_meta: "border-inline-start-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-s-red-800",
          item_meta: "border-inline-start-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-s-red-900",
          item_meta: "border-inline-start-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-s-red-950",
          item_meta: "border-inline-start-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-s-orange-50",
          item_meta: "border-inline-start-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-s-orange-100",
          item_meta: "border-inline-start-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-s-orange-200",
          item_meta: "border-inline-start-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-s-orange-300",
          item_meta: "border-inline-start-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-s-orange-400",
          item_meta: "border-inline-start-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-s-orange-500",
          item_meta: "border-inline-start-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-s-orange-600",
          item_meta: "border-inline-start-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-s-orange-700",
          item_meta: "border-inline-start-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-s-orange-800",
          item_meta: "border-inline-start-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-s-orange-900",
          item_meta: "border-inline-start-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-s-orange-950",
          item_meta: "border-inline-start-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-s-amber-50",
          item_meta: "border-inline-start-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-s-amber-100",
          item_meta: "border-inline-start-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-s-amber-200",
          item_meta: "border-inline-start-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-s-amber-300",
          item_meta: "border-inline-start-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-s-amber-400",
          item_meta: "border-inline-start-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-s-amber-500",
          item_meta: "border-inline-start-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-s-amber-600",
          item_meta: "border-inline-start-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-s-amber-700",
          item_meta: "border-inline-start-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-s-amber-800",
          item_meta: "border-inline-start-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-s-amber-900",
          item_meta: "border-inline-start-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-s-amber-950",
          item_meta: "border-inline-start-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-s-yellow-50",
          item_meta: "border-inline-start-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-s-yellow-100",
          item_meta: "border-inline-start-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-s-yellow-200",
          item_meta: "border-inline-start-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-s-yellow-300",
          item_meta: "border-inline-start-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-s-yellow-400",
          item_meta: "border-inline-start-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-s-yellow-500",
          item_meta: "border-inline-start-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-s-yellow-600",
          item_meta: "border-inline-start-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-s-yellow-700",
          item_meta: "border-inline-start-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-s-yellow-800",
          item_meta: "border-inline-start-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-s-yellow-900",
          item_meta: "border-inline-start-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-s-yellow-950",
          item_meta: "border-inline-start-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-s-lime-50",
          item_meta: "border-inline-start-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-s-lime-100",
          item_meta: "border-inline-start-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-s-lime-200",
          item_meta: "border-inline-start-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-s-lime-300",
          item_meta: "border-inline-start-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-s-lime-400",
          item_meta: "border-inline-start-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-s-lime-500",
          item_meta: "border-inline-start-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-s-lime-600",
          item_meta: "border-inline-start-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-s-lime-700",
          item_meta: "border-inline-start-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-s-lime-800",
          item_meta: "border-inline-start-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-s-lime-900",
          item_meta: "border-inline-start-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-s-lime-950",
          item_meta: "border-inline-start-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-s-green-50",
          item_meta: "border-inline-start-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-s-green-100",
          item_meta: "border-inline-start-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-s-green-200",
          item_meta: "border-inline-start-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-s-green-300",
          item_meta: "border-inline-start-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-s-green-400",
          item_meta: "border-inline-start-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-s-green-500",
          item_meta: "border-inline-start-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-s-green-600",
          item_meta: "border-inline-start-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-s-green-700",
          item_meta: "border-inline-start-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-s-green-800",
          item_meta: "border-inline-start-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-s-green-900",
          item_meta: "border-inline-start-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-s-green-950",
          item_meta: "border-inline-start-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-s-emerald-50",
          item_meta: "border-inline-start-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-s-emerald-100",
          item_meta: "border-inline-start-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-s-emerald-200",
          item_meta: "border-inline-start-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-s-emerald-300",
          item_meta: "border-inline-start-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-s-emerald-400",
          item_meta: "border-inline-start-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-s-emerald-500",
          item_meta: "border-inline-start-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-s-emerald-600",
          item_meta: "border-inline-start-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-s-emerald-700",
          item_meta: "border-inline-start-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-s-emerald-800",
          item_meta: "border-inline-start-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-s-emerald-900",
          item_meta: "border-inline-start-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-s-emerald-950",
          item_meta: "border-inline-start-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-s-teal-50",
          item_meta: "border-inline-start-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-s-teal-100",
          item_meta: "border-inline-start-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-s-teal-200",
          item_meta: "border-inline-start-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-s-teal-300",
          item_meta: "border-inline-start-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-s-teal-400",
          item_meta: "border-inline-start-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-s-teal-500",
          item_meta: "border-inline-start-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-s-teal-600",
          item_meta: "border-inline-start-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-s-teal-700",
          item_meta: "border-inline-start-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-s-teal-800",
          item_meta: "border-inline-start-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-s-teal-900",
          item_meta: "border-inline-start-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-s-teal-950",
          item_meta: "border-inline-start-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-s-cyan-50",
          item_meta: "border-inline-start-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-s-cyan-100",
          item_meta: "border-inline-start-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-s-cyan-200",
          item_meta: "border-inline-start-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-s-cyan-300",
          item_meta: "border-inline-start-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-s-cyan-400",
          item_meta: "border-inline-start-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-s-cyan-500",
          item_meta: "border-inline-start-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-s-cyan-600",
          item_meta: "border-inline-start-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-s-cyan-700",
          item_meta: "border-inline-start-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-s-cyan-800",
          item_meta: "border-inline-start-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-s-cyan-900",
          item_meta: "border-inline-start-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-s-cyan-950",
          item_meta: "border-inline-start-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-s-sky-50",
          item_meta: "border-inline-start-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-s-sky-100",
          item_meta: "border-inline-start-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-s-sky-200",
          item_meta: "border-inline-start-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-s-sky-300",
          item_meta: "border-inline-start-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-s-sky-400",
          item_meta: "border-inline-start-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-s-sky-500",
          item_meta: "border-inline-start-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-s-sky-600",
          item_meta: "border-inline-start-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-s-sky-700",
          item_meta: "border-inline-start-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-s-sky-800",
          item_meta: "border-inline-start-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-s-sky-900",
          item_meta: "border-inline-start-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-s-sky-950",
          item_meta: "border-inline-start-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-s-blue-50",
          item_meta: "border-inline-start-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-s-blue-100",
          item_meta: "border-inline-start-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-s-blue-200",
          item_meta: "border-inline-start-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-s-blue-300",
          item_meta: "border-inline-start-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-s-blue-400",
          item_meta: "border-inline-start-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-s-blue-500",
          item_meta: "border-inline-start-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-s-blue-600",
          item_meta: "border-inline-start-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-s-blue-700",
          item_meta: "border-inline-start-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-s-blue-800",
          item_meta: "border-inline-start-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-s-blue-900",
          item_meta: "border-inline-start-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-s-blue-950",
          item_meta: "border-inline-start-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-s-indigo-50",
          item_meta: "border-inline-start-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-s-indigo-100",
          item_meta: "border-inline-start-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-s-indigo-200",
          item_meta: "border-inline-start-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-s-indigo-300",
          item_meta: "border-inline-start-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-s-indigo-400",
          item_meta: "border-inline-start-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-s-indigo-500",
          item_meta: "border-inline-start-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-s-indigo-600",
          item_meta: "border-inline-start-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-s-indigo-700",
          item_meta: "border-inline-start-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-s-indigo-800",
          item_meta: "border-inline-start-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-s-indigo-900",
          item_meta: "border-inline-start-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-s-indigo-950",
          item_meta: "border-inline-start-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-s-violet-50",
          item_meta: "border-inline-start-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-s-violet-100",
          item_meta: "border-inline-start-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-s-violet-200",
          item_meta: "border-inline-start-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-s-violet-300",
          item_meta: "border-inline-start-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-s-violet-400",
          item_meta: "border-inline-start-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-s-violet-500",
          item_meta: "border-inline-start-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-s-violet-600",
          item_meta: "border-inline-start-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-s-violet-700",
          item_meta: "border-inline-start-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-s-violet-800",
          item_meta: "border-inline-start-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-s-violet-900",
          item_meta: "border-inline-start-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-s-violet-950",
          item_meta: "border-inline-start-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-s-purple-50",
          item_meta: "border-inline-start-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-s-purple-100",
          item_meta: "border-inline-start-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-s-purple-200",
          item_meta: "border-inline-start-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-s-purple-300",
          item_meta: "border-inline-start-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-s-purple-400",
          item_meta: "border-inline-start-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-s-purple-500",
          item_meta: "border-inline-start-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-s-purple-600",
          item_meta: "border-inline-start-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-s-purple-700",
          item_meta: "border-inline-start-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-s-purple-800",
          item_meta: "border-inline-start-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-s-purple-900",
          item_meta: "border-inline-start-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-s-purple-950",
          item_meta: "border-inline-start-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-s-fuchsia-50",
          item_meta: "border-inline-start-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-s-fuchsia-100",
          item_meta: "border-inline-start-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-s-fuchsia-200",
          item_meta: "border-inline-start-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-s-fuchsia-300",
          item_meta: "border-inline-start-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-s-fuchsia-400",
          item_meta: "border-inline-start-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-s-fuchsia-500",
          item_meta: "border-inline-start-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-s-fuchsia-600",
          item_meta: "border-inline-start-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-s-fuchsia-700",
          item_meta: "border-inline-start-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-s-fuchsia-800",
          item_meta: "border-inline-start-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-s-fuchsia-900",
          item_meta: "border-inline-start-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-s-fuchsia-950",
          item_meta: "border-inline-start-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-s-pink-50",
          item_meta: "border-inline-start-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-s-pink-100",
          item_meta: "border-inline-start-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-s-pink-200",
          item_meta: "border-inline-start-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-s-pink-300",
          item_meta: "border-inline-start-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-s-pink-400",
          item_meta: "border-inline-start-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-s-pink-500",
          item_meta: "border-inline-start-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-s-pink-600",
          item_meta: "border-inline-start-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-s-pink-700",
          item_meta: "border-inline-start-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-s-pink-800",
          item_meta: "border-inline-start-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-s-pink-900",
          item_meta: "border-inline-start-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-s-pink-950",
          item_meta: "border-inline-start-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-s-rose-50",
          item_meta: "border-inline-start-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-s-rose-100",
          item_meta: "border-inline-start-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-s-rose-200",
          item_meta: "border-inline-start-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-s-rose-300",
          item_meta: "border-inline-start-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-s-rose-400",
          item_meta: "border-inline-start-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-s-rose-500",
          item_meta: "border-inline-start-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-s-rose-600",
          item_meta: "border-inline-start-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-s-rose-700",
          item_meta: "border-inline-start-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-s-rose-800",
          item_meta: "border-inline-start-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-s-rose-900",
          item_meta: "border-inline-start-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-s-rose-950",
          item_meta: "border-inline-start-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-s-slate-50",
          item_meta: "border-inline-start-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-s-slate-100",
          item_meta: "border-inline-start-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-s-slate-200",
          item_meta: "border-inline-start-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-s-slate-300",
          item_meta: "border-inline-start-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-s-slate-400",
          item_meta: "border-inline-start-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-s-slate-500",
          item_meta: "border-inline-start-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-s-slate-600",
          item_meta: "border-inline-start-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-s-slate-700",
          item_meta: "border-inline-start-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-s-slate-800",
          item_meta: "border-inline-start-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-s-slate-900",
          item_meta: "border-inline-start-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-s-slate-950",
          item_meta: "border-inline-start-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-s-gray-50",
          item_meta: "border-inline-start-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-s-gray-100",
          item_meta: "border-inline-start-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-s-gray-200",
          item_meta: "border-inline-start-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-s-gray-300",
          item_meta: "border-inline-start-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-s-gray-400",
          item_meta: "border-inline-start-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-s-gray-500",
          item_meta: "border-inline-start-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-s-gray-600",
          item_meta: "border-inline-start-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-s-gray-700",
          item_meta: "border-inline-start-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-s-gray-800",
          item_meta: "border-inline-start-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-s-gray-900",
          item_meta: "border-inline-start-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-s-gray-950",
          item_meta: "border-inline-start-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-s-zinc-50",
          item_meta: "border-inline-start-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-s-zinc-100",
          item_meta: "border-inline-start-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-s-zinc-200",
          item_meta: "border-inline-start-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-s-zinc-300",
          item_meta: "border-inline-start-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-s-zinc-400",
          item_meta: "border-inline-start-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-s-zinc-500",
          item_meta: "border-inline-start-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-s-zinc-600",
          item_meta: "border-inline-start-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-s-zinc-700",
          item_meta: "border-inline-start-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-s-zinc-800",
          item_meta: "border-inline-start-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-s-zinc-900",
          item_meta: "border-inline-start-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-s-zinc-950",
          item_meta: "border-inline-start-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-s-neutral-50",
          item_meta: "border-inline-start-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-s-neutral-100",
          item_meta: "border-inline-start-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-s-neutral-200",
          item_meta: "border-inline-start-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-s-neutral-300",
          item_meta: "border-inline-start-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-s-neutral-400",
          item_meta: "border-inline-start-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-s-neutral-500",
          item_meta: "border-inline-start-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-s-neutral-600",
          item_meta: "border-inline-start-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-s-neutral-700",
          item_meta: "border-inline-start-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-s-neutral-800",
          item_meta: "border-inline-start-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-s-neutral-900",
          item_meta: "border-inline-start-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-s-neutral-950",
          item_meta: "border-inline-start-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-s-stone-50",
          item_meta: "border-inline-start-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-s-stone-100",
          item_meta: "border-inline-start-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-s-stone-200",
          item_meta: "border-inline-start-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-s-stone-300",
          item_meta: "border-inline-start-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-s-stone-400",
          item_meta: "border-inline-start-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-s-stone-500",
          item_meta: "border-inline-start-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-s-stone-600",
          item_meta: "border-inline-start-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-s-stone-700",
          item_meta: "border-inline-start-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-s-stone-800",
          item_meta: "border-inline-start-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-s-stone-900",
          item_meta: "border-inline-start-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-s-stone-950",
          item_meta: "border-inline-start-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-s-(<custom-property>)",
          item_meta: "border-inline-start-color: var(<custom-property>);",
        },
        {
          item: "border-s-[<value>]",
          item_meta: "border-inline-start-color: <value>;",
        },
        {
          item: "border-e-inherit",
          item_meta: "border-inline-end-color: inherit;",
        },
        {
          item: "border-e-current",
          item_meta: "border-inline-end-color: currentColor;",
        },
        {
          item: "border-e-transparent",
          item_meta: "border-inline-end-color: transparent;",
        },
        {
          item: "border-e-black",
          item_meta: "border-inline-end-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-e-white",
          item_meta: "border-inline-end-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-e-red-50",
          item_meta: "border-inline-end-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-e-red-100",
          item_meta: "border-inline-end-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-e-red-200",
          item_meta: "border-inline-end-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-e-red-300",
          item_meta: "border-inline-end-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-e-red-400",
          item_meta: "border-inline-end-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-e-red-500",
          item_meta: "border-inline-end-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-e-red-600",
          item_meta: "border-inline-end-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-e-red-700",
          item_meta: "border-inline-end-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-e-red-800",
          item_meta: "border-inline-end-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-e-red-900",
          item_meta: "border-inline-end-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-e-red-950",
          item_meta: "border-inline-end-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-e-orange-50",
          item_meta: "border-inline-end-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-e-orange-100",
          item_meta: "border-inline-end-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-e-orange-200",
          item_meta: "border-inline-end-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-e-orange-300",
          item_meta: "border-inline-end-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-e-orange-400",
          item_meta: "border-inline-end-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-e-orange-500",
          item_meta: "border-inline-end-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-e-orange-600",
          item_meta: "border-inline-end-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-e-orange-700",
          item_meta: "border-inline-end-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-e-orange-800",
          item_meta: "border-inline-end-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-e-orange-900",
          item_meta: "border-inline-end-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-e-orange-950",
          item_meta: "border-inline-end-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-e-amber-50",
          item_meta: "border-inline-end-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-e-amber-100",
          item_meta: "border-inline-end-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-e-amber-200",
          item_meta: "border-inline-end-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-e-amber-300",
          item_meta: "border-inline-end-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-e-amber-400",
          item_meta: "border-inline-end-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-e-amber-500",
          item_meta: "border-inline-end-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-e-amber-600",
          item_meta: "border-inline-end-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-e-amber-700",
          item_meta: "border-inline-end-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-e-amber-800",
          item_meta: "border-inline-end-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-e-amber-900",
          item_meta: "border-inline-end-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-e-amber-950",
          item_meta: "border-inline-end-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-e-yellow-50",
          item_meta: "border-inline-end-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-e-yellow-100",
          item_meta: "border-inline-end-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-e-yellow-200",
          item_meta: "border-inline-end-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-e-yellow-300",
          item_meta: "border-inline-end-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-e-yellow-400",
          item_meta: "border-inline-end-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-e-yellow-500",
          item_meta: "border-inline-end-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-e-yellow-600",
          item_meta: "border-inline-end-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-e-yellow-700",
          item_meta: "border-inline-end-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-e-yellow-800",
          item_meta: "border-inline-end-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-e-yellow-900",
          item_meta: "border-inline-end-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-e-yellow-950",
          item_meta: "border-inline-end-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-e-lime-50",
          item_meta: "border-inline-end-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-e-lime-100",
          item_meta: "border-inline-end-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-e-lime-200",
          item_meta: "border-inline-end-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-e-lime-300",
          item_meta: "border-inline-end-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-e-lime-400",
          item_meta: "border-inline-end-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-e-lime-500",
          item_meta: "border-inline-end-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-e-lime-600",
          item_meta: "border-inline-end-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-e-lime-700",
          item_meta: "border-inline-end-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-e-lime-800",
          item_meta: "border-inline-end-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-e-lime-900",
          item_meta: "border-inline-end-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-e-lime-950",
          item_meta: "border-inline-end-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-e-green-50",
          item_meta: "border-inline-end-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-e-green-100",
          item_meta: "border-inline-end-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-e-green-200",
          item_meta: "border-inline-end-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-e-green-300",
          item_meta: "border-inline-end-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-e-green-400",
          item_meta: "border-inline-end-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-e-green-500",
          item_meta: "border-inline-end-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-e-green-600",
          item_meta: "border-inline-end-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-e-green-700",
          item_meta: "border-inline-end-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-e-green-800",
          item_meta: "border-inline-end-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-e-green-900",
          item_meta: "border-inline-end-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-e-green-950",
          item_meta: "border-inline-end-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-e-emerald-50",
          item_meta: "border-inline-end-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-e-emerald-100",
          item_meta: "border-inline-end-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-e-emerald-200",
          item_meta: "border-inline-end-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-e-emerald-300",
          item_meta: "border-inline-end-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-e-emerald-400",
          item_meta: "border-inline-end-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-e-emerald-500",
          item_meta: "border-inline-end-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-e-emerald-600",
          item_meta: "border-inline-end-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-e-emerald-700",
          item_meta: "border-inline-end-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-e-emerald-800",
          item_meta: "border-inline-end-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-e-emerald-900",
          item_meta: "border-inline-end-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-e-emerald-950",
          item_meta: "border-inline-end-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-e-teal-50",
          item_meta: "border-inline-end-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-e-teal-100",
          item_meta: "border-inline-end-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-e-teal-200",
          item_meta: "border-inline-end-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-e-teal-300",
          item_meta: "border-inline-end-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-e-teal-400",
          item_meta: "border-inline-end-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-e-teal-500",
          item_meta: "border-inline-end-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-e-teal-600",
          item_meta: "border-inline-end-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-e-teal-700",
          item_meta: "border-inline-end-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-e-teal-800",
          item_meta: "border-inline-end-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-e-teal-900",
          item_meta: "border-inline-end-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-e-teal-950",
          item_meta: "border-inline-end-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-e-cyan-50",
          item_meta: "border-inline-end-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-e-cyan-100",
          item_meta: "border-inline-end-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-e-cyan-200",
          item_meta: "border-inline-end-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-e-cyan-300",
          item_meta: "border-inline-end-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-e-cyan-400",
          item_meta: "border-inline-end-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-e-cyan-500",
          item_meta: "border-inline-end-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-e-cyan-600",
          item_meta: "border-inline-end-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-e-cyan-700",
          item_meta: "border-inline-end-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-e-cyan-800",
          item_meta: "border-inline-end-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-e-cyan-900",
          item_meta: "border-inline-end-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-e-cyan-950",
          item_meta: "border-inline-end-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-e-sky-50",
          item_meta: "border-inline-end-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-e-sky-100",
          item_meta: "border-inline-end-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-e-sky-200",
          item_meta: "border-inline-end-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-e-sky-300",
          item_meta: "border-inline-end-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-e-sky-400",
          item_meta: "border-inline-end-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-e-sky-500",
          item_meta: "border-inline-end-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-e-sky-600",
          item_meta: "border-inline-end-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-e-sky-700",
          item_meta: "border-inline-end-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-e-sky-800",
          item_meta: "border-inline-end-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-e-sky-900",
          item_meta: "border-inline-end-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-e-sky-950",
          item_meta: "border-inline-end-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-e-blue-50",
          item_meta: "border-inline-end-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-e-blue-100",
          item_meta: "border-inline-end-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-e-blue-200",
          item_meta: "border-inline-end-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-e-blue-300",
          item_meta: "border-inline-end-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-e-blue-400",
          item_meta: "border-inline-end-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-e-blue-500",
          item_meta: "border-inline-end-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-e-blue-600",
          item_meta: "border-inline-end-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-e-blue-700",
          item_meta: "border-inline-end-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-e-blue-800",
          item_meta: "border-inline-end-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-e-blue-900",
          item_meta: "border-inline-end-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-e-blue-950",
          item_meta: "border-inline-end-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-e-indigo-50",
          item_meta: "border-inline-end-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-e-indigo-100",
          item_meta: "border-inline-end-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-e-indigo-200",
          item_meta: "border-inline-end-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-e-indigo-300",
          item_meta: "border-inline-end-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-e-indigo-400",
          item_meta: "border-inline-end-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-e-indigo-500",
          item_meta: "border-inline-end-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-e-indigo-600",
          item_meta: "border-inline-end-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-e-indigo-700",
          item_meta: "border-inline-end-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-e-indigo-800",
          item_meta: "border-inline-end-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-e-indigo-900",
          item_meta: "border-inline-end-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-e-indigo-950",
          item_meta: "border-inline-end-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-e-violet-50",
          item_meta: "border-inline-end-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-e-violet-100",
          item_meta: "border-inline-end-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-e-violet-200",
          item_meta: "border-inline-end-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-e-violet-300",
          item_meta: "border-inline-end-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-e-violet-400",
          item_meta: "border-inline-end-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-e-violet-500",
          item_meta: "border-inline-end-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-e-violet-600",
          item_meta: "border-inline-end-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-e-violet-700",
          item_meta: "border-inline-end-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-e-violet-800",
          item_meta: "border-inline-end-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-e-violet-900",
          item_meta: "border-inline-end-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-e-violet-950",
          item_meta: "border-inline-end-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-e-purple-50",
          item_meta: "border-inline-end-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-e-purple-100",
          item_meta: "border-inline-end-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-e-purple-200",
          item_meta: "border-inline-end-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-e-purple-300",
          item_meta: "border-inline-end-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-e-purple-400",
          item_meta: "border-inline-end-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-e-purple-500",
          item_meta: "border-inline-end-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-e-purple-600",
          item_meta: "border-inline-end-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-e-purple-700",
          item_meta: "border-inline-end-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-e-purple-800",
          item_meta: "border-inline-end-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-e-purple-900",
          item_meta: "border-inline-end-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-e-purple-950",
          item_meta: "border-inline-end-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-e-fuchsia-50",
          item_meta: "border-inline-end-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-e-fuchsia-100",
          item_meta: "border-inline-end-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-e-fuchsia-200",
          item_meta: "border-inline-end-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-e-fuchsia-300",
          item_meta: "border-inline-end-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-e-fuchsia-400",
          item_meta: "border-inline-end-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-e-fuchsia-500",
          item_meta: "border-inline-end-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-e-fuchsia-600",
          item_meta: "border-inline-end-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-e-fuchsia-700",
          item_meta: "border-inline-end-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-e-fuchsia-800",
          item_meta: "border-inline-end-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-e-fuchsia-900",
          item_meta: "border-inline-end-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-e-fuchsia-950",
          item_meta: "border-inline-end-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-e-pink-50",
          item_meta: "border-inline-end-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-e-pink-100",
          item_meta: "border-inline-end-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-e-pink-200",
          item_meta: "border-inline-end-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-e-pink-300",
          item_meta: "border-inline-end-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-e-pink-400",
          item_meta: "border-inline-end-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-e-pink-500",
          item_meta: "border-inline-end-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-e-pink-600",
          item_meta: "border-inline-end-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-e-pink-700",
          item_meta: "border-inline-end-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-e-pink-800",
          item_meta: "border-inline-end-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-e-pink-900",
          item_meta: "border-inline-end-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-e-pink-950",
          item_meta: "border-inline-end-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-e-rose-50",
          item_meta: "border-inline-end-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-e-rose-100",
          item_meta: "border-inline-end-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-e-rose-200",
          item_meta: "border-inline-end-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-e-rose-300",
          item_meta: "border-inline-end-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-e-rose-400",
          item_meta: "border-inline-end-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-e-rose-500",
          item_meta: "border-inline-end-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-e-rose-600",
          item_meta: "border-inline-end-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-e-rose-700",
          item_meta: "border-inline-end-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-e-rose-800",
          item_meta: "border-inline-end-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-e-rose-900",
          item_meta: "border-inline-end-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-e-rose-950",
          item_meta: "border-inline-end-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-e-slate-50",
          item_meta: "border-inline-end-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-e-slate-100",
          item_meta: "border-inline-end-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-e-slate-200",
          item_meta: "border-inline-end-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-e-slate-300",
          item_meta: "border-inline-end-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-e-slate-400",
          item_meta: "border-inline-end-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-e-slate-500",
          item_meta: "border-inline-end-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-e-slate-600",
          item_meta: "border-inline-end-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-e-slate-700",
          item_meta: "border-inline-end-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-e-slate-800",
          item_meta: "border-inline-end-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-e-slate-900",
          item_meta: "border-inline-end-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-e-slate-950",
          item_meta: "border-inline-end-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-e-gray-50",
          item_meta: "border-inline-end-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-e-gray-100",
          item_meta: "border-inline-end-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-e-gray-200",
          item_meta: "border-inline-end-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-e-gray-300",
          item_meta: "border-inline-end-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-e-gray-400",
          item_meta: "border-inline-end-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-e-gray-500",
          item_meta: "border-inline-end-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-e-gray-600",
          item_meta: "border-inline-end-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-e-gray-700",
          item_meta: "border-inline-end-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-e-gray-800",
          item_meta: "border-inline-end-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-e-gray-900",
          item_meta: "border-inline-end-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-e-gray-950",
          item_meta: "border-inline-end-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-e-zinc-50",
          item_meta: "border-inline-end-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-e-zinc-100",
          item_meta: "border-inline-end-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-e-zinc-200",
          item_meta: "border-inline-end-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-e-zinc-300",
          item_meta: "border-inline-end-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-e-zinc-400",
          item_meta: "border-inline-end-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-e-zinc-500",
          item_meta: "border-inline-end-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-e-zinc-600",
          item_meta: "border-inline-end-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-e-zinc-700",
          item_meta: "border-inline-end-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-e-zinc-800",
          item_meta: "border-inline-end-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-e-zinc-900",
          item_meta: "border-inline-end-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-e-zinc-950",
          item_meta: "border-inline-end-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-e-neutral-50",
          item_meta: "border-inline-end-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-e-neutral-100",
          item_meta: "border-inline-end-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-e-neutral-200",
          item_meta: "border-inline-end-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-e-neutral-300",
          item_meta: "border-inline-end-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-e-neutral-400",
          item_meta: "border-inline-end-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-e-neutral-500",
          item_meta: "border-inline-end-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-e-neutral-600",
          item_meta: "border-inline-end-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-e-neutral-700",
          item_meta: "border-inline-end-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-e-neutral-800",
          item_meta: "border-inline-end-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-e-neutral-900",
          item_meta: "border-inline-end-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-e-neutral-950",
          item_meta: "border-inline-end-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-e-stone-50",
          item_meta: "border-inline-end-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-e-stone-100",
          item_meta: "border-inline-end-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-e-stone-200",
          item_meta: "border-inline-end-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-e-stone-300",
          item_meta: "border-inline-end-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-e-stone-400",
          item_meta: "border-inline-end-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-e-stone-500",
          item_meta: "border-inline-end-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-e-stone-600",
          item_meta: "border-inline-end-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-e-stone-700",
          item_meta: "border-inline-end-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-e-stone-800",
          item_meta: "border-inline-end-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-e-stone-900",
          item_meta: "border-inline-end-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-e-stone-950",
          item_meta: "border-inline-end-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-e-(<custom-property>)",
          item_meta: "border-inline-end-color: var(<custom-property>);",
        },
        {
          item: "border-e-[<value>]",
          item_meta: "border-inline-end-color: <value>;",
        },
        {
          item: "border-t-inherit",
          item_meta: "border-top-color: inherit;",
        },
        {
          item: "border-t-current",
          item_meta: "border-top-color: currentColor;",
        },
        {
          item: "border-t-transparent",
          item_meta: "border-top-color: transparent;",
        },
        {
          item: "border-t-black",
          item_meta: "border-top-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-t-white",
          item_meta: "border-top-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-t-red-50",
          item_meta: "border-top-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-t-red-100",
          item_meta: "border-top-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-t-red-200",
          item_meta: "border-top-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-t-red-300",
          item_meta: "border-top-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-t-red-400",
          item_meta: "border-top-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-t-red-500",
          item_meta: "border-top-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-t-red-600",
          item_meta: "border-top-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-t-red-700",
          item_meta: "border-top-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-t-red-800",
          item_meta: "border-top-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-t-red-900",
          item_meta: "border-top-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-t-red-950",
          item_meta: "border-top-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-t-orange-50",
          item_meta: "border-top-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-t-orange-100",
          item_meta: "border-top-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-t-orange-200",
          item_meta: "border-top-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-t-orange-300",
          item_meta: "border-top-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-t-orange-400",
          item_meta: "border-top-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-t-orange-500",
          item_meta: "border-top-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-t-orange-600",
          item_meta: "border-top-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-t-orange-700",
          item_meta: "border-top-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-t-orange-800",
          item_meta: "border-top-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-t-orange-900",
          item_meta: "border-top-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-t-orange-950",
          item_meta: "border-top-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-t-amber-50",
          item_meta: "border-top-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-t-amber-100",
          item_meta: "border-top-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-t-amber-200",
          item_meta: "border-top-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-t-amber-300",
          item_meta: "border-top-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-t-amber-400",
          item_meta: "border-top-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-t-amber-500",
          item_meta: "border-top-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-t-amber-600",
          item_meta: "border-top-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-t-amber-700",
          item_meta: "border-top-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-t-amber-800",
          item_meta: "border-top-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-t-amber-900",
          item_meta: "border-top-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-t-amber-950",
          item_meta: "border-top-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-t-yellow-50",
          item_meta: "border-top-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-t-yellow-100",
          item_meta: "border-top-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-t-yellow-200",
          item_meta: "border-top-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-t-yellow-300",
          item_meta: "border-top-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-t-yellow-400",
          item_meta: "border-top-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-t-yellow-500",
          item_meta: "border-top-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-t-yellow-600",
          item_meta: "border-top-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-t-yellow-700",
          item_meta: "border-top-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-t-yellow-800",
          item_meta: "border-top-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-t-yellow-900",
          item_meta: "border-top-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-t-yellow-950",
          item_meta: "border-top-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-t-lime-50",
          item_meta: "border-top-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-t-lime-100",
          item_meta: "border-top-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-t-lime-200",
          item_meta: "border-top-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-t-lime-300",
          item_meta: "border-top-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-t-lime-400",
          item_meta: "border-top-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-t-lime-500",
          item_meta: "border-top-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-t-lime-600",
          item_meta: "border-top-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-t-lime-700",
          item_meta: "border-top-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-t-lime-800",
          item_meta: "border-top-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-t-lime-900",
          item_meta: "border-top-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-t-lime-950",
          item_meta: "border-top-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-t-green-50",
          item_meta: "border-top-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-t-green-100",
          item_meta: "border-top-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-t-green-200",
          item_meta: "border-top-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-t-green-300",
          item_meta: "border-top-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-t-green-400",
          item_meta: "border-top-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-t-green-500",
          item_meta: "border-top-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-t-green-600",
          item_meta: "border-top-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-t-green-700",
          item_meta: "border-top-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-t-green-800",
          item_meta: "border-top-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-t-green-900",
          item_meta: "border-top-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-t-green-950",
          item_meta: "border-top-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-t-emerald-50",
          item_meta: "border-top-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-t-emerald-100",
          item_meta: "border-top-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-t-emerald-200",
          item_meta: "border-top-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-t-emerald-300",
          item_meta: "border-top-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-t-emerald-400",
          item_meta: "border-top-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-t-emerald-500",
          item_meta: "border-top-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-t-emerald-600",
          item_meta: "border-top-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-t-emerald-700",
          item_meta: "border-top-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-t-emerald-800",
          item_meta: "border-top-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-t-emerald-900",
          item_meta: "border-top-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-t-emerald-950",
          item_meta: "border-top-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-t-teal-50",
          item_meta: "border-top-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-t-teal-100",
          item_meta: "border-top-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-t-teal-200",
          item_meta: "border-top-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-t-teal-300",
          item_meta: "border-top-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-t-teal-400",
          item_meta: "border-top-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-t-teal-500",
          item_meta: "border-top-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-t-teal-600",
          item_meta: "border-top-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-t-teal-700",
          item_meta: "border-top-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-t-teal-800",
          item_meta: "border-top-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-t-teal-900",
          item_meta: "border-top-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-t-teal-950",
          item_meta: "border-top-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-t-cyan-50",
          item_meta: "border-top-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-t-cyan-100",
          item_meta: "border-top-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-t-cyan-200",
          item_meta: "border-top-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-t-cyan-300",
          item_meta: "border-top-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-t-cyan-400",
          item_meta: "border-top-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-t-cyan-500",
          item_meta: "border-top-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-t-cyan-600",
          item_meta: "border-top-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-t-cyan-700",
          item_meta: "border-top-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-t-cyan-800",
          item_meta: "border-top-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-t-cyan-900",
          item_meta: "border-top-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-t-cyan-950",
          item_meta: "border-top-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-t-sky-50",
          item_meta: "border-top-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-t-sky-100",
          item_meta: "border-top-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-t-sky-200",
          item_meta: "border-top-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-t-sky-300",
          item_meta: "border-top-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-t-sky-400",
          item_meta: "border-top-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-t-sky-500",
          item_meta: "border-top-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-t-sky-600",
          item_meta: "border-top-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-t-sky-700",
          item_meta: "border-top-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-t-sky-800",
          item_meta: "border-top-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-t-sky-900",
          item_meta: "border-top-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-t-sky-950",
          item_meta: "border-top-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-t-blue-50",
          item_meta: "border-top-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-t-blue-100",
          item_meta: "border-top-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-t-blue-200",
          item_meta: "border-top-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-t-blue-300",
          item_meta: "border-top-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-t-blue-400",
          item_meta: "border-top-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-t-blue-500",
          item_meta: "border-top-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-t-blue-600",
          item_meta: "border-top-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-t-blue-700",
          item_meta: "border-top-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-t-blue-800",
          item_meta: "border-top-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-t-blue-900",
          item_meta: "border-top-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-t-blue-950",
          item_meta: "border-top-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-t-indigo-50",
          item_meta: "border-top-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-t-indigo-100",
          item_meta: "border-top-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-t-indigo-200",
          item_meta: "border-top-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-t-indigo-300",
          item_meta: "border-top-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-t-indigo-400",
          item_meta: "border-top-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-t-indigo-500",
          item_meta: "border-top-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-t-indigo-600",
          item_meta: "border-top-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-t-indigo-700",
          item_meta: "border-top-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-t-indigo-800",
          item_meta: "border-top-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-t-indigo-900",
          item_meta: "border-top-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-t-indigo-950",
          item_meta: "border-top-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-t-violet-50",
          item_meta: "border-top-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-t-violet-100",
          item_meta: "border-top-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-t-violet-200",
          item_meta: "border-top-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-t-violet-300",
          item_meta: "border-top-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-t-violet-400",
          item_meta: "border-top-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-t-violet-500",
          item_meta: "border-top-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-t-violet-600",
          item_meta: "border-top-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-t-violet-700",
          item_meta: "border-top-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-t-violet-800",
          item_meta: "border-top-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-t-violet-900",
          item_meta: "border-top-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-t-violet-950",
          item_meta: "border-top-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-t-purple-50",
          item_meta: "border-top-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-t-purple-100",
          item_meta: "border-top-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-t-purple-200",
          item_meta: "border-top-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-t-purple-300",
          item_meta: "border-top-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-t-purple-400",
          item_meta: "border-top-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-t-purple-500",
          item_meta: "border-top-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-t-purple-600",
          item_meta: "border-top-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-t-purple-700",
          item_meta: "border-top-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-t-purple-800",
          item_meta: "border-top-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-t-purple-900",
          item_meta: "border-top-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-t-purple-950",
          item_meta: "border-top-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-t-fuchsia-50",
          item_meta: "border-top-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-t-fuchsia-100",
          item_meta: "border-top-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-t-fuchsia-200",
          item_meta: "border-top-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-t-fuchsia-300",
          item_meta: "border-top-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-t-fuchsia-400",
          item_meta: "border-top-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-t-fuchsia-500",
          item_meta: "border-top-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-t-fuchsia-600",
          item_meta: "border-top-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-t-fuchsia-700",
          item_meta: "border-top-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-t-fuchsia-800",
          item_meta: "border-top-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-t-fuchsia-900",
          item_meta: "border-top-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-t-fuchsia-950",
          item_meta: "border-top-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-t-pink-50",
          item_meta: "border-top-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-t-pink-100",
          item_meta: "border-top-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-t-pink-200",
          item_meta: "border-top-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-t-pink-300",
          item_meta: "border-top-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-t-pink-400",
          item_meta: "border-top-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-t-pink-500",
          item_meta: "border-top-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-t-pink-600",
          item_meta: "border-top-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-t-pink-700",
          item_meta: "border-top-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-t-pink-800",
          item_meta: "border-top-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-t-pink-900",
          item_meta: "border-top-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-t-pink-950",
          item_meta: "border-top-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-t-rose-50",
          item_meta: "border-top-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-t-rose-100",
          item_meta: "border-top-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-t-rose-200",
          item_meta: "border-top-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-t-rose-300",
          item_meta: "border-top-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-t-rose-400",
          item_meta: "border-top-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-t-rose-500",
          item_meta: "border-top-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-t-rose-600",
          item_meta: "border-top-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-t-rose-700",
          item_meta: "border-top-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-t-rose-800",
          item_meta: "border-top-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-t-rose-900",
          item_meta: "border-top-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-t-rose-950",
          item_meta: "border-top-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-t-slate-50",
          item_meta: "border-top-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-t-slate-100",
          item_meta: "border-top-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-t-slate-200",
          item_meta: "border-top-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-t-slate-300",
          item_meta: "border-top-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-t-slate-400",
          item_meta: "border-top-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-t-slate-500",
          item_meta: "border-top-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-t-slate-600",
          item_meta: "border-top-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-t-slate-700",
          item_meta: "border-top-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-t-slate-800",
          item_meta: "border-top-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-t-slate-900",
          item_meta: "border-top-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-t-slate-950",
          item_meta: "border-top-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-t-gray-50",
          item_meta: "border-top-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-t-gray-100",
          item_meta: "border-top-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-t-gray-200",
          item_meta: "border-top-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-t-gray-300",
          item_meta: "border-top-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-t-gray-400",
          item_meta: "border-top-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-t-gray-500",
          item_meta: "border-top-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-t-gray-600",
          item_meta: "border-top-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-t-gray-700",
          item_meta: "border-top-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-t-gray-800",
          item_meta: "border-top-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-t-gray-900",
          item_meta: "border-top-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-t-gray-950",
          item_meta: "border-top-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-t-zinc-50",
          item_meta: "border-top-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-t-zinc-100",
          item_meta: "border-top-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-t-zinc-200",
          item_meta: "border-top-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-t-zinc-300",
          item_meta: "border-top-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-t-zinc-400",
          item_meta: "border-top-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-t-zinc-500",
          item_meta: "border-top-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-t-zinc-600",
          item_meta: "border-top-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-t-zinc-700",
          item_meta: "border-top-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-t-zinc-800",
          item_meta: "border-top-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-t-zinc-900",
          item_meta: "border-top-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-t-zinc-950",
          item_meta: "border-top-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-t-neutral-50",
          item_meta: "border-top-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-t-neutral-100",
          item_meta: "border-top-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-t-neutral-200",
          item_meta: "border-top-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-t-neutral-300",
          item_meta: "border-top-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-t-neutral-400",
          item_meta: "border-top-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-t-neutral-500",
          item_meta: "border-top-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-t-neutral-600",
          item_meta: "border-top-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-t-neutral-700",
          item_meta: "border-top-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-t-neutral-800",
          item_meta: "border-top-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-t-neutral-900",
          item_meta: "border-top-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-t-neutral-950",
          item_meta: "border-top-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-t-stone-50",
          item_meta: "border-top-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-t-stone-100",
          item_meta: "border-top-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-t-stone-200",
          item_meta: "border-top-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-t-stone-300",
          item_meta: "border-top-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-t-stone-400",
          item_meta: "border-top-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-t-stone-500",
          item_meta: "border-top-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-t-stone-600",
          item_meta: "border-top-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-t-stone-700",
          item_meta: "border-top-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-t-stone-800",
          item_meta: "border-top-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-t-stone-900",
          item_meta: "border-top-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-t-stone-950",
          item_meta: "border-top-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-t-(<custom-property>)",
          item_meta: "border-top-color: var(<custom-property>);",
        },
        {
          item: "border-t-[<value>]",
          item_meta: "border-top-color: <value>;",
        },
        {
          item: "border-r-inherit",
          item_meta: "border-right-color: inherit;",
        },
        {
          item: "border-r-current",
          item_meta: "border-right-color: currentColor;",
        },
        {
          item: "border-r-transparent",
          item_meta: "border-right-color: transparent;",
        },
        {
          item: "border-r-black",
          item_meta: "border-right-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-r-white",
          item_meta: "border-right-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-r-red-50",
          item_meta: "border-right-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-r-red-100",
          item_meta: "border-right-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-r-red-200",
          item_meta: "border-right-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-r-red-300",
          item_meta: "border-right-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-r-red-400",
          item_meta: "border-right-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-r-red-500",
          item_meta: "border-right-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-r-red-600",
          item_meta: "border-right-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-r-red-700",
          item_meta: "border-right-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-r-red-800",
          item_meta: "border-right-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-r-red-900",
          item_meta: "border-right-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-r-red-950",
          item_meta: "border-right-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-r-orange-50",
          item_meta: "border-right-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-r-orange-100",
          item_meta: "border-right-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-r-orange-200",
          item_meta: "border-right-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-r-orange-300",
          item_meta: "border-right-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-r-orange-400",
          item_meta: "border-right-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-r-orange-500",
          item_meta: "border-right-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-r-orange-600",
          item_meta: "border-right-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-r-orange-700",
          item_meta: "border-right-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-r-orange-800",
          item_meta: "border-right-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-r-orange-900",
          item_meta: "border-right-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-r-orange-950",
          item_meta: "border-right-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-r-amber-50",
          item_meta: "border-right-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-r-amber-100",
          item_meta: "border-right-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-r-amber-200",
          item_meta: "border-right-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-r-amber-300",
          item_meta: "border-right-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-r-amber-400",
          item_meta: "border-right-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-r-amber-500",
          item_meta: "border-right-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-r-amber-600",
          item_meta: "border-right-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-r-amber-700",
          item_meta: "border-right-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-r-amber-800",
          item_meta: "border-right-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-r-amber-900",
          item_meta: "border-right-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-r-amber-950",
          item_meta: "border-right-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-r-yellow-50",
          item_meta: "border-right-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-r-yellow-100",
          item_meta: "border-right-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-r-yellow-200",
          item_meta: "border-right-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-r-yellow-300",
          item_meta: "border-right-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-r-yellow-400",
          item_meta: "border-right-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-r-yellow-500",
          item_meta: "border-right-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-r-yellow-600",
          item_meta: "border-right-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-r-yellow-700",
          item_meta: "border-right-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-r-yellow-800",
          item_meta: "border-right-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-r-yellow-900",
          item_meta: "border-right-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-r-yellow-950",
          item_meta: "border-right-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-r-lime-50",
          item_meta: "border-right-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-r-lime-100",
          item_meta: "border-right-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-r-lime-200",
          item_meta: "border-right-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-r-lime-300",
          item_meta: "border-right-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-r-lime-400",
          item_meta: "border-right-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-r-lime-500",
          item_meta: "border-right-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-r-lime-600",
          item_meta: "border-right-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-r-lime-700",
          item_meta: "border-right-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-r-lime-800",
          item_meta: "border-right-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-r-lime-900",
          item_meta: "border-right-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-r-lime-950",
          item_meta: "border-right-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-r-green-50",
          item_meta: "border-right-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-r-green-100",
          item_meta: "border-right-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-r-green-200",
          item_meta: "border-right-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-r-green-300",
          item_meta: "border-right-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-r-green-400",
          item_meta: "border-right-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-r-green-500",
          item_meta: "border-right-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-r-green-600",
          item_meta: "border-right-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-r-green-700",
          item_meta: "border-right-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-r-green-800",
          item_meta: "border-right-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-r-green-900",
          item_meta: "border-right-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-r-green-950",
          item_meta: "border-right-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-r-emerald-50",
          item_meta: "border-right-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-r-emerald-100",
          item_meta: "border-right-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-r-emerald-200",
          item_meta: "border-right-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-r-emerald-300",
          item_meta: "border-right-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-r-emerald-400",
          item_meta: "border-right-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-r-emerald-500",
          item_meta: "border-right-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-r-emerald-600",
          item_meta: "border-right-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-r-emerald-700",
          item_meta: "border-right-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-r-emerald-800",
          item_meta: "border-right-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-r-emerald-900",
          item_meta: "border-right-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-r-emerald-950",
          item_meta: "border-right-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-r-teal-50",
          item_meta: "border-right-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-r-teal-100",
          item_meta: "border-right-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-r-teal-200",
          item_meta: "border-right-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-r-teal-300",
          item_meta: "border-right-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-r-teal-400",
          item_meta: "border-right-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-r-teal-500",
          item_meta: "border-right-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-r-teal-600",
          item_meta: "border-right-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-r-teal-700",
          item_meta: "border-right-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-r-teal-800",
          item_meta: "border-right-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-r-teal-900",
          item_meta: "border-right-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-r-teal-950",
          item_meta: "border-right-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-r-cyan-50",
          item_meta: "border-right-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-r-cyan-100",
          item_meta: "border-right-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-r-cyan-200",
          item_meta: "border-right-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-r-cyan-300",
          item_meta: "border-right-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-r-cyan-400",
          item_meta: "border-right-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-r-cyan-500",
          item_meta: "border-right-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-r-cyan-600",
          item_meta: "border-right-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-r-cyan-700",
          item_meta: "border-right-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-r-cyan-800",
          item_meta: "border-right-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-r-cyan-900",
          item_meta: "border-right-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-r-cyan-950",
          item_meta: "border-right-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-r-sky-50",
          item_meta: "border-right-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-r-sky-100",
          item_meta: "border-right-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-r-sky-200",
          item_meta: "border-right-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-r-sky-300",
          item_meta: "border-right-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-r-sky-400",
          item_meta: "border-right-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-r-sky-500",
          item_meta: "border-right-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-r-sky-600",
          item_meta: "border-right-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-r-sky-700",
          item_meta: "border-right-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-r-sky-800",
          item_meta: "border-right-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-r-sky-900",
          item_meta: "border-right-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-r-sky-950",
          item_meta: "border-right-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-r-blue-50",
          item_meta: "border-right-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-r-blue-100",
          item_meta: "border-right-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-r-blue-200",
          item_meta: "border-right-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-r-blue-300",
          item_meta: "border-right-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-r-blue-400",
          item_meta: "border-right-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-r-blue-500",
          item_meta: "border-right-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-r-blue-600",
          item_meta: "border-right-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-r-blue-700",
          item_meta: "border-right-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-r-blue-800",
          item_meta: "border-right-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-r-blue-900",
          item_meta: "border-right-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-r-blue-950",
          item_meta: "border-right-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-r-indigo-50",
          item_meta: "border-right-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-r-indigo-100",
          item_meta: "border-right-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-r-indigo-200",
          item_meta: "border-right-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-r-indigo-300",
          item_meta: "border-right-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-r-indigo-400",
          item_meta: "border-right-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-r-indigo-500",
          item_meta: "border-right-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-r-indigo-600",
          item_meta: "border-right-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-r-indigo-700",
          item_meta: "border-right-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-r-indigo-800",
          item_meta: "border-right-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-r-indigo-900",
          item_meta: "border-right-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-r-indigo-950",
          item_meta: "border-right-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-r-violet-50",
          item_meta: "border-right-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-r-violet-100",
          item_meta: "border-right-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-r-violet-200",
          item_meta: "border-right-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-r-violet-300",
          item_meta: "border-right-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-r-violet-400",
          item_meta: "border-right-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-r-violet-500",
          item_meta: "border-right-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-r-violet-600",
          item_meta: "border-right-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-r-violet-700",
          item_meta: "border-right-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-r-violet-800",
          item_meta: "border-right-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-r-violet-900",
          item_meta: "border-right-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-r-violet-950",
          item_meta: "border-right-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-r-purple-50",
          item_meta: "border-right-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-r-purple-100",
          item_meta: "border-right-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-r-purple-200",
          item_meta: "border-right-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-r-purple-300",
          item_meta: "border-right-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-r-purple-400",
          item_meta: "border-right-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-r-purple-500",
          item_meta: "border-right-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-r-purple-600",
          item_meta: "border-right-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-r-purple-700",
          item_meta: "border-right-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-r-purple-800",
          item_meta: "border-right-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-r-purple-900",
          item_meta: "border-right-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-r-purple-950",
          item_meta: "border-right-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-r-fuchsia-50",
          item_meta: "border-right-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-r-fuchsia-100",
          item_meta: "border-right-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-r-fuchsia-200",
          item_meta: "border-right-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-r-fuchsia-300",
          item_meta: "border-right-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-r-fuchsia-400",
          item_meta: "border-right-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-r-fuchsia-500",
          item_meta: "border-right-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-r-fuchsia-600",
          item_meta: "border-right-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-r-fuchsia-700",
          item_meta: "border-right-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-r-fuchsia-800",
          item_meta: "border-right-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-r-fuchsia-900",
          item_meta: "border-right-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-r-fuchsia-950",
          item_meta: "border-right-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-r-pink-50",
          item_meta: "border-right-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-r-pink-100",
          item_meta: "border-right-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-r-pink-200",
          item_meta: "border-right-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-r-pink-300",
          item_meta: "border-right-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-r-pink-400",
          item_meta: "border-right-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-r-pink-500",
          item_meta: "border-right-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-r-pink-600",
          item_meta: "border-right-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-r-pink-700",
          item_meta: "border-right-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-r-pink-800",
          item_meta: "border-right-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-r-pink-900",
          item_meta: "border-right-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-r-pink-950",
          item_meta: "border-right-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-r-rose-50",
          item_meta: "border-right-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-r-rose-100",
          item_meta: "border-right-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-r-rose-200",
          item_meta: "border-right-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-r-rose-300",
          item_meta: "border-right-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-r-rose-400",
          item_meta: "border-right-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-r-rose-500",
          item_meta: "border-right-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-r-rose-600",
          item_meta: "border-right-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-r-rose-700",
          item_meta: "border-right-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-r-rose-800",
          item_meta: "border-right-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-r-rose-900",
          item_meta: "border-right-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-r-rose-950",
          item_meta: "border-right-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-r-slate-50",
          item_meta: "border-right-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-r-slate-100",
          item_meta: "border-right-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-r-slate-200",
          item_meta: "border-right-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-r-slate-300",
          item_meta: "border-right-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-r-slate-400",
          item_meta: "border-right-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-r-slate-500",
          item_meta: "border-right-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-r-slate-600",
          item_meta: "border-right-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-r-slate-700",
          item_meta: "border-right-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-r-slate-800",
          item_meta: "border-right-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-r-slate-900",
          item_meta: "border-right-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-r-slate-950",
          item_meta: "border-right-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-r-gray-50",
          item_meta: "border-right-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-r-gray-100",
          item_meta: "border-right-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-r-gray-200",
          item_meta: "border-right-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-r-gray-300",
          item_meta: "border-right-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-r-gray-400",
          item_meta: "border-right-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-r-gray-500",
          item_meta: "border-right-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-r-gray-600",
          item_meta: "border-right-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-r-gray-700",
          item_meta: "border-right-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-r-gray-800",
          item_meta: "border-right-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-r-gray-900",
          item_meta: "border-right-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-r-gray-950",
          item_meta: "border-right-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-r-zinc-50",
          item_meta: "border-right-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-r-zinc-100",
          item_meta: "border-right-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-r-zinc-200",
          item_meta: "border-right-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-r-zinc-300",
          item_meta: "border-right-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-r-zinc-400",
          item_meta: "border-right-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-r-zinc-500",
          item_meta: "border-right-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-r-zinc-600",
          item_meta: "border-right-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-r-zinc-700",
          item_meta: "border-right-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-r-zinc-800",
          item_meta: "border-right-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-r-zinc-900",
          item_meta: "border-right-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-r-zinc-950",
          item_meta: "border-right-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-r-neutral-50",
          item_meta: "border-right-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-r-neutral-100",
          item_meta: "border-right-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-r-neutral-200",
          item_meta: "border-right-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-r-neutral-300",
          item_meta: "border-right-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-r-neutral-400",
          item_meta: "border-right-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-r-neutral-500",
          item_meta: "border-right-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-r-neutral-600",
          item_meta: "border-right-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-r-neutral-700",
          item_meta: "border-right-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-r-neutral-800",
          item_meta: "border-right-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-r-neutral-900",
          item_meta: "border-right-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-r-neutral-950",
          item_meta: "border-right-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-r-stone-50",
          item_meta: "border-right-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-r-stone-100",
          item_meta: "border-right-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-r-stone-200",
          item_meta: "border-right-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-r-stone-300",
          item_meta: "border-right-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-r-stone-400",
          item_meta: "border-right-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-r-stone-500",
          item_meta: "border-right-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-r-stone-600",
          item_meta: "border-right-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-r-stone-700",
          item_meta: "border-right-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-r-stone-800",
          item_meta: "border-right-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-r-stone-900",
          item_meta: "border-right-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-r-stone-950",
          item_meta: "border-right-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-r-(<custom-property>)",
          item_meta: "border-right-color: var(<custom-property>);",
        },
        {
          item: "border-r-[<value>]",
          item_meta: "border-right-color: <value>;",
        },
        {
          item: "border-b-inherit",
          item_meta: "border-bottom-color: inherit;",
        },
        {
          item: "border-b-current",
          item_meta: "border-bottom-color: currentColor;",
        },
        {
          item: "border-b-transparent",
          item_meta: "border-bottom-color: transparent;",
        },
        {
          item: "border-b-black",
          item_meta: "border-bottom-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-b-white",
          item_meta: "border-bottom-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-b-red-50",
          item_meta: "border-bottom-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-b-red-100",
          item_meta: "border-bottom-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-b-red-200",
          item_meta: "border-bottom-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-b-red-300",
          item_meta: "border-bottom-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-b-red-400",
          item_meta: "border-bottom-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-b-red-500",
          item_meta: "border-bottom-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-b-red-600",
          item_meta: "border-bottom-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-b-red-700",
          item_meta: "border-bottom-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-b-red-800",
          item_meta: "border-bottom-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-b-red-900",
          item_meta: "border-bottom-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-b-red-950",
          item_meta: "border-bottom-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-b-orange-50",
          item_meta: "border-bottom-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-b-orange-100",
          item_meta: "border-bottom-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-b-orange-200",
          item_meta: "border-bottom-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-b-orange-300",
          item_meta: "border-bottom-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-b-orange-400",
          item_meta: "border-bottom-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-b-orange-500",
          item_meta: "border-bottom-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-b-orange-600",
          item_meta: "border-bottom-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-b-orange-700",
          item_meta: "border-bottom-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-b-orange-800",
          item_meta: "border-bottom-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-b-orange-900",
          item_meta: "border-bottom-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-b-orange-950",
          item_meta: "border-bottom-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-b-amber-50",
          item_meta: "border-bottom-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-b-amber-100",
          item_meta: "border-bottom-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-b-amber-200",
          item_meta: "border-bottom-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-b-amber-300",
          item_meta: "border-bottom-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-b-amber-400",
          item_meta: "border-bottom-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-b-amber-500",
          item_meta: "border-bottom-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-b-amber-600",
          item_meta: "border-bottom-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-b-amber-700",
          item_meta: "border-bottom-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-b-amber-800",
          item_meta: "border-bottom-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-b-amber-900",
          item_meta: "border-bottom-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-b-amber-950",
          item_meta: "border-bottom-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-b-yellow-50",
          item_meta: "border-bottom-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-b-yellow-100",
          item_meta: "border-bottom-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-b-yellow-200",
          item_meta: "border-bottom-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-b-yellow-300",
          item_meta: "border-bottom-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-b-yellow-400",
          item_meta: "border-bottom-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-b-yellow-500",
          item_meta: "border-bottom-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-b-yellow-600",
          item_meta: "border-bottom-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-b-yellow-700",
          item_meta: "border-bottom-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-b-yellow-800",
          item_meta: "border-bottom-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-b-yellow-900",
          item_meta: "border-bottom-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-b-yellow-950",
          item_meta: "border-bottom-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-b-lime-50",
          item_meta: "border-bottom-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-b-lime-100",
          item_meta: "border-bottom-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-b-lime-200",
          item_meta: "border-bottom-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-b-lime-300",
          item_meta: "border-bottom-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-b-lime-400",
          item_meta: "border-bottom-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-b-lime-500",
          item_meta: "border-bottom-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-b-lime-600",
          item_meta: "border-bottom-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-b-lime-700",
          item_meta: "border-bottom-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-b-lime-800",
          item_meta: "border-bottom-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-b-lime-900",
          item_meta: "border-bottom-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-b-lime-950",
          item_meta: "border-bottom-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-b-green-50",
          item_meta: "border-bottom-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-b-green-100",
          item_meta: "border-bottom-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-b-green-200",
          item_meta: "border-bottom-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-b-green-300",
          item_meta: "border-bottom-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-b-green-400",
          item_meta: "border-bottom-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-b-green-500",
          item_meta: "border-bottom-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-b-green-600",
          item_meta: "border-bottom-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-b-green-700",
          item_meta: "border-bottom-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-b-green-800",
          item_meta: "border-bottom-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-b-green-900",
          item_meta: "border-bottom-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-b-green-950",
          item_meta: "border-bottom-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-b-emerald-50",
          item_meta: "border-bottom-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-b-emerald-100",
          item_meta: "border-bottom-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-b-emerald-200",
          item_meta: "border-bottom-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-b-emerald-300",
          item_meta: "border-bottom-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-b-emerald-400",
          item_meta: "border-bottom-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-b-emerald-500",
          item_meta: "border-bottom-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-b-emerald-600",
          item_meta: "border-bottom-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-b-emerald-700",
          item_meta: "border-bottom-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-b-emerald-800",
          item_meta: "border-bottom-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-b-emerald-900",
          item_meta: "border-bottom-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-b-emerald-950",
          item_meta: "border-bottom-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-b-teal-50",
          item_meta: "border-bottom-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-b-teal-100",
          item_meta: "border-bottom-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-b-teal-200",
          item_meta: "border-bottom-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-b-teal-300",
          item_meta: "border-bottom-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-b-teal-400",
          item_meta: "border-bottom-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-b-teal-500",
          item_meta: "border-bottom-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-b-teal-600",
          item_meta: "border-bottom-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-b-teal-700",
          item_meta: "border-bottom-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-b-teal-800",
          item_meta: "border-bottom-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-b-teal-900",
          item_meta: "border-bottom-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-b-teal-950",
          item_meta: "border-bottom-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-b-cyan-50",
          item_meta: "border-bottom-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-b-cyan-100",
          item_meta: "border-bottom-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-b-cyan-200",
          item_meta: "border-bottom-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-b-cyan-300",
          item_meta: "border-bottom-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-b-cyan-400",
          item_meta: "border-bottom-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-b-cyan-500",
          item_meta: "border-bottom-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-b-cyan-600",
          item_meta: "border-bottom-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-b-cyan-700",
          item_meta: "border-bottom-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-b-cyan-800",
          item_meta: "border-bottom-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-b-cyan-900",
          item_meta: "border-bottom-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-b-cyan-950",
          item_meta: "border-bottom-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-b-sky-50",
          item_meta: "border-bottom-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-b-sky-100",
          item_meta: "border-bottom-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-b-sky-200",
          item_meta: "border-bottom-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-b-sky-300",
          item_meta: "border-bottom-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-b-sky-400",
          item_meta: "border-bottom-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-b-sky-500",
          item_meta: "border-bottom-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-b-sky-600",
          item_meta: "border-bottom-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-b-sky-700",
          item_meta: "border-bottom-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-b-sky-800",
          item_meta: "border-bottom-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-b-sky-900",
          item_meta: "border-bottom-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-b-sky-950",
          item_meta: "border-bottom-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-b-blue-50",
          item_meta: "border-bottom-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-b-blue-100",
          item_meta: "border-bottom-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-b-blue-200",
          item_meta: "border-bottom-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-b-blue-300",
          item_meta: "border-bottom-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-b-blue-400",
          item_meta: "border-bottom-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-b-blue-500",
          item_meta: "border-bottom-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-b-blue-600",
          item_meta: "border-bottom-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-b-blue-700",
          item_meta: "border-bottom-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-b-blue-800",
          item_meta: "border-bottom-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-b-blue-900",
          item_meta: "border-bottom-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-b-blue-950",
          item_meta: "border-bottom-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-b-indigo-50",
          item_meta: "border-bottom-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-b-indigo-100",
          item_meta: "border-bottom-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-b-indigo-200",
          item_meta: "border-bottom-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-b-indigo-300",
          item_meta: "border-bottom-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-b-indigo-400",
          item_meta: "border-bottom-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-b-indigo-500",
          item_meta: "border-bottom-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-b-indigo-600",
          item_meta: "border-bottom-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-b-indigo-700",
          item_meta: "border-bottom-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-b-indigo-800",
          item_meta: "border-bottom-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-b-indigo-900",
          item_meta: "border-bottom-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-b-indigo-950",
          item_meta: "border-bottom-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-b-violet-50",
          item_meta: "border-bottom-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-b-violet-100",
          item_meta: "border-bottom-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-b-violet-200",
          item_meta: "border-bottom-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-b-violet-300",
          item_meta: "border-bottom-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-b-violet-400",
          item_meta: "border-bottom-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-b-violet-500",
          item_meta: "border-bottom-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-b-violet-600",
          item_meta: "border-bottom-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-b-violet-700",
          item_meta: "border-bottom-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-b-violet-800",
          item_meta: "border-bottom-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-b-violet-900",
          item_meta: "border-bottom-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-b-violet-950",
          item_meta: "border-bottom-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-b-purple-50",
          item_meta: "border-bottom-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-b-purple-100",
          item_meta: "border-bottom-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-b-purple-200",
          item_meta: "border-bottom-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-b-purple-300",
          item_meta: "border-bottom-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-b-purple-400",
          item_meta: "border-bottom-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-b-purple-500",
          item_meta: "border-bottom-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-b-purple-600",
          item_meta: "border-bottom-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-b-purple-700",
          item_meta: "border-bottom-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-b-purple-800",
          item_meta: "border-bottom-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-b-purple-900",
          item_meta: "border-bottom-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-b-purple-950",
          item_meta: "border-bottom-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-b-fuchsia-50",
          item_meta: "border-bottom-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-b-fuchsia-100",
          item_meta: "border-bottom-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-b-fuchsia-200",
          item_meta: "border-bottom-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-b-fuchsia-300",
          item_meta: "border-bottom-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-b-fuchsia-400",
          item_meta: "border-bottom-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-b-fuchsia-500",
          item_meta: "border-bottom-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-b-fuchsia-600",
          item_meta: "border-bottom-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-b-fuchsia-700",
          item_meta: "border-bottom-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-b-fuchsia-800",
          item_meta: "border-bottom-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-b-fuchsia-900",
          item_meta: "border-bottom-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-b-fuchsia-950",
          item_meta: "border-bottom-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-b-pink-50",
          item_meta: "border-bottom-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-b-pink-100",
          item_meta: "border-bottom-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-b-pink-200",
          item_meta: "border-bottom-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-b-pink-300",
          item_meta: "border-bottom-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-b-pink-400",
          item_meta: "border-bottom-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-b-pink-500",
          item_meta: "border-bottom-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-b-pink-600",
          item_meta: "border-bottom-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-b-pink-700",
          item_meta: "border-bottom-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-b-pink-800",
          item_meta: "border-bottom-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-b-pink-900",
          item_meta: "border-bottom-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-b-pink-950",
          item_meta: "border-bottom-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-b-rose-50",
          item_meta: "border-bottom-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-b-rose-100",
          item_meta: "border-bottom-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-b-rose-200",
          item_meta: "border-bottom-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-b-rose-300",
          item_meta: "border-bottom-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-b-rose-400",
          item_meta: "border-bottom-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-b-rose-500",
          item_meta: "border-bottom-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-b-rose-600",
          item_meta: "border-bottom-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-b-rose-700",
          item_meta: "border-bottom-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-b-rose-800",
          item_meta: "border-bottom-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-b-rose-900",
          item_meta: "border-bottom-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-b-rose-950",
          item_meta: "border-bottom-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-b-slate-50",
          item_meta: "border-bottom-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-b-slate-100",
          item_meta: "border-bottom-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-b-slate-200",
          item_meta: "border-bottom-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-b-slate-300",
          item_meta: "border-bottom-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-b-slate-400",
          item_meta: "border-bottom-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-b-slate-500",
          item_meta: "border-bottom-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-b-slate-600",
          item_meta: "border-bottom-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-b-slate-700",
          item_meta: "border-bottom-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-b-slate-800",
          item_meta: "border-bottom-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-b-slate-900",
          item_meta: "border-bottom-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-b-slate-950",
          item_meta: "border-bottom-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-b-gray-50",
          item_meta: "border-bottom-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-b-gray-100",
          item_meta: "border-bottom-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-b-gray-200",
          item_meta: "border-bottom-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-b-gray-300",
          item_meta: "border-bottom-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-b-gray-400",
          item_meta: "border-bottom-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-b-gray-500",
          item_meta: "border-bottom-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-b-gray-600",
          item_meta: "border-bottom-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-b-gray-700",
          item_meta: "border-bottom-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-b-gray-800",
          item_meta: "border-bottom-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-b-gray-900",
          item_meta: "border-bottom-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-b-gray-950",
          item_meta: "border-bottom-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-b-zinc-50",
          item_meta: "border-bottom-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-b-zinc-100",
          item_meta: "border-bottom-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-b-zinc-200",
          item_meta: "border-bottom-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-b-zinc-300",
          item_meta: "border-bottom-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-b-zinc-400",
          item_meta: "border-bottom-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-b-zinc-500",
          item_meta: "border-bottom-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-b-zinc-600",
          item_meta: "border-bottom-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-b-zinc-700",
          item_meta: "border-bottom-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-b-zinc-800",
          item_meta: "border-bottom-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-b-zinc-900",
          item_meta: "border-bottom-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-b-zinc-950",
          item_meta: "border-bottom-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-b-neutral-50",
          item_meta: "border-bottom-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-b-neutral-100",
          item_meta: "border-bottom-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-b-neutral-200",
          item_meta: "border-bottom-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-b-neutral-300",
          item_meta: "border-bottom-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-b-neutral-400",
          item_meta: "border-bottom-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-b-neutral-500",
          item_meta: "border-bottom-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-b-neutral-600",
          item_meta: "border-bottom-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-b-neutral-700",
          item_meta: "border-bottom-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-b-neutral-800",
          item_meta: "border-bottom-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-b-neutral-900",
          item_meta: "border-bottom-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-b-neutral-950",
          item_meta: "border-bottom-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-b-stone-50",
          item_meta: "border-bottom-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-b-stone-100",
          item_meta: "border-bottom-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-b-stone-200",
          item_meta: "border-bottom-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-b-stone-300",
          item_meta: "border-bottom-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-b-stone-400",
          item_meta: "border-bottom-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-b-stone-500",
          item_meta: "border-bottom-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-b-stone-600",
          item_meta: "border-bottom-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-b-stone-700",
          item_meta: "border-bottom-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-b-stone-800",
          item_meta: "border-bottom-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-b-stone-900",
          item_meta: "border-bottom-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-b-stone-950",
          item_meta: "border-bottom-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-b-(<custom-property>)",
          item_meta: "border-bottom-color: var(<custom-property>);",
        },
        {
          item: "border-b-[<value>]",
          item_meta: "border-bottom-color: <value>;",
        },
        {
          item: "border-l-inherit",
          item_meta: "border-left-color: inherit;",
        },
        {
          item: "border-l-current",
          item_meta: "border-left-color: currentColor;",
        },
        {
          item: "border-l-transparent",
          item_meta: "border-left-color: transparent;",
        },
        {
          item: "border-l-black",
          item_meta: "border-left-color: var(--color-black); /* #000 */",
        },
        {
          item: "border-l-white",
          item_meta: "border-left-color: var(--color-white); /* #fff */",
        },
        {
          item: "border-l-red-50",
          item_meta: "border-left-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "border-l-red-100",
          item_meta: "border-left-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "border-l-red-200",
          item_meta: "border-left-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "border-l-red-300",
          item_meta: "border-left-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "border-l-red-400",
          item_meta: "border-left-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "border-l-red-500",
          item_meta: "border-left-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "border-l-red-600",
          item_meta: "border-left-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "border-l-red-700",
          item_meta: "border-left-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "border-l-red-800",
          item_meta: "border-left-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "border-l-red-900",
          item_meta: "border-left-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "border-l-red-950",
          item_meta: "border-left-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "border-l-orange-50",
          item_meta: "border-left-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "border-l-orange-100",
          item_meta: "border-left-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "border-l-orange-200",
          item_meta: "border-left-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "border-l-orange-300",
          item_meta: "border-left-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "border-l-orange-400",
          item_meta: "border-left-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "border-l-orange-500",
          item_meta: "border-left-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "border-l-orange-600",
          item_meta: "border-left-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "border-l-orange-700",
          item_meta: "border-left-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "border-l-orange-800",
          item_meta: "border-left-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "border-l-orange-900",
          item_meta: "border-left-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "border-l-orange-950",
          item_meta: "border-left-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "border-l-amber-50",
          item_meta: "border-left-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "border-l-amber-100",
          item_meta: "border-left-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "border-l-amber-200",
          item_meta: "border-left-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "border-l-amber-300",
          item_meta: "border-left-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "border-l-amber-400",
          item_meta: "border-left-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "border-l-amber-500",
          item_meta: "border-left-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "border-l-amber-600",
          item_meta: "border-left-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "border-l-amber-700",
          item_meta: "border-left-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "border-l-amber-800",
          item_meta: "border-left-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "border-l-amber-900",
          item_meta: "border-left-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "border-l-amber-950",
          item_meta: "border-left-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "border-l-yellow-50",
          item_meta: "border-left-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "border-l-yellow-100",
          item_meta: "border-left-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "border-l-yellow-200",
          item_meta: "border-left-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "border-l-yellow-300",
          item_meta: "border-left-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "border-l-yellow-400",
          item_meta: "border-left-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "border-l-yellow-500",
          item_meta: "border-left-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "border-l-yellow-600",
          item_meta: "border-left-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "border-l-yellow-700",
          item_meta: "border-left-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "border-l-yellow-800",
          item_meta: "border-left-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "border-l-yellow-900",
          item_meta: "border-left-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "border-l-yellow-950",
          item_meta: "border-left-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "border-l-lime-50",
          item_meta: "border-left-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "border-l-lime-100",
          item_meta: "border-left-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "border-l-lime-200",
          item_meta: "border-left-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "border-l-lime-300",
          item_meta: "border-left-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "border-l-lime-400",
          item_meta: "border-left-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "border-l-lime-500",
          item_meta: "border-left-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "border-l-lime-600",
          item_meta: "border-left-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "border-l-lime-700",
          item_meta: "border-left-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "border-l-lime-800",
          item_meta: "border-left-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "border-l-lime-900",
          item_meta: "border-left-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "border-l-lime-950",
          item_meta: "border-left-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "border-l-green-50",
          item_meta: "border-left-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "border-l-green-100",
          item_meta: "border-left-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "border-l-green-200",
          item_meta: "border-left-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "border-l-green-300",
          item_meta: "border-left-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "border-l-green-400",
          item_meta: "border-left-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "border-l-green-500",
          item_meta: "border-left-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "border-l-green-600",
          item_meta: "border-left-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "border-l-green-700",
          item_meta: "border-left-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "border-l-green-800",
          item_meta: "border-left-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "border-l-green-900",
          item_meta: "border-left-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "border-l-green-950",
          item_meta: "border-left-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "border-l-emerald-50",
          item_meta: "border-left-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "border-l-emerald-100",
          item_meta: "border-left-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "border-l-emerald-200",
          item_meta: "border-left-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "border-l-emerald-300",
          item_meta: "border-left-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "border-l-emerald-400",
          item_meta: "border-left-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "border-l-emerald-500",
          item_meta: "border-left-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "border-l-emerald-600",
          item_meta: "border-left-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "border-l-emerald-700",
          item_meta: "border-left-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "border-l-emerald-800",
          item_meta: "border-left-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "border-l-emerald-900",
          item_meta: "border-left-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "border-l-emerald-950",
          item_meta: "border-left-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "border-l-teal-50",
          item_meta: "border-left-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "border-l-teal-100",
          item_meta: "border-left-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "border-l-teal-200",
          item_meta: "border-left-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "border-l-teal-300",
          item_meta: "border-left-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "border-l-teal-400",
          item_meta: "border-left-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "border-l-teal-500",
          item_meta: "border-left-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "border-l-teal-600",
          item_meta: "border-left-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "border-l-teal-700",
          item_meta: "border-left-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "border-l-teal-800",
          item_meta: "border-left-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "border-l-teal-900",
          item_meta: "border-left-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "border-l-teal-950",
          item_meta: "border-left-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "border-l-cyan-50",
          item_meta: "border-left-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "border-l-cyan-100",
          item_meta: "border-left-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "border-l-cyan-200",
          item_meta: "border-left-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "border-l-cyan-300",
          item_meta: "border-left-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "border-l-cyan-400",
          item_meta: "border-left-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "border-l-cyan-500",
          item_meta: "border-left-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "border-l-cyan-600",
          item_meta: "border-left-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "border-l-cyan-700",
          item_meta: "border-left-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "border-l-cyan-800",
          item_meta: "border-left-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "border-l-cyan-900",
          item_meta: "border-left-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "border-l-cyan-950",
          item_meta: "border-left-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "border-l-sky-50",
          item_meta: "border-left-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "border-l-sky-100",
          item_meta: "border-left-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "border-l-sky-200",
          item_meta: "border-left-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "border-l-sky-300",
          item_meta: "border-left-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "border-l-sky-400",
          item_meta: "border-left-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "border-l-sky-500",
          item_meta: "border-left-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "border-l-sky-600",
          item_meta: "border-left-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "border-l-sky-700",
          item_meta: "border-left-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "border-l-sky-800",
          item_meta: "border-left-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "border-l-sky-900",
          item_meta: "border-left-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "border-l-sky-950",
          item_meta: "border-left-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "border-l-blue-50",
          item_meta: "border-left-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "border-l-blue-100",
          item_meta: "border-left-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "border-l-blue-200",
          item_meta: "border-left-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "border-l-blue-300",
          item_meta: "border-left-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "border-l-blue-400",
          item_meta: "border-left-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "border-l-blue-500",
          item_meta: "border-left-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "border-l-blue-600",
          item_meta: "border-left-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "border-l-blue-700",
          item_meta: "border-left-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "border-l-blue-800",
          item_meta: "border-left-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "border-l-blue-900",
          item_meta: "border-left-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "border-l-blue-950",
          item_meta: "border-left-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "border-l-indigo-50",
          item_meta: "border-left-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "border-l-indigo-100",
          item_meta: "border-left-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "border-l-indigo-200",
          item_meta: "border-left-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "border-l-indigo-300",
          item_meta: "border-left-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "border-l-indigo-400",
          item_meta: "border-left-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "border-l-indigo-500",
          item_meta: "border-left-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "border-l-indigo-600",
          item_meta: "border-left-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "border-l-indigo-700",
          item_meta: "border-left-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "border-l-indigo-800",
          item_meta: "border-left-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "border-l-indigo-900",
          item_meta: "border-left-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "border-l-indigo-950",
          item_meta: "border-left-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "border-l-violet-50",
          item_meta: "border-left-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "border-l-violet-100",
          item_meta: "border-left-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "border-l-violet-200",
          item_meta: "border-left-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "border-l-violet-300",
          item_meta: "border-left-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "border-l-violet-400",
          item_meta: "border-left-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "border-l-violet-500",
          item_meta: "border-left-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "border-l-violet-600",
          item_meta: "border-left-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "border-l-violet-700",
          item_meta: "border-left-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "border-l-violet-800",
          item_meta: "border-left-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "border-l-violet-900",
          item_meta: "border-left-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "border-l-violet-950",
          item_meta: "border-left-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "border-l-purple-50",
          item_meta: "border-left-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "border-l-purple-100",
          item_meta: "border-left-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "border-l-purple-200",
          item_meta: "border-left-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "border-l-purple-300",
          item_meta: "border-left-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "border-l-purple-400",
          item_meta: "border-left-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "border-l-purple-500",
          item_meta: "border-left-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "border-l-purple-600",
          item_meta: "border-left-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "border-l-purple-700",
          item_meta: "border-left-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "border-l-purple-800",
          item_meta: "border-left-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "border-l-purple-900",
          item_meta: "border-left-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "border-l-purple-950",
          item_meta: "border-left-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "border-l-fuchsia-50",
          item_meta: "border-left-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "border-l-fuchsia-100",
          item_meta: "border-left-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "border-l-fuchsia-200",
          item_meta: "border-left-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "border-l-fuchsia-300",
          item_meta: "border-left-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "border-l-fuchsia-400",
          item_meta: "border-left-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "border-l-fuchsia-500",
          item_meta: "border-left-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "border-l-fuchsia-600",
          item_meta: "border-left-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "border-l-fuchsia-700",
          item_meta: "border-left-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "border-l-fuchsia-800",
          item_meta: "border-left-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "border-l-fuchsia-900",
          item_meta: "border-left-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "border-l-fuchsia-950",
          item_meta: "border-left-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "border-l-pink-50",
          item_meta: "border-left-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "border-l-pink-100",
          item_meta: "border-left-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "border-l-pink-200",
          item_meta: "border-left-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "border-l-pink-300",
          item_meta: "border-left-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "border-l-pink-400",
          item_meta: "border-left-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "border-l-pink-500",
          item_meta: "border-left-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "border-l-pink-600",
          item_meta: "border-left-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "border-l-pink-700",
          item_meta: "border-left-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "border-l-pink-800",
          item_meta: "border-left-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "border-l-pink-900",
          item_meta: "border-left-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "border-l-pink-950",
          item_meta: "border-left-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "border-l-rose-50",
          item_meta: "border-left-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "border-l-rose-100",
          item_meta: "border-left-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "border-l-rose-200",
          item_meta: "border-left-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "border-l-rose-300",
          item_meta: "border-left-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "border-l-rose-400",
          item_meta: "border-left-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "border-l-rose-500",
          item_meta: "border-left-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "border-l-rose-600",
          item_meta: "border-left-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "border-l-rose-700",
          item_meta: "border-left-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "border-l-rose-800",
          item_meta: "border-left-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "border-l-rose-900",
          item_meta: "border-left-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "border-l-rose-950",
          item_meta: "border-left-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "border-l-slate-50",
          item_meta: "border-left-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "border-l-slate-100",
          item_meta: "border-left-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "border-l-slate-200",
          item_meta: "border-left-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "border-l-slate-300",
          item_meta: "border-left-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "border-l-slate-400",
          item_meta: "border-left-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "border-l-slate-500",
          item_meta: "border-left-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "border-l-slate-600",
          item_meta: "border-left-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "border-l-slate-700",
          item_meta: "border-left-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "border-l-slate-800",
          item_meta: "border-left-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "border-l-slate-900",
          item_meta: "border-left-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "border-l-slate-950",
          item_meta: "border-left-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "border-l-gray-50",
          item_meta: "border-left-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "border-l-gray-100",
          item_meta: "border-left-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "border-l-gray-200",
          item_meta: "border-left-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "border-l-gray-300",
          item_meta: "border-left-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "border-l-gray-400",
          item_meta: "border-left-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "border-l-gray-500",
          item_meta: "border-left-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "border-l-gray-600",
          item_meta: "border-left-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "border-l-gray-700",
          item_meta: "border-left-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "border-l-gray-800",
          item_meta: "border-left-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "border-l-gray-900",
          item_meta: "border-left-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "border-l-gray-950",
          item_meta: "border-left-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "border-l-zinc-50",
          item_meta: "border-left-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-l-zinc-100",
          item_meta: "border-left-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "border-l-zinc-200",
          item_meta: "border-left-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "border-l-zinc-300",
          item_meta: "border-left-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "border-l-zinc-400",
          item_meta: "border-left-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "border-l-zinc-500",
          item_meta: "border-left-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "border-l-zinc-600",
          item_meta: "border-left-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "border-l-zinc-700",
          item_meta: "border-left-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "border-l-zinc-800",
          item_meta: "border-left-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "border-l-zinc-900",
          item_meta: "border-left-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "border-l-zinc-950",
          item_meta: "border-left-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "border-l-neutral-50",
          item_meta: "border-left-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "border-l-neutral-100",
          item_meta: "border-left-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "border-l-neutral-200",
          item_meta: "border-left-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "border-l-neutral-300",
          item_meta: "border-left-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "border-l-neutral-400",
          item_meta: "border-left-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "border-l-neutral-500",
          item_meta: "border-left-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "border-l-neutral-600",
          item_meta: "border-left-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "border-l-neutral-700",
          item_meta: "border-left-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "border-l-neutral-800",
          item_meta: "border-left-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "border-l-neutral-900",
          item_meta: "border-left-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "border-l-neutral-950",
          item_meta: "border-left-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "border-l-stone-50",
          item_meta: "border-left-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "border-l-stone-100",
          item_meta: "border-left-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "border-l-stone-200",
          item_meta: "border-left-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "border-l-stone-300",
          item_meta: "border-left-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "border-l-stone-400",
          item_meta: "border-left-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "border-l-stone-500",
          item_meta: "border-left-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "border-l-stone-600",
          item_meta: "border-left-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "border-l-stone-700",
          item_meta: "border-left-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "border-l-stone-800",
          item_meta: "border-left-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "border-l-stone-900",
          item_meta: "border-left-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "border-l-stone-950",
          item_meta: "border-left-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "border-l-(<custom-property>)",
          item_meta: "border-left-color: var(<custom-property>);",
        },
        {
          item: "border-l-[<value>]",
          item_meta: "border-left-color: <value>;",
        },
        {
          item: "divide-inherit",
          item_meta: "& > :not(:last-child) { border-color: inherit; }",
        },
        {
          item: "divide-current",
          item_meta: "& > :not(:last-child) { border-color: currentColor; }",
        },
        {
          item: "divide-transparent",
          item_meta: "& > :not(:last-child) { border-color: transparent; }",
        },
        {
          item: "divide-black",
          item_meta: "& > :not(:last-child) { border-color: var(--color-black); /* #000 */ }",
        },
        {
          item: "divide-white",
          item_meta: "& > :not(:last-child) { border-color: var(--color-white); /* #fff */ }",
        },
        {
          item: "divide-red-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */ }",
        },
        {
          item: "divide-red-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */ }",
        },
        {
          item: "divide-red-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */ }",
        },
        {
          item: "divide-red-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */ }",
        },
        {
          item: "divide-red-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */ }",
        },
        {
          item: "divide-red-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */ }",
        },
        {
          item: "divide-red-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */ }",
        },
        {
          item: "divide-red-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */ }",
        },
        {
          item: "divide-red-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */ }",
        },
        {
          item: "divide-red-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */ }",
        },
        {
          item: "divide-red-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */ }",
        },
        {
          item: "divide-orange-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */ }",
        },
        {
          item: "divide-orange-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */ }",
        },
        {
          item: "divide-orange-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */ }",
        },
        {
          item: "divide-orange-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */ }",
        },
        {
          item: "divide-orange-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */ }",
        },
        {
          item: "divide-orange-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */ }",
        },
        {
          item: "divide-orange-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */ }",
        },
        {
          item: "divide-orange-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */ }",
        },
        {
          item: "divide-orange-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */ }",
        },
        {
          item: "divide-orange-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */ }",
        },
        {
          item: "divide-orange-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */ }",
        },
        {
          item: "divide-amber-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */ }",
        },
        {
          item: "divide-amber-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */ }",
        },
        {
          item: "divide-amber-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */ }",
        },
        {
          item: "divide-amber-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */ }",
        },
        {
          item: "divide-amber-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */ }",
        },
        {
          item: "divide-amber-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */ }",
        },
        {
          item: "divide-amber-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */ }",
        },
        {
          item: "divide-amber-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */ }",
        },
        {
          item: "divide-amber-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */ }",
        },
        {
          item: "divide-amber-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */ }",
        },
        {
          item: "divide-amber-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */ }",
        },
        {
          item: "divide-yellow-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */ }",
        },
        {
          item: "divide-yellow-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */ }",
        },
        {
          item: "divide-yellow-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */ }",
        },
        {
          item: "divide-yellow-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */ }",
        },
        {
          item: "divide-yellow-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */ }",
        },
        {
          item: "divide-yellow-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */ }",
        },
        {
          item: "divide-yellow-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */ }",
        },
        {
          item: "divide-yellow-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */ }",
        },
        {
          item: "divide-yellow-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */ }",
        },
        {
          item: "divide-yellow-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */ }",
        },
        {
          item: "divide-yellow-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */ }",
        },
        {
          item: "divide-lime-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */ }",
        },
        {
          item: "divide-lime-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */ }",
        },
        {
          item: "divide-lime-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */ }",
        },
        {
          item: "divide-lime-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */ }",
        },
        {
          item: "divide-lime-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */ }",
        },
        {
          item: "divide-lime-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */ }",
        },
        {
          item: "divide-lime-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */ }",
        },
        {
          item: "divide-lime-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */ }",
        },
        {
          item: "divide-lime-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */ }",
        },
        {
          item: "divide-lime-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */ }",
        },
        {
          item: "divide-lime-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */ }",
        },
        {
          item: "divide-green-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */ }",
        },
        {
          item: "divide-green-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */ }",
        },
        {
          item: "divide-green-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */ }",
        },
        {
          item: "divide-green-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */ }",
        },
        {
          item: "divide-green-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */ }",
        },
        {
          item: "divide-green-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */ }",
        },
        {
          item: "divide-green-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */ }",
        },
        {
          item: "divide-green-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */ }",
        },
        {
          item: "divide-green-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */ }",
        },
        {
          item: "divide-green-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */ }",
        },
        {
          item: "divide-green-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */ }",
        },
        {
          item: "divide-emerald-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */ }",
        },
        {
          item: "divide-emerald-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */ }",
        },
        {
          item: "divide-emerald-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */ }",
        },
        {
          item: "divide-emerald-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */ }",
        },
        {
          item: "divide-emerald-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */ }",
        },
        {
          item: "divide-emerald-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */ }",
        },
        {
          item: "divide-emerald-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */ }",
        },
        {
          item: "divide-emerald-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */ }",
        },
        {
          item: "divide-emerald-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */ }",
        },
        {
          item: "divide-emerald-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */ }",
        },
        {
          item: "divide-emerald-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */ }",
        },
        {
          item: "divide-teal-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */ }",
        },
        {
          item: "divide-teal-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */ }",
        },
        {
          item: "divide-teal-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */ }",
        },
        {
          item: "divide-teal-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */ }",
        },
        {
          item: "divide-teal-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */ }",
        },
        {
          item: "divide-teal-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */ }",
        },
        {
          item: "divide-teal-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */ }",
        },
        {
          item: "divide-teal-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */ }",
        },
        {
          item: "divide-teal-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */ }",
        },
        {
          item: "divide-teal-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */ }",
        },
        {
          item: "divide-teal-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */ }",
        },
        {
          item: "divide-cyan-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */ }",
        },
        {
          item: "divide-cyan-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */ }",
        },
        {
          item: "divide-cyan-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */ }",
        },
        {
          item: "divide-cyan-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */ }",
        },
        {
          item: "divide-cyan-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */ }",
        },
        {
          item: "divide-cyan-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */ }",
        },
        {
          item: "divide-cyan-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */ }",
        },
        {
          item: "divide-cyan-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */ }",
        },
        {
          item: "divide-cyan-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */ }",
        },
        {
          item: "divide-cyan-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */ }",
        },
        {
          item: "divide-cyan-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */ }",
        },
        {
          item: "divide-sky-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */ }",
        },
        {
          item: "divide-sky-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */ }",
        },
        {
          item: "divide-sky-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */ }",
        },
        {
          item: "divide-sky-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */ }",
        },
        {
          item: "divide-sky-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */ }",
        },
        {
          item: "divide-sky-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */ }",
        },
        {
          item: "divide-sky-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */ }",
        },
        {
          item: "divide-sky-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */ }",
        },
        {
          item: "divide-sky-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */ }",
        },
        {
          item: "divide-sky-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */ }",
        },
        {
          item: "divide-sky-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */ }",
        },
        {
          item: "divide-blue-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */ }",
        },
        {
          item: "divide-blue-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */ }",
        },
        {
          item: "divide-blue-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */ }",
        },
        {
          item: "divide-blue-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */ }",
        },
        {
          item: "divide-blue-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */ }",
        },
        {
          item: "divide-blue-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */ }",
        },
        {
          item: "divide-blue-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */ }",
        },
        {
          item: "divide-blue-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */ }",
        },
        {
          item: "divide-blue-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */ }",
        },
        {
          item: "divide-blue-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */ }",
        },
        {
          item: "divide-blue-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */ }",
        },
        {
          item: "divide-indigo-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */ }",
        },
        {
          item: "divide-indigo-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */ }",
        },
        {
          item: "divide-indigo-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */ }",
        },
        {
          item: "divide-indigo-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */ }",
        },
        {
          item: "divide-indigo-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */ }",
        },
        {
          item: "divide-indigo-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */ }",
        },
        {
          item: "divide-indigo-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */ }",
        },
        {
          item: "divide-indigo-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */ }",
        },
        {
          item: "divide-indigo-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */ }",
        },
        {
          item: "divide-indigo-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */ }",
        },
        {
          item: "divide-indigo-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */ }",
        },
        {
          item: "divide-violet-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */ }",
        },
        {
          item: "divide-violet-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */ }",
        },
        {
          item: "divide-violet-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */ }",
        },
        {
          item: "divide-violet-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */ }",
        },
        {
          item: "divide-violet-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */ }",
        },
        {
          item: "divide-violet-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */ }",
        },
        {
          item: "divide-violet-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */ }",
        },
        {
          item: "divide-violet-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */ }",
        },
        {
          item: "divide-violet-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */ }",
        },
        {
          item: "divide-violet-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */ }",
        },
        {
          item: "divide-violet-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */ }",
        },
        {
          item: "divide-purple-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */ }",
        },
        {
          item: "divide-purple-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */ }",
        },
        {
          item: "divide-purple-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */ }",
        },
        {
          item: "divide-purple-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */ }",
        },
        {
          item: "divide-purple-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */ }",
        },
        {
          item: "divide-purple-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */ }",
        },
        {
          item: "divide-purple-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */ }",
        },
        {
          item: "divide-purple-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */ }",
        },
        {
          item: "divide-purple-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */ }",
        },
        {
          item: "divide-purple-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */ }",
        },
        {
          item: "divide-purple-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */ }",
        },
        {
          item: "divide-fuchsia-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */ }",
        },
        {
          item: "divide-fuchsia-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */ }",
        },
        {
          item: "divide-fuchsia-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */ }",
        },
        {
          item: "divide-fuchsia-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */ }",
        },
        {
          item: "divide-fuchsia-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */ }",
        },
        {
          item: "divide-fuchsia-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */ }",
        },
        {
          item: "divide-fuchsia-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */ }",
        },
        {
          item: "divide-fuchsia-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */ }",
        },
        {
          item: "divide-fuchsia-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */ }",
        },
        {
          item: "divide-fuchsia-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */ }",
        },
        {
          item: "divide-fuchsia-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */ }",
        },
        {
          item: "divide-pink-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */ }",
        },
        {
          item: "divide-pink-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */ }",
        },
        {
          item: "divide-pink-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */ }",
        },
        {
          item: "divide-pink-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */ }",
        },
        {
          item: "divide-pink-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */ }",
        },
        {
          item: "divide-pink-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */ }",
        },
        {
          item: "divide-pink-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */ }",
        },
        {
          item: "divide-pink-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */ }",
        },
        {
          item: "divide-pink-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */ }",
        },
        {
          item: "divide-pink-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */ }",
        },
        {
          item: "divide-pink-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */ }",
        },
        {
          item: "divide-rose-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */ }",
        },
        {
          item: "divide-rose-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */ }",
        },
        {
          item: "divide-rose-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */ }",
        },
        {
          item: "divide-rose-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */ }",
        },
        {
          item: "divide-rose-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */ }",
        },
        {
          item: "divide-rose-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */ }",
        },
        {
          item: "divide-rose-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */ }",
        },
        {
          item: "divide-rose-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */ }",
        },
        {
          item: "divide-rose-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */ }",
        },
        {
          item: "divide-rose-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */ }",
        },
        {
          item: "divide-rose-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */ }",
        },
        {
          item: "divide-slate-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */ }",
        },
        {
          item: "divide-slate-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */ }",
        },
        {
          item: "divide-slate-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */ }",
        },
        {
          item: "divide-slate-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */ }",
        },
        {
          item: "divide-slate-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */ }",
        },
        {
          item: "divide-slate-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */ }",
        },
        {
          item: "divide-slate-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */ }",
        },
        {
          item: "divide-slate-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */ }",
        },
        {
          item: "divide-slate-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */ }",
        },
        {
          item: "divide-slate-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */ }",
        },
        {
          item: "divide-slate-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */ }",
        },
        {
          item: "divide-gray-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */ }",
        },
        {
          item: "divide-gray-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */ }",
        },
        {
          item: "divide-gray-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */ }",
        },
        {
          item: "divide-gray-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */ }",
        },
        {
          item: "divide-gray-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */ }",
        },
        {
          item: "divide-gray-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */ }",
        },
        {
          item: "divide-gray-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */ }",
        },
        {
          item: "divide-gray-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */ }",
        },
        {
          item: "divide-gray-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */ }",
        },
        {
          item: "divide-gray-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */ }",
        },
        {
          item: "divide-gray-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */ }",
        },
        {
          item: "divide-zinc-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */ }",
        },
        {
          item: "divide-zinc-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */ }",
        },
        {
          item: "divide-zinc-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */ }",
        },
        {
          item: "divide-zinc-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */ }",
        },
        {
          item: "divide-zinc-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */ }",
        },
        {
          item: "divide-zinc-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */ }",
        },
        {
          item: "divide-zinc-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */ }",
        },
        {
          item: "divide-zinc-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */ }",
        },
        {
          item: "divide-zinc-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */ }",
        },
        {
          item: "divide-zinc-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */ }",
        },
        {
          item: "divide-zinc-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */ }",
        },
        {
          item: "divide-neutral-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */ }",
        },
        {
          item: "divide-neutral-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-100); /* oklch(97% 0 0) */ }",
        },
        {
          item: "divide-neutral-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */ }",
        },
        {
          item: "divide-neutral-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-300); /* oklch(87% 0 0) */ }",
        },
        {
          item: "divide-neutral-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */ }",
        },
        {
          item: "divide-neutral-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */ }",
        },
        {
          item: "divide-neutral-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */ }",
        },
        {
          item: "divide-neutral-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */ }",
        },
        {
          item: "divide-neutral-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */ }",
        },
        {
          item: "divide-neutral-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */ }",
        },
        {
          item: "divide-neutral-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */ }",
        },
        {
          item: "divide-stone-50",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */ }",
        },
        {
          item: "divide-stone-100",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */ }",
        },
        {
          item: "divide-stone-200",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */ }",
        },
        {
          item: "divide-stone-300",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */ }",
        },
        {
          item: "divide-stone-400",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */ }",
        },
        {
          item: "divide-stone-500",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */ }",
        },
        {
          item: "divide-stone-600",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */ }",
        },
        {
          item: "divide-stone-700",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */ }",
        },
        {
          item: "divide-stone-800",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */ }",
        },
        {
          item: "divide-stone-900",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */ }",
        },
        {
          item: "divide-stone-950",
          item_meta: "& > :not(:last-child) { border-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */ }",
        },
        {
          item: "divide-(<custom-property>)",
          item_meta: "& > :not(:last-child) { border-color: var(<custom-property>); }",
        },
        {
          item: "divide-[<value>]",
          item_meta: "& > :not(:last-child) { border-color: <value>; }",
        }
      ]
    },
    {
      group: "border-style",
      classes: [
        {
          item: "border-solid",
          item_meta: "border-style: solid;",
        },
        {
          item: "border-dashed",
          item_meta: "border-style: dashed;",
        },
        {
          item: "border-dotted",
          item_meta: "border-style: dotted;",
        },
        {
          item: "border-double",
          item_meta: "border-style: double;",
        },
        {
          item: "border-hidden",
          item_meta: "border-style: hidden;",
        },
        {
          item: "border-none",
          item_meta: "border-style: none;",
        },
        {
          item: "divide-solid",
          item_meta: "& > :not(:last-child) { border-style: solid; }",
        },
        {
          item: "divide-dashed",
          item_meta: "& > :not(:last-child) { border-style: dashed; }",
        },
        {
          item: "divide-dotted",
          item_meta: "& > :not(:last-child) { border-style: dotted; }",
        },
        {
          item: "divide-double",
          item_meta: "& > :not(:last-child) { border-style: double; }",
        },
        {
          item: "divide-hidden",
          item_meta: "& > :not(:last-child) { border-style: hidden; }",
        },
        {
          item: "divide-none",
          item_meta: "& > :not(:last-child) { border-style: none; }",
        }
      ]
    },
    {
      group: "outline-width",
      classes: [
        {
          item: "outline",
          item_meta: "outline-width: 1px;",
        },
        {
          item: "outline-<number>",
          item_meta: "outline-width: <number>px;",
        },
        {
          item: "outline-(length:<custom-property>)",
          item_meta: "outline-width: var(<custom-property>);",
        },
        {
          item: "outline-[<value>]",
          item_meta: "outline-width: <value>;",
        }
      ]
    },
    {
      group: "outline-color",
      classes: [
        {
          item: "outline-inherit",
          item_meta: "outline-color: inherit;",
        },
        {
          item: "outline-current",
          item_meta: "outline-color: currentColor;",
        },
        {
          item: "outline-transparent",
          item_meta: "outline-color: transparent;",
        },
        {
          item: "outline-black",
          item_meta: "outline-color: var(--color-black); /* #000 */",
        },
        {
          item: "outline-white",
          item_meta: "outline-color: var(--color-white); /* #fff */",
        },
        {
          item: "outline-red-50",
          item_meta: "outline-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "outline-red-100",
          item_meta: "outline-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "outline-red-200",
          item_meta: "outline-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "outline-red-300",
          item_meta: "outline-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "outline-red-400",
          item_meta: "outline-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "outline-red-500",
          item_meta: "outline-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "outline-red-600",
          item_meta: "outline-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "outline-red-700",
          item_meta: "outline-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "outline-red-800",
          item_meta: "outline-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "outline-red-900",
          item_meta: "outline-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "outline-red-950",
          item_meta: "outline-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "outline-orange-50",
          item_meta: "outline-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "outline-orange-100",
          item_meta: "outline-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "outline-orange-200",
          item_meta: "outline-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "outline-orange-300",
          item_meta: "outline-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "outline-orange-400",
          item_meta: "outline-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "outline-orange-500",
          item_meta: "outline-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "outline-orange-600",
          item_meta: "outline-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "outline-orange-700",
          item_meta: "outline-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "outline-orange-800",
          item_meta: "outline-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "outline-orange-900",
          item_meta: "outline-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "outline-orange-950",
          item_meta: "outline-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "outline-amber-50",
          item_meta: "outline-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "outline-amber-100",
          item_meta: "outline-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "outline-amber-200",
          item_meta: "outline-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "outline-amber-300",
          item_meta: "outline-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "outline-amber-400",
          item_meta: "outline-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "outline-amber-500",
          item_meta: "outline-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "outline-amber-600",
          item_meta: "outline-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "outline-amber-700",
          item_meta: "outline-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "outline-amber-800",
          item_meta: "outline-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "outline-amber-900",
          item_meta: "outline-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "outline-amber-950",
          item_meta: "outline-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "outline-yellow-50",
          item_meta: "outline-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "outline-yellow-100",
          item_meta: "outline-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "outline-yellow-200",
          item_meta: "outline-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "outline-yellow-300",
          item_meta: "outline-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "outline-yellow-400",
          item_meta: "outline-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "outline-yellow-500",
          item_meta: "outline-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "outline-yellow-600",
          item_meta: "outline-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "outline-yellow-700",
          item_meta: "outline-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "outline-yellow-800",
          item_meta: "outline-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "outline-yellow-900",
          item_meta: "outline-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "outline-yellow-950",
          item_meta: "outline-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "outline-lime-50",
          item_meta: "outline-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "outline-lime-100",
          item_meta: "outline-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "outline-lime-200",
          item_meta: "outline-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "outline-lime-300",
          item_meta: "outline-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "outline-lime-400",
          item_meta: "outline-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "outline-lime-500",
          item_meta: "outline-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "outline-lime-600",
          item_meta: "outline-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "outline-lime-700",
          item_meta: "outline-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "outline-lime-800",
          item_meta: "outline-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "outline-lime-900",
          item_meta: "outline-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "outline-lime-950",
          item_meta: "outline-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "outline-green-50",
          item_meta: "outline-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "outline-green-100",
          item_meta: "outline-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "outline-green-200",
          item_meta: "outline-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "outline-green-300",
          item_meta: "outline-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "outline-green-400",
          item_meta: "outline-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "outline-green-500",
          item_meta: "outline-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "outline-green-600",
          item_meta: "outline-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "outline-green-700",
          item_meta: "outline-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "outline-green-800",
          item_meta: "outline-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "outline-green-900",
          item_meta: "outline-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "outline-green-950",
          item_meta: "outline-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "outline-emerald-50",
          item_meta: "outline-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "outline-emerald-100",
          item_meta: "outline-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "outline-emerald-200",
          item_meta: "outline-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "outline-emerald-300",
          item_meta: "outline-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "outline-emerald-400",
          item_meta: "outline-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "outline-emerald-500",
          item_meta: "outline-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "outline-emerald-600",
          item_meta: "outline-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "outline-emerald-700",
          item_meta: "outline-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "outline-emerald-800",
          item_meta: "outline-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "outline-emerald-900",
          item_meta: "outline-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "outline-emerald-950",
          item_meta: "outline-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "outline-teal-50",
          item_meta: "outline-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "outline-teal-100",
          item_meta: "outline-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "outline-teal-200",
          item_meta: "outline-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "outline-teal-300",
          item_meta: "outline-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "outline-teal-400",
          item_meta: "outline-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "outline-teal-500",
          item_meta: "outline-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "outline-teal-600",
          item_meta: "outline-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "outline-teal-700",
          item_meta: "outline-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "outline-teal-800",
          item_meta: "outline-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "outline-teal-900",
          item_meta: "outline-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "outline-teal-950",
          item_meta: "outline-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "outline-cyan-50",
          item_meta: "outline-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "outline-cyan-100",
          item_meta: "outline-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "outline-cyan-200",
          item_meta: "outline-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "outline-cyan-300",
          item_meta: "outline-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "outline-cyan-400",
          item_meta: "outline-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "outline-cyan-500",
          item_meta: "outline-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "outline-cyan-600",
          item_meta: "outline-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "outline-cyan-700",
          item_meta: "outline-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "outline-cyan-800",
          item_meta: "outline-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "outline-cyan-900",
          item_meta: "outline-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "outline-cyan-950",
          item_meta: "outline-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "outline-sky-50",
          item_meta: "outline-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "outline-sky-100",
          item_meta: "outline-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "outline-sky-200",
          item_meta: "outline-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "outline-sky-300",
          item_meta: "outline-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "outline-sky-400",
          item_meta: "outline-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "outline-sky-500",
          item_meta: "outline-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "outline-sky-600",
          item_meta: "outline-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "outline-sky-700",
          item_meta: "outline-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "outline-sky-800",
          item_meta: "outline-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "outline-sky-900",
          item_meta: "outline-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "outline-sky-950",
          item_meta: "outline-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "outline-blue-50",
          item_meta: "outline-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "outline-blue-100",
          item_meta: "outline-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "outline-blue-200",
          item_meta: "outline-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "outline-blue-300",
          item_meta: "outline-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "outline-blue-400",
          item_meta: "outline-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "outline-blue-500",
          item_meta: "outline-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "outline-blue-600",
          item_meta: "outline-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "outline-blue-700",
          item_meta: "outline-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "outline-blue-800",
          item_meta: "outline-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "outline-blue-900",
          item_meta: "outline-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "outline-blue-950",
          item_meta: "outline-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "outline-indigo-50",
          item_meta: "outline-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "outline-indigo-100",
          item_meta: "outline-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "outline-indigo-200",
          item_meta: "outline-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "outline-indigo-300",
          item_meta: "outline-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "outline-indigo-400",
          item_meta: "outline-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "outline-indigo-500",
          item_meta: "outline-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "outline-indigo-600",
          item_meta: "outline-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "outline-indigo-700",
          item_meta: "outline-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "outline-indigo-800",
          item_meta: "outline-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "outline-indigo-900",
          item_meta: "outline-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "outline-indigo-950",
          item_meta: "outline-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "outline-violet-50",
          item_meta: "outline-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "outline-violet-100",
          item_meta: "outline-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "outline-violet-200",
          item_meta: "outline-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "outline-violet-300",
          item_meta: "outline-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "outline-violet-400",
          item_meta: "outline-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "outline-violet-500",
          item_meta: "outline-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "outline-violet-600",
          item_meta: "outline-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "outline-violet-700",
          item_meta: "outline-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "outline-violet-800",
          item_meta: "outline-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "outline-violet-900",
          item_meta: "outline-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "outline-violet-950",
          item_meta: "outline-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "outline-purple-50",
          item_meta: "outline-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "outline-purple-100",
          item_meta: "outline-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "outline-purple-200",
          item_meta: "outline-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "outline-purple-300",
          item_meta: "outline-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "outline-purple-400",
          item_meta: "outline-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "outline-purple-500",
          item_meta: "outline-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "outline-purple-600",
          item_meta: "outline-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "outline-purple-700",
          item_meta: "outline-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "outline-purple-800",
          item_meta: "outline-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "outline-purple-900",
          item_meta: "outline-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "outline-purple-950",
          item_meta: "outline-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "outline-fuchsia-50",
          item_meta: "outline-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "outline-fuchsia-100",
          item_meta: "outline-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "outline-fuchsia-200",
          item_meta: "outline-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "outline-fuchsia-300",
          item_meta: "outline-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "outline-fuchsia-400",
          item_meta: "outline-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "outline-fuchsia-500",
          item_meta: "outline-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "outline-fuchsia-600",
          item_meta: "outline-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "outline-fuchsia-700",
          item_meta: "outline-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "outline-fuchsia-800",
          item_meta: "outline-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "outline-fuchsia-900",
          item_meta: "outline-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "outline-fuchsia-950",
          item_meta: "outline-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "outline-pink-50",
          item_meta: "outline-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "outline-pink-100",
          item_meta: "outline-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "outline-pink-200",
          item_meta: "outline-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "outline-pink-300",
          item_meta: "outline-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "outline-pink-400",
          item_meta: "outline-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "outline-pink-500",
          item_meta: "outline-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "outline-pink-600",
          item_meta: "outline-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "outline-pink-700",
          item_meta: "outline-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "outline-pink-800",
          item_meta: "outline-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "outline-pink-900",
          item_meta: "outline-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "outline-pink-950",
          item_meta: "outline-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "outline-rose-50",
          item_meta: "outline-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "outline-rose-100",
          item_meta: "outline-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "outline-rose-200",
          item_meta: "outline-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "outline-rose-300",
          item_meta: "outline-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "outline-rose-400",
          item_meta: "outline-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "outline-rose-500",
          item_meta: "outline-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "outline-rose-600",
          item_meta: "outline-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "outline-rose-700",
          item_meta: "outline-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "outline-rose-800",
          item_meta: "outline-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "outline-rose-900",
          item_meta: "outline-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "outline-rose-950",
          item_meta: "outline-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "outline-slate-50",
          item_meta: "outline-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "outline-slate-100",
          item_meta: "outline-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "outline-slate-200",
          item_meta: "outline-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "outline-slate-300",
          item_meta: "outline-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "outline-slate-400",
          item_meta: "outline-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "outline-slate-500",
          item_meta: "outline-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "outline-slate-600",
          item_meta: "outline-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "outline-slate-700",
          item_meta: "outline-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "outline-slate-800",
          item_meta: "outline-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "outline-slate-900",
          item_meta: "outline-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "outline-slate-950",
          item_meta: "outline-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "outline-gray-50",
          item_meta: "outline-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "outline-gray-100",
          item_meta: "outline-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "outline-gray-200",
          item_meta: "outline-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "outline-gray-300",
          item_meta: "outline-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "outline-gray-400",
          item_meta: "outline-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "outline-gray-500",
          item_meta: "outline-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "outline-gray-600",
          item_meta: "outline-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "outline-gray-700",
          item_meta: "outline-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "outline-gray-800",
          item_meta: "outline-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "outline-gray-900",
          item_meta: "outline-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "outline-gray-950",
          item_meta: "outline-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "outline-zinc-50",
          item_meta: "outline-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "outline-zinc-100",
          item_meta: "outline-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "outline-zinc-200",
          item_meta: "outline-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "outline-zinc-300",
          item_meta: "outline-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "outline-zinc-400",
          item_meta: "outline-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "outline-zinc-500",
          item_meta: "outline-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "outline-zinc-600",
          item_meta: "outline-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "outline-zinc-700",
          item_meta: "outline-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "outline-zinc-800",
          item_meta: "outline-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "outline-zinc-900",
          item_meta: "outline-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "outline-zinc-950",
          item_meta: "outline-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "outline-neutral-50",
          item_meta: "outline-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "outline-neutral-100",
          item_meta: "outline-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "outline-neutral-200",
          item_meta: "outline-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "outline-neutral-300",
          item_meta: "outline-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "outline-neutral-400",
          item_meta: "outline-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "outline-neutral-500",
          item_meta: "outline-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "outline-neutral-600",
          item_meta: "outline-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "outline-neutral-700",
          item_meta: "outline-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "outline-neutral-800",
          item_meta: "outline-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "outline-neutral-900",
          item_meta: "outline-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "outline-neutral-950",
          item_meta: "outline-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "outline-stone-50",
          item_meta: "outline-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "outline-stone-100",
          item_meta: "outline-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "outline-stone-200",
          item_meta: "outline-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "outline-stone-300",
          item_meta: "outline-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "outline-stone-400",
          item_meta: "outline-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "outline-stone-500",
          item_meta: "outline-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "outline-stone-600",
          item_meta: "outline-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "outline-stone-700",
          item_meta: "outline-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "outline-stone-800",
          item_meta: "outline-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "outline-stone-900",
          item_meta: "outline-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "outline-stone-950",
          item_meta: "outline-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "outline-(<custom-property>)",
          item_meta: "outline-color: var(<custom-property>);",
        },
        {
          item: "outline-[<value>]",
          item_meta: "outline-color: <value>;",
        }
      ]
    },
    {
      group: "outline-style",
      classes: [
        {
          item: "outline-solid",
          item_meta: "outline-style: solid;",
        },
        {
          item: "outline-dashed",
          item_meta: "outline-style: dashed;",
        },
        {
          item: "outline-dotted",
          item_meta: "outline-style: dotted;",
        },
        {
          item: "outline-double",
          item_meta: "outline-style: double;",
        },
        {
          item: "outline-none",
          item_meta: "outline-style: none;",
        },
        {
          item: "outline-hidden",
          item_meta: "outline: 2px solid transparent; outline-offset: 2px;",
        }
      ]
    },
    {
      group: "outline-offset",
      classes: [
        {
          item: "outline-offset-<number>",
          item_meta: "outline-offset: <number>px;",
        },
        {
          item: "-outline-offset-<number>",
          item_meta: "outline-offset: calc(<number>px * -1);",
        },
        {
          item: "outline-offset-(<custom-property>)",
          item_meta: "outline-offset: var(<custom-property>);",
        },
        {
          item: "outline-offset-[<value>]",
          item_meta: "outline-offset: <value>;",
        }
      ]
    }
  ]
}

export default backgroundsCategory

import type { Category } from "../command-data"

// Typography-related Tailwind classes
const typographyCategory: Category = {
  category: "Typography",
  groups: [
    {
      group: "font-family",
      classes: [
        {
          item: "font-serif",
          item_meta: "font-family: var(--font-serif); /* ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif */",
        },
        {
          item: "font-mono",
          item_meta: "font-family: var(--font-mono); /* ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace */",
        },
        {
          item: "font-(family-name:<custom-property>)",
          item_meta: "font-family: var(<custom-property>);",
        },
        {
          item: "font-[<value>]",
          item_meta: "font-family: <value>;",
        }
      ]
    },
    {
      group: "font-size",
      classes: [
        {
          item: "text-xs",
          item_meta: "font-size: var(--text-xs); /* 0.75rem (12px) */ line-height: var(--text-xs--line-height); /* calc(1 / 0.75) */",
        },
        {
          item: "text-sm",
          item_meta: "font-size: var(--text-sm); /* 0.875rem (14px) */ line-height: var(--text-sm--line-height); /* calc(1.25 / 0.875) */",
        },
        {
          item: "text-base",
          item_meta: "font-size: var(--text-base); /* 1rem (16px) */ line-height: var(--text-base--line-height); /* calc(1.5 / 1) */",
        },
        {
          item: "text-lg",
          item_meta: "font-size: var(--text-lg); /* 1.125rem (18px) */ line-height: var(--text-lg--line-height); /* calc(1.75 / 1.125) */",
        },
        {
          item: "text-xl",
          item_meta: "font-size: var(--text-xl); /* 1.25rem (20px) */ line-height: var(--text-xl--line-height); /* calc(1.75 / 1.25) */",
        },
        {
          item: "text-2xl",
          item_meta: "font-size: var(--text-2xl); /* 1.5rem (24px) */ line-height: var(--text-2xl--line-height); /* calc(2 / 1.5) */",
        },
        {
          item: "text-3xl",
          item_meta: "font-size: var(--text-3xl); /* 1.875rem (30px) */ line-height: var(--text-3xl--line-height); /* calc(2.25 / 1.875) */",
        },
        {
          item: "text-4xl",
          item_meta: "font-size: var(--text-4xl); /* 2.25rem (36px) */ line-height: var(--text-4xl--line-height); /* calc(2.5 / 2.25) */",
        },
        {
          item: "text-5xl",
          item_meta: "font-size: var(--text-5xl); /* 3rem (48px) */ line-height: var(--text-5xl--line-height); /* 1 */",
        },
        {
          item: "text-6xl",
          item_meta: "font-size: var(--text-6xl); /* 3.75rem (60px) */ line-height: var(--text-6xl--line-height); /* 1 */",
        },
        {
          item: "text-7xl",
          item_meta: "font-size: var(--text-7xl); /* 4.5rem (72px) */ line-height: var(--text-7xl--line-height); /* 1 */",
        },
        {
          item: "text-8xl",
          item_meta: "font-size: var(--text-8xl); /* 6rem (96px) */ line-height: var(--text-8xl--line-height); /* 1 */",
        },
        {
          item: "text-9xl",
          item_meta: "font-size: var(--text-9xl); /* 8rem (128px) */ line-height: var(--text-9xl--line-height); /* 1 */",
        },
        {
          item: "text-(length:<custom-property>)",
          item_meta: "font-size: var(<custom-property>);",
        },
        {
          item: "text-[<value>]",
          item_meta: "font-size: <value>;",
        }
      ]
    },
    {
      group: "font-smoothing",
      classes: [
        {
          item: "antialiased",
          item_meta: "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
        },
        {
          item: "subpixel-antialiased",
          item_meta: "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;",
        }
      ]
    },
    {
      group: "font-style",
      classes: [
        {
          item: "italic",
          item_meta: "font-style: italic;",
        },
        {
          item: "not-italic",
          item_meta: "font-style: normal;",
        }
      ]
    },
    {
      group: "font-weight",
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
        {
          item: "font-(<custom-property>)",
          item_meta: "font-weight: var(<custom-property>);",
        },
        {
          item: "font-[<value>]",
          item_meta: "font-weight: <value>;",
        }
      ]
    },
    {
      group: "font-stretch",
      classes: [
        {
          item: "font-stretch-ultra-condensed",
          item_meta: "",
        },
        {
          item: "font-stretch: ultra-condensed; /* 50% */",
          item_meta: "",
        },
        {
          item: "font-stretch-extra-condensed",
          item_meta: "",
        },
        {
          item: "font-stretch: extra-condensed; /* 62.5% */",
          item_meta: "",
        },
        {
          item: "font-stretch-condensed",
          item_meta: "",
        },
        {
          item: "font-stretch: condensed; /* 75% */",
          item_meta: "",
        },
        {
          item: "font-stretch-semi-condensed",
          item_meta: "",
        },
        {
          item: "font-stretch: semi-condensed; /* 87.5% */",
          item_meta: "",
        },
        {
          item: "font-stretch-normal",
          item_meta: "",
        },
        {
          item: "font-stretch: normal; /* 100% */",
          item_meta: "",
        },
        {
          item: "font-stretch-semi-expanded",
          item_meta: "",
        },
        {
          item: "font-stretch: semi-expanded; /* 112.5% */",
          item_meta: "",
        },
        {
          item: "font-stretch-expanded",
          item_meta: "",
        },
        {
          item: "font-stretch: expanded; /* 125% */",
          item_meta: "",
        },
        {
          item: "font-stretch-extra-expanded",
          item_meta: "",
        },
        {
          item: "font-stretch: extra-expanded; /* 150% */",
          item_meta: "",
        },
        {
          item: "font-stretch-ultra-expanded",
          item_meta: "",
        },
        {
          item: "font-stretch: ultra-expanded; /* 200% */",
          item_meta: "",
        },
        {
          item: "font-stretch-<percentage>",
          item_meta: "",
        },
        {
          item: "font-stretch: <percentage>;",
          item_meta: "",
        },
        {
          item: "font-stretch-(<custom-property>)",
          item_meta: "",
        },
        {
          item: "font-stretch: var(<custom-property>);",
          item_meta: "",
        },
        {
          item: "font-stretch-[<value>]",
          item_meta: "",
        },
        {
          item: "font-stretch: <value>;",
          item_meta: "",
        }
      ]
    },
    {
      group: "font-variant-numeric",
      classes: [
        {
          item: "normal-nums",
          item_meta: "font-variant-numeric: normal;",
        },
        {
          item: "ordinal",
          item_meta: "font-variant-numeric: ordinal;",
        },
        {
          item: "slashed-zero",
          item_meta: "font-variant-numeric: slashed-zero;",
        },
        {
          item: "lining-nums",
          item_meta: "font-variant-numeric: lining-nums;",
        },
        {
          item: "oldstyle-nums",
          item_meta: "font-variant-numeric: oldstyle-nums;",
        },
        {
          item: "proportional-nums",
          item_meta: "font-variant-numeric: proportional-nums;",
        },
        {
          item: "tabular-nums",
          item_meta: "font-variant-numeric: tabular-nums;",
        },
        {
          item: "diagonal-fractions",
          item_meta: "font-variant-numeric: diagonal-fractions;",
        },
        {
          item: "stacked-fractions",
          item_meta: "font-variant-numeric: stacked-fractions;",
        }
      ]
    },
    {
      group: "letter-spacing",
      classes: [
        {
          item: "tracking-tighter",
          item_meta: "letter-spacing: var(--tracking-tighter); /* -0.05em */",
        },
        {
          item: "tracking-tight",
          item_meta: "letter-spacing: var(--tracking-tight); /* -0.025em */",
        },
        {
          item: "tracking-normal",
          item_meta: "letter-spacing: var(--tracking-normal); /* 0em */",
        },
        {
          item: "tracking-wide",
          item_meta: "letter-spacing: var(--tracking-wide); /* 0.025em */",
        },
        {
          item: "tracking-wider",
          item_meta: "letter-spacing: var(--tracking-wider); /* 0.05em */",
        },
        {
          item: "tracking-widest",
          item_meta: "letter-spacing: var(--tracking-widest); /* 0.1em */",
        },
        {
          item: "tracking-(<custom-property>)",
          item_meta: "letter-spacing: var(<custom-property>);",
        },
        {
          item: "tracking-[<value>]",
          item_meta: "letter-spacing: <value>;",
        }
      ]
    },
    {
      group: "line-clamp",
      classes: [
        {
          item: "line-clamp-<number>",
          item_meta: "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: <number>;",
        },
        {
          item: "line-clamp-none",
          item_meta: "overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: unset;",
        },
        {
          item: "line-clamp-(<custom-property>)",
          item_meta: "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: var(<custom-property>);",
        },
        {
          item: "line-clamp-[<value>]",
          item_meta: "overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: <value>;",
        }
      ]
    },
    {
      group: "line-height",
      classes: [
        {
          item: "text-<size>/<number>",
          item_meta: "font-size: <size>; line-height: calc(var(--spacing) * <number>);",
        },
        {
          item: "text-<size>/(<custom-property>)",
          item_meta: "font-size: <size>; line-height: var(<custom-property>);",
        },
        {
          item: "text-<size>/[<value>]",
          item_meta: "font-size: <size>; line-height: <value>;",
        },
        {
          item: "leading-none",
          item_meta: "line-height: 1;",
        },
        {
          item: "leading-<number>",
          item_meta: "line-height: calc(var(--spacing) * <number>)",
        },
        {
          item: "leading-(<custom-property>)",
          item_meta: "line-height: var(<custom-property>);",
        },
        {
          item: "leading-[<value>]",
          item_meta: "line-height: <value>;",
        }
      ]
    },
    {
      group: "list-style-image",
      classes: [
        {
          item: "list-image-[<value>]",
          item_meta: "list-style-image: <value>;",
        },
        {
          item: "list-image-(<custom-property>)",
          item_meta: "list-style-image: var(<custom-property>);",
        },
        {
          item: "list-image-none",
          item_meta: "list-style-image: none;",
        }
      ]
    },
    {
      group: "list-style-position",
      classes: [
        {
          item: "list-inside",
          item_meta: "list-style-position: inside;",
        },
        {
          item: "list-outside",
          item_meta: "list-style-position: outside;",
        }
      ]
    },
    {
      group: "list-style-type",
      classes: [
        {
          item: "list-disc",
          item_meta: "list-style-type: disc;",
        },
        {
          item: "list-decimal",
          item_meta: "list-style-type: decimal;",
        },
        {
          item: "list-none",
          item_meta: "list-style-type: none;",
        },
        {
          item: "list-(<custom-property>)",
          item_meta: "list-style-type: var(<custom-property>);",
        },
        {
          item: "list-[<value>]",
          item_meta: "list-style-type: <value>;",
        }
      ]
    },
    {
      group: "text-align",
      classes: [
        {
          item: "text-left",
          item_meta: "text-align: left;",
        },
        {
          item: "text-center",
          item_meta: "text-align: center;",
        },
        {
          item: "text-right",
          item_meta: "text-align: right;",
        },
        {
          item: "text-justify",
          item_meta: "text-align: justify;",
        },
        {
          item: "text-start",
          item_meta: "text-align: start;",
        },
        {
          item: "text-end",
          item_meta: "text-align: end;",
        }
      ]
    },
    {
      group: "color",
      classes: [
        {
          item: "text-inherit",
          item_meta: "color: inherit;",
        },
        {
          item: "text-current",
          item_meta: "color: currentColor;",
        },
        {
          item: "text-transparent",
          item_meta: "color: transparent;",
        },
        {
          item: "text-black",
          item_meta: "color: var(--color-black); /* #000 */",
        },
        {
          item: "text-white",
          item_meta: "color: var(--color-white); /* #fff */",
        },
        {
          item: "text-red-50",
          item_meta: "color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "text-red-100",
          item_meta: "color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "text-red-200",
          item_meta: "color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "text-red-300",
          item_meta: "color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "text-red-400",
          item_meta: "color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "text-red-500",
          item_meta: "color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "text-red-600",
          item_meta: "color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "text-red-700",
          item_meta: "color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "text-red-800",
          item_meta: "color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "text-red-900",
          item_meta: "color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "text-red-950",
          item_meta: "color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "text-orange-50",
          item_meta: "color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "text-orange-100",
          item_meta: "color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "text-orange-200",
          item_meta: "color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "text-orange-300",
          item_meta: "color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "text-orange-400",
          item_meta: "color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "text-orange-500",
          item_meta: "color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "text-orange-600",
          item_meta: "color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "text-orange-700",
          item_meta: "color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "text-orange-800",
          item_meta: "color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "text-orange-900",
          item_meta: "color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "text-orange-950",
          item_meta: "color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "text-amber-50",
          item_meta: "color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "text-amber-100",
          item_meta: "color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "text-amber-200",
          item_meta: "color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "text-amber-300",
          item_meta: "color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "text-amber-400",
          item_meta: "color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "text-amber-500",
          item_meta: "color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "text-amber-600",
          item_meta: "color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "text-amber-700",
          item_meta: "color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "text-amber-800",
          item_meta: "color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "text-amber-900",
          item_meta: "color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "text-amber-950",
          item_meta: "color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "text-yellow-50",
          item_meta: "color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "text-yellow-100",
          item_meta: "color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "text-yellow-200",
          item_meta: "color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "text-yellow-300",
          item_meta: "color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "text-yellow-400",
          item_meta: "color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "text-yellow-500",
          item_meta: "color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "text-yellow-600",
          item_meta: "color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "text-yellow-700",
          item_meta: "color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "text-yellow-800",
          item_meta: "color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "text-yellow-900",
          item_meta: "color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "text-yellow-950",
          item_meta: "color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "text-lime-50",
          item_meta: "color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "text-lime-100",
          item_meta: "color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "text-lime-200",
          item_meta: "color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "text-lime-300",
          item_meta: "color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "text-lime-400",
          item_meta: "color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "text-lime-500",
          item_meta: "color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "text-lime-600",
          item_meta: "color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "text-lime-700",
          item_meta: "color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "text-lime-800",
          item_meta: "color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "text-lime-900",
          item_meta: "color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "text-lime-950",
          item_meta: "color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "text-green-50",
          item_meta: "color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "text-green-100",
          item_meta: "color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "text-green-200",
          item_meta: "color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "text-green-300",
          item_meta: "color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "text-green-400",
          item_meta: "color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "text-green-500",
          item_meta: "color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "text-green-600",
          item_meta: "color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "text-green-700",
          item_meta: "color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "text-green-800",
          item_meta: "color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "text-green-900",
          item_meta: "color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "text-green-950",
          item_meta: "color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "text-emerald-50",
          item_meta: "color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "text-emerald-100",
          item_meta: "color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "text-emerald-200",
          item_meta: "color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "text-emerald-300",
          item_meta: "color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "text-emerald-400",
          item_meta: "color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "text-emerald-500",
          item_meta: "color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "text-emerald-600",
          item_meta: "color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "text-emerald-700",
          item_meta: "color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "text-emerald-800",
          item_meta: "color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "text-emerald-900",
          item_meta: "color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "text-emerald-950",
          item_meta: "color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "text-teal-50",
          item_meta: "color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "text-teal-100",
          item_meta: "color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "text-teal-200",
          item_meta: "color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "text-teal-300",
          item_meta: "color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "text-teal-400",
          item_meta: "color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "text-teal-500",
          item_meta: "color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "text-teal-600",
          item_meta: "color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "text-teal-700",
          item_meta: "color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "text-teal-800",
          item_meta: "color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "text-teal-900",
          item_meta: "color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "text-teal-950",
          item_meta: "color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "text-cyan-50",
          item_meta: "color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "text-cyan-100",
          item_meta: "color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "text-cyan-200",
          item_meta: "color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "text-cyan-300",
          item_meta: "color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "text-cyan-400",
          item_meta: "color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "text-cyan-500",
          item_meta: "color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "text-cyan-600",
          item_meta: "color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "text-cyan-700",
          item_meta: "color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "text-cyan-800",
          item_meta: "color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "text-cyan-900",
          item_meta: "color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "text-cyan-950",
          item_meta: "color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "text-sky-50",
          item_meta: "color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "text-sky-100",
          item_meta: "color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "text-sky-200",
          item_meta: "color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "text-sky-300",
          item_meta: "color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "text-sky-400",
          item_meta: "color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "text-sky-500",
          item_meta: "color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "text-sky-600",
          item_meta: "color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "text-sky-700",
          item_meta: "color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "text-sky-800",
          item_meta: "color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "text-sky-900",
          item_meta: "color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "text-sky-950",
          item_meta: "color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "text-blue-50",
          item_meta: "color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "text-blue-100",
          item_meta: "color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "text-blue-200",
          item_meta: "color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "text-blue-300",
          item_meta: "color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "text-blue-400",
          item_meta: "color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "text-blue-500",
          item_meta: "color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "text-blue-600",
          item_meta: "color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "text-blue-700",
          item_meta: "color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "text-blue-800",
          item_meta: "color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "text-blue-900",
          item_meta: "color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "text-blue-950",
          item_meta: "color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "text-indigo-50",
          item_meta: "color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "text-indigo-100",
          item_meta: "color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "text-indigo-200",
          item_meta: "color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "text-indigo-300",
          item_meta: "color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "text-indigo-400",
          item_meta: "color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "text-indigo-500",
          item_meta: "color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "text-indigo-600",
          item_meta: "color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "text-indigo-700",
          item_meta: "color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "text-indigo-800",
          item_meta: "color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "text-indigo-900",
          item_meta: "color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "text-indigo-950",
          item_meta: "color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "text-violet-50",
          item_meta: "color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "text-violet-100",
          item_meta: "color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "text-violet-200",
          item_meta: "color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "text-violet-300",
          item_meta: "color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "text-violet-400",
          item_meta: "color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "text-violet-500",
          item_meta: "color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "text-violet-600",
          item_meta: "color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "text-violet-700",
          item_meta: "color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "text-violet-800",
          item_meta: "color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "text-violet-900",
          item_meta: "color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "text-violet-950",
          item_meta: "color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "text-purple-50",
          item_meta: "color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "text-purple-100",
          item_meta: "color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "text-purple-200",
          item_meta: "color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "text-purple-300",
          item_meta: "color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "text-purple-400",
          item_meta: "color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "text-purple-500",
          item_meta: "color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "text-purple-600",
          item_meta: "color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "text-purple-700",
          item_meta: "color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "text-purple-800",
          item_meta: "color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "text-purple-900",
          item_meta: "color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "text-purple-950",
          item_meta: "color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "text-fuchsia-50",
          item_meta: "color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "text-fuchsia-100",
          item_meta: "color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "text-fuchsia-200",
          item_meta: "color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "text-fuchsia-300",
          item_meta: "color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "text-fuchsia-400",
          item_meta: "color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "text-fuchsia-500",
          item_meta: "color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "text-fuchsia-600",
          item_meta: "color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "text-fuchsia-700",
          item_meta: "color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "text-fuchsia-800",
          item_meta: "color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "text-fuchsia-900",
          item_meta: "color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "text-fuchsia-950",
          item_meta: "color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "text-pink-50",
          item_meta: "color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "text-pink-100",
          item_meta: "color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "text-pink-200",
          item_meta: "color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "text-pink-300",
          item_meta: "color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "text-pink-400",
          item_meta: "color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "text-pink-500",
          item_meta: "color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "text-pink-600",
          item_meta: "color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "text-pink-700",
          item_meta: "color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "text-pink-800",
          item_meta: "color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "text-pink-900",
          item_meta: "color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "text-pink-950",
          item_meta: "color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "text-rose-50",
          item_meta: "color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "text-rose-100",
          item_meta: "color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "text-rose-200",
          item_meta: "color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "text-rose-300",
          item_meta: "color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "text-rose-400",
          item_meta: "color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "text-rose-500",
          item_meta: "color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "text-rose-600",
          item_meta: "color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "text-rose-700",
          item_meta: "color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "text-rose-800",
          item_meta: "color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "text-rose-900",
          item_meta: "color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "text-rose-950",
          item_meta: "color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "text-slate-50",
          item_meta: "color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "text-slate-100",
          item_meta: "color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "text-slate-200",
          item_meta: "color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "text-slate-300",
          item_meta: "color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "text-slate-400",
          item_meta: "color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "text-slate-500",
          item_meta: "color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "text-slate-600",
          item_meta: "color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "text-slate-700",
          item_meta: "color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "text-slate-800",
          item_meta: "color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "text-slate-900",
          item_meta: "color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "text-slate-950",
          item_meta: "color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "text-gray-50",
          item_meta: "color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "text-gray-100",
          item_meta: "color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "text-gray-200",
          item_meta: "color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "text-gray-300",
          item_meta: "color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "text-gray-400",
          item_meta: "color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "text-gray-500",
          item_meta: "color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "text-gray-600",
          item_meta: "color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "text-gray-700",
          item_meta: "color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "text-gray-800",
          item_meta: "color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "text-gray-900",
          item_meta: "color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "text-gray-950",
          item_meta: "color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "text-zinc-50",
          item_meta: "color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "text-zinc-100",
          item_meta: "color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "text-zinc-200",
          item_meta: "color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "text-zinc-300",
          item_meta: "color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "text-zinc-400",
          item_meta: "color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "text-zinc-500",
          item_meta: "color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "text-zinc-600",
          item_meta: "color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "text-zinc-700",
          item_meta: "color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "text-zinc-800",
          item_meta: "color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "text-zinc-900",
          item_meta: "color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "text-zinc-950",
          item_meta: "color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "text-neutral-50",
          item_meta: "color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "text-neutral-100",
          item_meta: "color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "text-neutral-200",
          item_meta: "color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "text-neutral-300",
          item_meta: "color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "text-neutral-400",
          item_meta: "color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "text-neutral-500",
          item_meta: "color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "text-neutral-600",
          item_meta: "color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "text-neutral-700",
          item_meta: "color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "text-neutral-800",
          item_meta: "color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "text-neutral-900",
          item_meta: "color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "text-neutral-950",
          item_meta: "color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "text-stone-50",
          item_meta: "color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "text-stone-100",
          item_meta: "color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "text-stone-200",
          item_meta: "color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "text-stone-300",
          item_meta: "color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "text-stone-400",
          item_meta: "color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "text-stone-500",
          item_meta: "color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "text-stone-600",
          item_meta: "color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "text-stone-700",
          item_meta: "color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "text-stone-800",
          item_meta: "color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "text-stone-900",
          item_meta: "color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "text-stone-950",
          item_meta: "color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "text-(<custom-property>)",
          item_meta: "color: var(<custom-property>);",
        },
        {
          item: "text-[<value>]",
          item_meta: "color: <value>;",
        }
      ]
    },
    {
      group: "text-decoration-line",
      classes: [
        {
          item: "underline",
          item_meta: "text-decoration-line: underline;",
        },
        {
          item: "overline",
          item_meta: "text-decoration-line: overline;",
        },
        {
          item: "line-through",
          item_meta: "text-decoration-line: line-through;",
        },
        {
          item: "no-underline",
          item_meta: "text-decoration-line: none;",
        }
      ]
    },
    {
      group: "text-decoration-color",
      classes: [
        {
          item: "decoration-inherit",
          item_meta: "text-decoration-color: inherit;",
        },
        {
          item: "decoration-current",
          item_meta: "text-decoration-color: currentColor;",
        },
        {
          item: "decoration-transparent",
          item_meta: "text-decoration-color: transparent;",
        },
        {
          item: "decoration-black",
          item_meta: "text-decoration-color: var(--color-black); /* #000 */",
        },
        {
          item: "decoration-white",
          item_meta: "text-decoration-color: var(--color-white); /* #fff */",
        },
        {
          item: "decoration-red-50",
          item_meta: "text-decoration-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "decoration-red-100",
          item_meta: "text-decoration-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "decoration-red-200",
          item_meta: "text-decoration-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "decoration-red-300",
          item_meta: "text-decoration-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "decoration-red-400",
          item_meta: "text-decoration-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "decoration-red-500",
          item_meta: "text-decoration-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "decoration-red-600",
          item_meta: "text-decoration-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "decoration-red-700",
          item_meta: "text-decoration-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "decoration-red-800",
          item_meta: "text-decoration-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "decoration-red-900",
          item_meta: "text-decoration-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "decoration-red-950",
          item_meta: "text-decoration-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "decoration-orange-50",
          item_meta: "text-decoration-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "decoration-orange-100",
          item_meta: "text-decoration-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "decoration-orange-200",
          item_meta: "text-decoration-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "decoration-orange-300",
          item_meta: "text-decoration-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "decoration-orange-400",
          item_meta: "text-decoration-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "decoration-orange-500",
          item_meta: "text-decoration-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "decoration-orange-600",
          item_meta: "text-decoration-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "decoration-orange-700",
          item_meta: "text-decoration-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "decoration-orange-800",
          item_meta: "text-decoration-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "decoration-orange-900",
          item_meta: "text-decoration-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "decoration-orange-950",
          item_meta: "text-decoration-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "decoration-amber-50",
          item_meta: "text-decoration-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "decoration-amber-100",
          item_meta: "text-decoration-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "decoration-amber-200",
          item_meta: "text-decoration-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "decoration-amber-300",
          item_meta: "text-decoration-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "decoration-amber-400",
          item_meta: "text-decoration-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "decoration-amber-500",
          item_meta: "text-decoration-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "decoration-amber-600",
          item_meta: "text-decoration-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "decoration-amber-700",
          item_meta: "text-decoration-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "decoration-amber-800",
          item_meta: "text-decoration-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "decoration-amber-900",
          item_meta: "text-decoration-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "decoration-amber-950",
          item_meta: "text-decoration-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "decoration-yellow-50",
          item_meta: "text-decoration-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "decoration-yellow-100",
          item_meta: "text-decoration-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "decoration-yellow-200",
          item_meta: "text-decoration-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "decoration-yellow-300",
          item_meta: "text-decoration-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "decoration-yellow-400",
          item_meta: "text-decoration-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "decoration-yellow-500",
          item_meta: "text-decoration-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "decoration-yellow-600",
          item_meta: "text-decoration-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "decoration-yellow-700",
          item_meta: "text-decoration-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "decoration-yellow-800",
          item_meta: "text-decoration-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "decoration-yellow-900",
          item_meta: "text-decoration-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "decoration-yellow-950",
          item_meta: "text-decoration-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "decoration-lime-50",
          item_meta: "text-decoration-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "decoration-lime-100",
          item_meta: "text-decoration-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "decoration-lime-200",
          item_meta: "text-decoration-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "decoration-lime-300",
          item_meta: "text-decoration-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "decoration-lime-400",
          item_meta: "text-decoration-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "decoration-lime-500",
          item_meta: "text-decoration-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "decoration-lime-600",
          item_meta: "text-decoration-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "decoration-lime-700",
          item_meta: "text-decoration-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "decoration-lime-800",
          item_meta: "text-decoration-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "decoration-lime-900",
          item_meta: "text-decoration-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "decoration-lime-950",
          item_meta: "text-decoration-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "decoration-green-50",
          item_meta: "text-decoration-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "decoration-green-100",
          item_meta: "text-decoration-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "decoration-green-200",
          item_meta: "text-decoration-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "decoration-green-300",
          item_meta: "text-decoration-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "decoration-green-400",
          item_meta: "text-decoration-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "decoration-green-500",
          item_meta: "text-decoration-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "decoration-green-600",
          item_meta: "text-decoration-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "decoration-green-700",
          item_meta: "text-decoration-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "decoration-green-800",
          item_meta: "text-decoration-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "decoration-green-900",
          item_meta: "text-decoration-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "decoration-green-950",
          item_meta: "text-decoration-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "decoration-emerald-50",
          item_meta: "text-decoration-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "decoration-emerald-100",
          item_meta: "text-decoration-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "decoration-emerald-200",
          item_meta: "text-decoration-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "decoration-emerald-300",
          item_meta: "text-decoration-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "decoration-emerald-400",
          item_meta: "text-decoration-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "decoration-emerald-500",
          item_meta: "text-decoration-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "decoration-emerald-600",
          item_meta: "text-decoration-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "decoration-emerald-700",
          item_meta: "text-decoration-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "decoration-emerald-800",
          item_meta: "text-decoration-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "decoration-emerald-900",
          item_meta: "text-decoration-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "decoration-emerald-950",
          item_meta: "text-decoration-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "decoration-teal-50",
          item_meta: "text-decoration-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "decoration-teal-100",
          item_meta: "text-decoration-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "decoration-teal-200",
          item_meta: "text-decoration-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "decoration-teal-300",
          item_meta: "text-decoration-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "decoration-teal-400",
          item_meta: "text-decoration-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "decoration-teal-500",
          item_meta: "text-decoration-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "decoration-teal-600",
          item_meta: "text-decoration-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "decoration-teal-700",
          item_meta: "text-decoration-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "decoration-teal-800",
          item_meta: "text-decoration-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "decoration-teal-900",
          item_meta: "text-decoration-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "decoration-teal-950",
          item_meta: "text-decoration-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "decoration-cyan-50",
          item_meta: "text-decoration-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "decoration-cyan-100",
          item_meta: "text-decoration-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "decoration-cyan-200",
          item_meta: "text-decoration-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "decoration-cyan-300",
          item_meta: "text-decoration-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "decoration-cyan-400",
          item_meta: "text-decoration-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "decoration-cyan-500",
          item_meta: "text-decoration-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "decoration-cyan-600",
          item_meta: "text-decoration-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "decoration-cyan-700",
          item_meta: "text-decoration-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "decoration-cyan-800",
          item_meta: "text-decoration-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "decoration-cyan-900",
          item_meta: "text-decoration-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "decoration-cyan-950",
          item_meta: "text-decoration-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "decoration-sky-50",
          item_meta: "text-decoration-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "decoration-sky-100",
          item_meta: "text-decoration-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "decoration-sky-200",
          item_meta: "text-decoration-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "decoration-sky-300",
          item_meta: "text-decoration-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "decoration-sky-400",
          item_meta: "text-decoration-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "decoration-sky-500",
          item_meta: "text-decoration-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "decoration-sky-600",
          item_meta: "text-decoration-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "decoration-sky-700",
          item_meta: "text-decoration-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "decoration-sky-800",
          item_meta: "text-decoration-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "decoration-sky-900",
          item_meta: "text-decoration-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "decoration-sky-950",
          item_meta: "text-decoration-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "decoration-blue-50",
          item_meta: "text-decoration-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "decoration-blue-100",
          item_meta: "text-decoration-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "decoration-blue-200",
          item_meta: "text-decoration-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "decoration-blue-300",
          item_meta: "text-decoration-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "decoration-blue-400",
          item_meta: "text-decoration-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "decoration-blue-500",
          item_meta: "text-decoration-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "decoration-blue-600",
          item_meta: "text-decoration-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "decoration-blue-700",
          item_meta: "text-decoration-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "decoration-blue-800",
          item_meta: "text-decoration-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "decoration-blue-900",
          item_meta: "text-decoration-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "decoration-blue-950",
          item_meta: "text-decoration-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "decoration-indigo-50",
          item_meta: "text-decoration-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "decoration-indigo-100",
          item_meta: "text-decoration-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "decoration-indigo-200",
          item_meta: "text-decoration-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "decoration-indigo-300",
          item_meta: "text-decoration-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "decoration-indigo-400",
          item_meta: "text-decoration-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "decoration-indigo-500",
          item_meta: "text-decoration-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "decoration-indigo-600",
          item_meta: "text-decoration-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "decoration-indigo-700",
          item_meta: "text-decoration-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "decoration-indigo-800",
          item_meta: "text-decoration-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "decoration-indigo-900",
          item_meta: "text-decoration-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "decoration-indigo-950",
          item_meta: "text-decoration-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "decoration-violet-50",
          item_meta: "text-decoration-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "decoration-violet-100",
          item_meta: "text-decoration-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "decoration-violet-200",
          item_meta: "text-decoration-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "decoration-violet-300",
          item_meta: "text-decoration-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "decoration-violet-400",
          item_meta: "text-decoration-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "decoration-violet-500",
          item_meta: "text-decoration-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "decoration-violet-600",
          item_meta: "text-decoration-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "decoration-violet-700",
          item_meta: "text-decoration-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "decoration-violet-800",
          item_meta: "text-decoration-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "decoration-violet-900",
          item_meta: "text-decoration-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "decoration-violet-950",
          item_meta: "text-decoration-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "decoration-purple-50",
          item_meta: "text-decoration-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "decoration-purple-100",
          item_meta: "text-decoration-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "decoration-purple-200",
          item_meta: "text-decoration-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "decoration-purple-300",
          item_meta: "text-decoration-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "decoration-purple-400",
          item_meta: "text-decoration-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "decoration-purple-500",
          item_meta: "text-decoration-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "decoration-purple-600",
          item_meta: "text-decoration-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "decoration-purple-700",
          item_meta: "text-decoration-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "decoration-purple-800",
          item_meta: "text-decoration-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "decoration-purple-900",
          item_meta: "text-decoration-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "decoration-purple-950",
          item_meta: "text-decoration-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "decoration-fuchsia-50",
          item_meta: "text-decoration-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "decoration-fuchsia-100",
          item_meta: "text-decoration-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "decoration-fuchsia-200",
          item_meta: "text-decoration-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "decoration-fuchsia-300",
          item_meta: "text-decoration-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "decoration-fuchsia-400",
          item_meta: "text-decoration-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "decoration-fuchsia-500",
          item_meta: "text-decoration-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "decoration-fuchsia-600",
          item_meta: "text-decoration-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "decoration-fuchsia-700",
          item_meta: "text-decoration-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "decoration-fuchsia-800",
          item_meta: "text-decoration-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "decoration-fuchsia-900",
          item_meta: "text-decoration-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "decoration-fuchsia-950",
          item_meta: "text-decoration-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "decoration-pink-50",
          item_meta: "text-decoration-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "decoration-pink-100",
          item_meta: "text-decoration-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "decoration-pink-200",
          item_meta: "text-decoration-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "decoration-pink-300",
          item_meta: "text-decoration-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "decoration-pink-400",
          item_meta: "text-decoration-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "decoration-pink-500",
          item_meta: "text-decoration-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "decoration-pink-600",
          item_meta: "text-decoration-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "decoration-pink-700",
          item_meta: "text-decoration-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "decoration-pink-800",
          item_meta: "text-decoration-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "decoration-pink-900",
          item_meta: "text-decoration-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "decoration-pink-950",
          item_meta: "text-decoration-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "decoration-rose-50",
          item_meta: "text-decoration-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "decoration-rose-100",
          item_meta: "text-decoration-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "decoration-rose-200",
          item_meta: "text-decoration-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "decoration-rose-300",
          item_meta: "text-decoration-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "decoration-rose-400",
          item_meta: "text-decoration-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "decoration-rose-500",
          item_meta: "text-decoration-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "decoration-rose-600",
          item_meta: "text-decoration-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "decoration-rose-700",
          item_meta: "text-decoration-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "decoration-rose-800",
          item_meta: "text-decoration-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "decoration-rose-900",
          item_meta: "text-decoration-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "decoration-rose-950",
          item_meta: "text-decoration-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "decoration-slate-50",
          item_meta: "text-decoration-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "decoration-slate-100",
          item_meta: "text-decoration-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "decoration-slate-200",
          item_meta: "text-decoration-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "decoration-slate-300",
          item_meta: "text-decoration-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "decoration-slate-400",
          item_meta: "text-decoration-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "decoration-slate-500",
          item_meta: "text-decoration-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "decoration-slate-600",
          item_meta: "text-decoration-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "decoration-slate-700",
          item_meta: "text-decoration-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "decoration-slate-800",
          item_meta: "text-decoration-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "decoration-slate-900",
          item_meta: "text-decoration-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "decoration-slate-950",
          item_meta: "text-decoration-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "decoration-gray-50",
          item_meta: "text-decoration-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "decoration-gray-100",
          item_meta: "text-decoration-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "decoration-gray-200",
          item_meta: "text-decoration-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "decoration-gray-300",
          item_meta: "text-decoration-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "decoration-gray-400",
          item_meta: "text-decoration-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "decoration-gray-500",
          item_meta: "text-decoration-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "decoration-gray-600",
          item_meta: "text-decoration-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "decoration-gray-700",
          item_meta: "text-decoration-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "decoration-gray-800",
          item_meta: "text-decoration-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "decoration-gray-900",
          item_meta: "text-decoration-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "decoration-gray-950",
          item_meta: "text-decoration-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "decoration-zinc-50",
          item_meta: "text-decoration-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "decoration-zinc-100",
          item_meta: "text-decoration-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "decoration-zinc-200",
          item_meta: "text-decoration-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "decoration-zinc-300",
          item_meta: "text-decoration-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "decoration-zinc-400",
          item_meta: "text-decoration-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "decoration-zinc-500",
          item_meta: "text-decoration-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "decoration-zinc-600",
          item_meta: "text-decoration-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "decoration-zinc-700",
          item_meta: "text-decoration-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "decoration-zinc-800",
          item_meta: "text-decoration-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "decoration-zinc-900",
          item_meta: "text-decoration-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "decoration-zinc-950",
          item_meta: "text-decoration-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "decoration-neutral-50",
          item_meta: "text-decoration-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "decoration-neutral-100",
          item_meta: "text-decoration-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "decoration-neutral-200",
          item_meta: "text-decoration-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "decoration-neutral-300",
          item_meta: "text-decoration-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "decoration-neutral-400",
          item_meta: "text-decoration-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "decoration-neutral-500",
          item_meta: "text-decoration-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "decoration-neutral-600",
          item_meta: "text-decoration-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "decoration-neutral-700",
          item_meta: "text-decoration-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "decoration-neutral-800",
          item_meta: "text-decoration-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "decoration-neutral-900",
          item_meta: "text-decoration-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "decoration-neutral-950",
          item_meta: "text-decoration-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "decoration-stone-50",
          item_meta: "text-decoration-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "decoration-stone-100",
          item_meta: "text-decoration-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "decoration-stone-200",
          item_meta: "text-decoration-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "decoration-stone-300",
          item_meta: "text-decoration-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "decoration-stone-400",
          item_meta: "text-decoration-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "decoration-stone-500",
          item_meta: "text-decoration-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "decoration-stone-600",
          item_meta: "text-decoration-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "decoration-stone-700",
          item_meta: "text-decoration-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "decoration-stone-800",
          item_meta: "text-decoration-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "decoration-stone-900",
          item_meta: "text-decoration-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "decoration-stone-950",
          item_meta: "text-decoration-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "decoration-(<custom-property>)",
          item_meta: "text-decoration-color: var(<custom-property>);",
        },
        {
          item: "decoration-[<value>]",
          item_meta: "text-decoration-color: <value>;",
        }
      ]
    },
    {
      group: "text-decoration-style",
      classes: [
        {
          item: "decoration-solid",
          item_meta: "text-decoration-style: solid;",
        },
        {
          item: "decoration-double",
          item_meta: "text-decoration-style: double;",
        },
        {
          item: "decoration-dotted",
          item_meta: "text-decoration-style: dotted;",
        },
        {
          item: "decoration-dashed",
          item_meta: "text-decoration-style: dashed;",
        },
        {
          item: "decoration-wavy",
          item_meta: "text-decoration-style: wavy;",
        }
      ]
    },
    {
      group: "text-decoration-thickness",
      classes: [
        {
          item: "decoration-<number>",
          item_meta: "text-decoration-thickness: <number>px;",
        },
        {
          item: "decoration-from-font",
          item_meta: "text-decoration-thickness: from-font;",
        },
        {
          item: "decoration-auto",
          item_meta: "text-decoration-thickness: auto;",
        },
        {
          item: "decoration-(length:<custom-property>)",
          item_meta: "text-decoration-thickness: var(<custom-property>);",
        },
        {
          item: "decoration-[<value>]",
          item_meta: "text-decoration-thickness: <value>;",
        }
      ]
    },
    {
      group: "text-underline-offset",
      classes: [
        {
          item: "underline-offset-<number>",
          item_meta: "text-underline-offset: <number>px;",
        },
        {
          item: "-underline-offset-<number>",
          item_meta: "text-underline-offset: calc(<number>px * -1);",
        },
        {
          item: "underline-offset-auto",
          item_meta: "text-underline-offset: auto;",
        },
        {
          item: "underline-offset-(<custom-property>)",
          item_meta: "text-underline-offset: var(<custom-property>);",
        },
        {
          item: "underline-offset-[<value>]",
          item_meta: "text-underline-offset: <value>;",
        }
      ]
    },
    {
      group: "text-transform",
      classes: [
        {
          item: "uppercase",
          item_meta: "text-transform: uppercase;",
        },
        {
          item: "lowercase",
          item_meta: "text-transform: lowercase;",
        },
        {
          item: "capitalize",
          item_meta: "text-transform: capitalize;",
        },
        {
          item: "normal-case",
          item_meta: "text-transform: none;",
        }
      ]
    },
    {
      group: "text-overflow",
      classes: [
        {
          item: "truncate",
          item_meta: "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
        },
        {
          item: "text-ellipsis",
          item_meta: "text-overflow: ellipsis;",
        },
        {
          item: "text-clip",
          item_meta: "text-overflow: clip;",
        }
      ]
    },
    {
      group: "text-wrap",
      classes: [
        {
          item: "text-wrap",
          item_meta: "text-wrap: wrap;",
        },
        {
          item: "text-nowrap",
          item_meta: "text-wrap: nowrap;",
        },
        {
          item: "text-balance",
          item_meta: "text-wrap: balance;",
        },
        {
          item: "text-pretty",
          item_meta: "text-wrap: pretty;",
        }
      ]
    },
    {
      group: "text-indent",
      classes: [
        {
          item: "indent-<number>",
          item_meta: "text-indent: calc(var(--spacing) * <number>)",
        },
        {
          item: "-indent-<number>",
          item_meta: "text-indent: calc(var(--spacing) * -<number>)",
        },
        {
          item: "indent-px",
          item_meta: "text-indent: 1px;",
        },
        {
          item: "-indent-px",
          item_meta: "text-indent: -1px;",
        },
        {
          item: "indent-(<custom-property>)",
          item_meta: "text-indent: var(<custom-property>);",
        },
        {
          item: "indent-[<value>]",
          item_meta: "text-indent: <value>;",
        }
      ]
    },
    {
      group: "vertical-align",
      classes: [
        {
          item: "align-baseline",
          item_meta: "vertical-align: baseline;",
        },
        {
          item: "align-top",
          item_meta: "vertical-align: top;",
        },
        {
          item: "align-middle",
          item_meta: "vertical-align: middle;",
        },
        {
          item: "align-bottom",
          item_meta: "vertical-align: bottom;",
        },
        {
          item: "align-text-top",
          item_meta: "vertical-align: text-top;",
        },
        {
          item: "align-text-bottom",
          item_meta: "vertical-align: text-bottom;",
        },
        {
          item: "align-sub",
          item_meta: "vertical-align: sub;",
        },
        {
          item: "align-super",
          item_meta: "vertical-align: super;",
        },
        {
          item: "align-(<custom-property>)",
          item_meta: "vertical-align: var(<custom-property>);",
        },
        {
          item: "align-[<value>]",
          item_meta: "vertical-align: <value>;",
        }
      ]
    },
    {
      group: "white-space",
      classes: [
        {
          item: "whitespace-normal",
          item_meta: "white-space: normal;",
        },
        {
          item: "whitespace-nowrap",
          item_meta: "white-space: nowrap;",
        },
        {
          item: "whitespace-pre",
          item_meta: "white-space: pre;",
        },
        {
          item: "whitespace-pre-line",
          item_meta: "white-space: pre-line;",
        },
        {
          item: "whitespace-pre-wrap",
          item_meta: "white-space: pre-wrap;",
        },
        {
          item: "whitespace-break-spaces",
          item_meta: "white-space: break-spaces;",
        }
      ]
    },
    {
      group: "word-break",
      classes: [
        {
          item: "break-normal",
          item_meta: "word-break: normal;",
        },
        {
          item: "break-all",
          item_meta: "word-break: break-all;",
        },
        {
          item: "break-keep",
          item_meta: "word-break: keep-all;",
        }
      ]
    },
    {
      group: "overflow-wrap",
      classes: [
        {
          item: "wrap-break-word",
          item_meta: "overflow-wrap: break-word;",
        },
        {
          item: "wrap-anywhere",
          item_meta: "overflow-wrap: anywhere;",
        },
        {
          item: "wrap-normal",
          item_meta: "overflow-wrap: normal;",
        }
      ]
    },
    {
      group: "hyphens",
      classes: [
        {
          item: "hyphens-none",
          item_meta: "hyphens: none;",
        },
        {
          item: "hyphens-manual",
          item_meta: "hyphens: manual;",
        },
        {
          item: "hyphens-auto",
          item_meta: "hyphens: auto;",
        }
      ]
    },
    {
      group: "content",
      classes: [
        {
          item: "content-[<value>]",
          item_meta: "content: <value>;",
        },
        {
          item: "content-(<custom-property>)",
          item_meta: "content: var(<custom-property>);",
        },
        {
          item: "content-none",
          item_meta: "content: none;",
        }
      ]
    }
  ]
}

export default typographyCategory

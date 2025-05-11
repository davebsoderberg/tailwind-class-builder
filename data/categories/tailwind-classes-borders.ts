import type { Category } from "../command-data"

// Border-related Tailwind classes
const bordersCategory: Category = {
  category: "Backgrounds",
  groups: [
    {
      group: "background-attachment",
      classes: [
        {
          item: "bg-local",
          item_meta: "background-attachment: local;",
        },
        {
          item: "bg-scroll",
          item_meta: "background-attachment: scroll;",
        }
      ]
    },
    {
      group: "background-clip",
      classes: [
        {
          item: "bg-clip-border",
          item_meta: "background-clip: border-box;",
        },
        {
          item: "bg-clip-padding",
          item_meta: "background-clip: padding-box;",
        },
        {
          item: "bg-clip-content",
          item_meta: "background-clip: content-box;",
        },
        {
          item: "bg-clip-text",
          item_meta: "background-clip: text;",
        }
      ]
    },
    {
      group: "background-color",
      classes: [
        {
          item: "bg-inherit",
          item_meta: "background-color: inherit;",
        },
        {
          item: "bg-current",
          item_meta: "background-color: currentColor;",
        },
        {
          item: "bg-transparent",
          item_meta: "background-color: transparent;",
        },
        {
          item: "bg-black",
          item_meta: "background-color: var(--color-black); /* #000 */",
        },
        {
          item: "bg-white",
          item_meta: "background-color: var(--color-white); /* #fff */",
        },
        {
          item: "bg-red-50",
          item_meta: "background-color: var(--color-red-50); /* oklch(97.1% 0.013 17.38) */",
        },
        {
          item: "bg-red-100",
          item_meta: "background-color: var(--color-red-100); /* oklch(93.6% 0.032 17.717) */",
        },
        {
          item: "bg-red-200",
          item_meta: "background-color: var(--color-red-200); /* oklch(88.5% 0.062 18.334) */",
        },
        {
          item: "bg-red-300",
          item_meta: "background-color: var(--color-red-300); /* oklch(80.8% 0.114 19.571) */",
        },
        {
          item: "bg-red-400",
          item_meta: "background-color: var(--color-red-400); /* oklch(70.4% 0.191 22.216) */",
        },
        {
          item: "bg-red-500",
          item_meta: "background-color: var(--color-red-500); /* oklch(63.7% 0.237 25.331) */",
        },
        {
          item: "bg-red-600",
          item_meta: "background-color: var(--color-red-600); /* oklch(57.7% 0.245 27.325) */",
        },
        {
          item: "bg-red-700",
          item_meta: "background-color: var(--color-red-700); /* oklch(50.5% 0.213 27.518) */",
        },
        {
          item: "bg-red-800",
          item_meta: "background-color: var(--color-red-800); /* oklch(44.4% 0.177 26.899) */",
        },
        {
          item: "bg-red-900",
          item_meta: "background-color: var(--color-red-900); /* oklch(39.6% 0.141 25.723) */",
        },
        {
          item: "bg-red-950",
          item_meta: "background-color: var(--color-red-950); /* oklch(25.8% 0.092 26.042) */",
        },
        {
          item: "bg-orange-50",
          item_meta: "background-color: var(--color-orange-50); /* oklch(98% 0.016 73.684) */",
        },
        {
          item: "bg-orange-100",
          item_meta: "background-color: var(--color-orange-100); /* oklch(95.4% 0.038 75.164) */",
        },
        {
          item: "bg-orange-200",
          item_meta: "background-color: var(--color-orange-200); /* oklch(90.1% 0.076 70.697) */",
        },
        {
          item: "bg-orange-300",
          item_meta: "background-color: var(--color-orange-300); /* oklch(83.7% 0.128 66.29) */",
        },
        {
          item: "bg-orange-400",
          item_meta: "background-color: var(--color-orange-400); /* oklch(75% 0.183 55.934) */",
        },
        {
          item: "bg-orange-500",
          item_meta: "background-color: var(--color-orange-500); /* oklch(70.5% 0.213 47.604) */",
        },
        {
          item: "bg-orange-600",
          item_meta: "background-color: var(--color-orange-600); /* oklch(64.6% 0.222 41.116) */",
        },
        {
          item: "bg-orange-700",
          item_meta: "background-color: var(--color-orange-700); /* oklch(55.3% 0.195 38.402) */",
        },
        {
          item: "bg-orange-800",
          item_meta: "background-color: var(--color-orange-800); /* oklch(47% 0.157 37.304) */",
        },
        {
          item: "bg-orange-900",
          item_meta: "background-color: var(--color-orange-900); /* oklch(40.8% 0.123 38.172) */",
        },
        {
          item: "bg-orange-950",
          item_meta: "background-color: var(--color-orange-950); /* oklch(26.6% 0.079 36.259) */",
        },
        {
          item: "bg-amber-50",
          item_meta: "background-color: var(--color-amber-50); /* oklch(98.7% 0.022 95.277) */",
        },
        {
          item: "bg-amber-100",
          item_meta: "background-color: var(--color-amber-100); /* oklch(96.2% 0.059 95.617) */",
        },
        {
          item: "bg-amber-200",
          item_meta: "background-color: var(--color-amber-200); /* oklch(92.4% 0.12 95.746) */",
        },
        {
          item: "bg-amber-300",
          item_meta: "background-color: var(--color-amber-300); /* oklch(87.9% 0.169 91.605) */",
        },
        {
          item: "bg-amber-400",
          item_meta: "background-color: var(--color-amber-400); /* oklch(82.8% 0.189 84.429) */",
        },
        {
          item: "bg-amber-500",
          item_meta: "background-color: var(--color-amber-500); /* oklch(76.9% 0.188 70.08) */",
        },
        {
          item: "bg-amber-600",
          item_meta: "background-color: var(--color-amber-600); /* oklch(66.6% 0.179 58.318) */",
        },
        {
          item: "bg-amber-700",
          item_meta: "background-color: var(--color-amber-700); /* oklch(55.5% 0.163 48.998) */",
        },
        {
          item: "bg-amber-800",
          item_meta: "background-color: var(--color-amber-800); /* oklch(47.3% 0.137 46.201) */",
        },
        {
          item: "bg-amber-900",
          item_meta: "background-color: var(--color-amber-900); /* oklch(41.4% 0.112 45.904) */",
        },
        {
          item: "bg-amber-950",
          item_meta: "background-color: var(--color-amber-950); /* oklch(27.9% 0.077 45.635) */",
        },
        {
          item: "bg-yellow-50",
          item_meta: "background-color: var(--color-yellow-50); /* oklch(98.7% 0.026 102.212) */",
        },
        {
          item: "bg-yellow-100",
          item_meta: "background-color: var(--color-yellow-100); /* oklch(97.3% 0.071 103.193) */",
        },
        {
          item: "bg-yellow-200",
          item_meta: "background-color: var(--color-yellow-200); /* oklch(94.5% 0.129 101.54) */",
        },
        {
          item: "bg-yellow-300",
          item_meta: "background-color: var(--color-yellow-300); /* oklch(90.5% 0.182 98.111) */",
        },
        {
          item: "bg-yellow-400",
          item_meta: "background-color: var(--color-yellow-400); /* oklch(85.2% 0.199 91.936) */",
        },
        {
          item: "bg-yellow-500",
          item_meta: "background-color: var(--color-yellow-500); /* oklch(79.5% 0.184 86.047) */",
        },
        {
          item: "bg-yellow-600",
          item_meta: "background-color: var(--color-yellow-600); /* oklch(68.1% 0.162 75.834) */",
        },
        {
          item: "bg-yellow-700",
          item_meta: "background-color: var(--color-yellow-700); /* oklch(55.4% 0.135 66.442) */",
        },
        {
          item: "bg-yellow-800",
          item_meta: "background-color: var(--color-yellow-800); /* oklch(47.6% 0.114 61.907) */",
        },
        {
          item: "bg-yellow-900",
          item_meta: "background-color: var(--color-yellow-900); /* oklch(42.1% 0.095 57.708) */",
        },
        {
          item: "bg-yellow-950",
          item_meta: "background-color: var(--color-yellow-950); /* oklch(28.6% 0.066 53.813) */",
        },
        {
          item: "bg-lime-50",
          item_meta: "background-color: var(--color-lime-50); /* oklch(98.6% 0.031 120.757) */",
        },
        {
          item: "bg-lime-100",
          item_meta: "background-color: var(--color-lime-100); /* oklch(96.7% 0.067 122.328) */",
        },
        {
          item: "bg-lime-200",
          item_meta: "background-color: var(--color-lime-200); /* oklch(93.8% 0.127 124.321) */",
        },
        {
          item: "bg-lime-300",
          item_meta: "background-color: var(--color-lime-300); /* oklch(89.7% 0.196 126.665) */",
        },
        {
          item: "bg-lime-400",
          item_meta: "background-color: var(--color-lime-400); /* oklch(84.1% 0.238 128.85) */",
        },
        {
          item: "bg-lime-500",
          item_meta: "background-color: var(--color-lime-500); /* oklch(76.8% 0.233 130.85) */",
        },
        {
          item: "bg-lime-600",
          item_meta: "background-color: var(--color-lime-600); /* oklch(64.8% 0.2 131.684) */",
        },
        {
          item: "bg-lime-700",
          item_meta: "background-color: var(--color-lime-700); /* oklch(53.2% 0.157 131.589) */",
        },
        {
          item: "bg-lime-800",
          item_meta: "background-color: var(--color-lime-800); /* oklch(45.3% 0.124 130.933) */",
        },
        {
          item: "bg-lime-900",
          item_meta: "background-color: var(--color-lime-900); /* oklch(40.5% 0.101 131.063) */",
        },
        {
          item: "bg-lime-950",
          item_meta: "background-color: var(--color-lime-950); /* oklch(27.4% 0.072 132.109) */",
        },
        {
          item: "bg-green-50",
          item_meta: "background-color: var(--color-green-50); /* oklch(98.2% 0.018 155.826) */",
        },
        {
          item: "bg-green-100",
          item_meta: "background-color: var(--color-green-100); /* oklch(96.2% 0.044 156.743) */",
        },
        {
          item: "bg-green-200",
          item_meta: "background-color: var(--color-green-200); /* oklch(92.5% 0.084 155.995) */",
        },
        {
          item: "bg-green-300",
          item_meta: "background-color: var(--color-green-300); /* oklch(87.1% 0.15 154.449) */",
        },
        {
          item: "bg-green-400",
          item_meta: "background-color: var(--color-green-400); /* oklch(79.2% 0.209 151.711) */",
        },
        {
          item: "bg-green-500",
          item_meta: "background-color: var(--color-green-500); /* oklch(72.3% 0.219 149.579) */",
        },
        {
          item: "bg-green-600",
          item_meta: "background-color: var(--color-green-600); /* oklch(62.7% 0.194 149.214) */",
        },
        {
          item: "bg-green-700",
          item_meta: "background-color: var(--color-green-700); /* oklch(52.7% 0.154 150.069) */",
        },
        {
          item: "bg-green-800",
          item_meta: "background-color: var(--color-green-800); /* oklch(44.8% 0.119 151.328) */",
        },
        {
          item: "bg-green-900",
          item_meta: "background-color: var(--color-green-900); /* oklch(39.3% 0.095 152.535) */",
        },
        {
          item: "bg-green-950",
          item_meta: "background-color: var(--color-green-950); /* oklch(26.6% 0.065 152.934) */",
        },
        {
          item: "bg-emerald-50",
          item_meta: "background-color: var(--color-emerald-50); /* oklch(97.9% 0.021 166.113) */",
        },
        {
          item: "bg-emerald-100",
          item_meta: "background-color: var(--color-emerald-100); /* oklch(95% 0.052 163.051) */",
        },
        {
          item: "bg-emerald-200",
          item_meta: "background-color: var(--color-emerald-200); /* oklch(90.5% 0.093 164.15) */",
        },
        {
          item: "bg-emerald-300",
          item_meta: "background-color: var(--color-emerald-300); /* oklch(84.5% 0.143 164.978) */",
        },
        {
          item: "bg-emerald-400",
          item_meta: "background-color: var(--color-emerald-400); /* oklch(76.5% 0.177 163.223) */",
        },
        {
          item: "bg-emerald-500",
          item_meta: "background-color: var(--color-emerald-500); /* oklch(69.6% 0.17 162.48) */",
        },
        {
          item: "bg-emerald-600",
          item_meta: "background-color: var(--color-emerald-600); /* oklch(59.6% 0.145 163.225) */",
        },
        {
          item: "bg-emerald-700",
          item_meta: "background-color: var(--color-emerald-700); /* oklch(50.8% 0.118 165.612) */",
        },
        {
          item: "bg-emerald-800",
          item_meta: "background-color: var(--color-emerald-800); /* oklch(43.2% 0.095 166.913) */",
        },
        {
          item: "bg-emerald-900",
          item_meta: "background-color: var(--color-emerald-900); /* oklch(37.8% 0.077 168.94) */",
        },
        {
          item: "bg-emerald-950",
          item_meta: "background-color: var(--color-emerald-950); /* oklch(26.2% 0.051 172.552) */",
        },
        {
          item: "bg-teal-50",
          item_meta: "background-color: var(--color-teal-50); /* oklch(98.4% 0.014 180.72) */",
        },
        {
          item: "bg-teal-100",
          item_meta: "background-color: var(--color-teal-100); /* oklch(95.3% 0.051 180.801) */",
        },
        {
          item: "bg-teal-200",
          item_meta: "background-color: var(--color-teal-200); /* oklch(91% 0.096 180.426) */",
        },
        {
          item: "bg-teal-300",
          item_meta: "background-color: var(--color-teal-300); /* oklch(85.5% 0.138 181.071) */",
        },
        {
          item: "bg-teal-400",
          item_meta: "background-color: var(--color-teal-400); /* oklch(77.7% 0.152 181.912) */",
        },
        {
          item: "bg-teal-500",
          item_meta: "background-color: var(--color-teal-500); /* oklch(70.4% 0.14 182.503) */",
        },
        {
          item: "bg-teal-600",
          item_meta: "background-color: var(--color-teal-600); /* oklch(60% 0.118 184.704) */",
        },
        {
          item: "bg-teal-700",
          item_meta: "background-color: var(--color-teal-700); /* oklch(51.1% 0.096 186.391) */",
        },
        {
          item: "bg-teal-800",
          item_meta: "background-color: var(--color-teal-800); /* oklch(43.7% 0.078 188.216) */",
        },
        {
          item: "bg-teal-900",
          item_meta: "background-color: var(--color-teal-900); /* oklch(38.6% 0.063 188.416) */",
        },
        {
          item: "bg-teal-950",
          item_meta: "background-color: var(--color-teal-950); /* oklch(27.7% 0.046 192.524) */",
        },
        {
          item: "bg-cyan-50",
          item_meta: "background-color: var(--color-cyan-50); /* oklch(98.4% 0.019 200.873) */",
        },
        {
          item: "bg-cyan-100",
          item_meta: "background-color: var(--color-cyan-100); /* oklch(95.6% 0.045 203.388) */",
        },
        {
          item: "bg-cyan-200",
          item_meta: "background-color: var(--color-cyan-200); /* oklch(91.7% 0.08 205.041) */",
        },
        {
          item: "bg-cyan-300",
          item_meta: "background-color: var(--color-cyan-300); /* oklch(86.5% 0.127 207.078) */",
        },
        {
          item: "bg-cyan-400",
          item_meta: "background-color: var(--color-cyan-400); /* oklch(78.9% 0.154 211.53) */",
        },
        {
          item: "bg-cyan-500",
          item_meta: "background-color: var(--color-cyan-500); /* oklch(71.5% 0.143 215.221) */",
        },
        {
          item: "bg-cyan-600",
          item_meta: "background-color: var(--color-cyan-600); /* oklch(60.9% 0.126 221.723) */",
        },
        {
          item: "bg-cyan-700",
          item_meta: "background-color: var(--color-cyan-700); /* oklch(52% 0.105 223.128) */",
        },
        {
          item: "bg-cyan-800",
          item_meta: "background-color: var(--color-cyan-800); /* oklch(45% 0.085 224.283) */",
        },
        {
          item: "bg-cyan-900",
          item_meta: "background-color: var(--color-cyan-900); /* oklch(39.8% 0.07 227.392) */",
        },
        {
          item: "bg-cyan-950",
          item_meta: "background-color: var(--color-cyan-950); /* oklch(30.2% 0.056 229.695) */",
        },
        {
          item: "bg-sky-50",
          item_meta: "background-color: var(--color-sky-50); /* oklch(97.7% 0.013 236.62) */",
        },
        {
          item: "bg-sky-100",
          item_meta: "background-color: var(--color-sky-100); /* oklch(95.1% 0.026 236.824) */",
        },
        {
          item: "bg-sky-200",
          item_meta: "background-color: var(--color-sky-200); /* oklch(90.1% 0.058 230.902) */",
        },
        {
          item: "bg-sky-300",
          item_meta: "background-color: var(--color-sky-300); /* oklch(82.8% 0.111 230.318) */",
        },
        {
          item: "bg-sky-400",
          item_meta: "background-color: var(--color-sky-400); /* oklch(74.6% 0.16 232.661) */",
        },
        {
          item: "bg-sky-500",
          item_meta: "background-color: var(--color-sky-500); /* oklch(68.5% 0.169 237.323) */",
        },
        {
          item: "bg-sky-600",
          item_meta: "background-color: var(--color-sky-600); /* oklch(58.8% 0.158 241.966) */",
        },
        {
          item: "bg-sky-700",
          item_meta: "background-color: var(--color-sky-700); /* oklch(50% 0.134 242.749) */",
        },
        {
          item: "bg-sky-800",
          item_meta: "background-color: var(--color-sky-800); /* oklch(44.3% 0.11 240.79) */",
        },
        {
          item: "bg-sky-900",
          item_meta: "background-color: var(--color-sky-900); /* oklch(39.1% 0.09 240.876) */",
        },
        {
          item: "bg-sky-950",
          item_meta: "background-color: var(--color-sky-950); /* oklch(29.3% 0.066 243.157) */",
        },
        {
          item: "bg-blue-50",
          item_meta: "background-color: var(--color-blue-50); /* oklch(97% 0.014 254.604) */",
        },
        {
          item: "bg-blue-100",
          item_meta: "background-color: var(--color-blue-100); /* oklch(93.2% 0.032 255.585) */",
        },
        {
          item: "bg-blue-200",
          item_meta: "background-color: var(--color-blue-200); /* oklch(88.2% 0.059 254.128) */",
        },
        {
          item: "bg-blue-300",
          item_meta: "background-color: var(--color-blue-300); /* oklch(80.9% 0.105 251.813) */",
        },
        {
          item: "bg-blue-400",
          item_meta: "background-color: var(--color-blue-400); /* oklch(70.7% 0.165 254.624) */",
        },
        {
          item: "bg-blue-500",
          item_meta: "background-color: var(--color-blue-500); /* oklch(62.3% 0.214 259.815) */",
        },
        {
          item: "bg-blue-600",
          item_meta: "background-color: var(--color-blue-600); /* oklch(54.6% 0.245 262.881) */",
        },
        {
          item: "bg-blue-700",
          item_meta: "background-color: var(--color-blue-700); /* oklch(48.8% 0.243 264.376) */",
        },
        {
          item: "bg-blue-800",
          item_meta: "background-color: var(--color-blue-800); /* oklch(42.4% 0.199 265.638) */",
        },
        {
          item: "bg-blue-900",
          item_meta: "background-color: var(--color-blue-900); /* oklch(37.9% 0.146 265.522) */",
        },
        {
          item: "bg-blue-950",
          item_meta: "background-color: var(--color-blue-950); /* oklch(28.2% 0.091 267.935) */",
        },
        {
          item: "bg-indigo-50",
          item_meta: "background-color: var(--color-indigo-50); /* oklch(96.2% 0.018 272.314) */",
        },
        {
          item: "bg-indigo-100",
          item_meta: "background-color: var(--color-indigo-100); /* oklch(93% 0.034 272.788) */",
        },
        {
          item: "bg-indigo-200",
          item_meta: "background-color: var(--color-indigo-200); /* oklch(87% 0.065 274.039) */",
        },
        {
          item: "bg-indigo-300",
          item_meta: "background-color: var(--color-indigo-300); /* oklch(78.5% 0.115 274.713) */",
        },
        {
          item: "bg-indigo-400",
          item_meta: "background-color: var(--color-indigo-400); /* oklch(67.3% 0.182 276.935) */",
        },
        {
          item: "bg-indigo-500",
          item_meta: "background-color: var(--color-indigo-500); /* oklch(58.5% 0.233 277.117) */",
        },
        {
          item: "bg-indigo-600",
          item_meta: "background-color: var(--color-indigo-600); /* oklch(51.1% 0.262 276.966) */",
        },
        {
          item: "bg-indigo-700",
          item_meta: "background-color: var(--color-indigo-700); /* oklch(45.7% 0.24 277.023) */",
        },
        {
          item: "bg-indigo-800",
          item_meta: "background-color: var(--color-indigo-800); /* oklch(39.8% 0.195 277.366) */",
        },
        {
          item: "bg-indigo-900",
          item_meta: "background-color: var(--color-indigo-900); /* oklch(35.9% 0.144 278.697) */",
        },
        {
          item: "bg-indigo-950",
          item_meta: "background-color: var(--color-indigo-950); /* oklch(25.7% 0.09 281.288) */",
        },
        {
          item: "bg-violet-50",
          item_meta: "background-color: var(--color-violet-50); /* oklch(96.9% 0.016 293.756) */",
        },
        {
          item: "bg-violet-100",
          item_meta: "background-color: var(--color-violet-100); /* oklch(94.3% 0.029 294.588) */",
        },
        {
          item: "bg-violet-200",
          item_meta: "background-color: var(--color-violet-200); /* oklch(89.4% 0.057 293.283) */",
        },
        {
          item: "bg-violet-300",
          item_meta: "background-color: var(--color-violet-300); /* oklch(81.1% 0.111 293.571) */",
        },
        {
          item: "bg-violet-400",
          item_meta: "background-color: var(--color-violet-400); /* oklch(70.2% 0.183 293.541) */",
        },
        {
          item: "bg-violet-500",
          item_meta: "background-color: var(--color-violet-500); /* oklch(60.6% 0.25 292.717) */",
        },
        {
          item: "bg-violet-600",
          item_meta: "background-color: var(--color-violet-600); /* oklch(54.1% 0.281 293.009) */",
        },
        {
          item: "bg-violet-700",
          item_meta: "background-color: var(--color-violet-700); /* oklch(49.1% 0.27 292.581) */",
        },
        {
          item: "bg-violet-800",
          item_meta: "background-color: var(--color-violet-800); /* oklch(43.2% 0.232 292.759) */",
        },
        {
          item: "bg-violet-900",
          item_meta: "background-color: var(--color-violet-900); /* oklch(38% 0.189 293.745) */",
        },
        {
          item: "bg-violet-950",
          item_meta: "background-color: var(--color-violet-950); /* oklch(28.3% 0.141 291.089) */",
        },
        {
          item: "bg-purple-50",
          item_meta: "background-color: var(--color-purple-50); /* oklch(97.7% 0.014 308.299) */",
        },
        {
          item: "bg-purple-100",
          item_meta: "background-color: var(--color-purple-100); /* oklch(94.6% 0.033 307.174) */",
        },
        {
          item: "bg-purple-200",
          item_meta: "background-color: var(--color-purple-200); /* oklch(90.2% 0.063 306.703) */",
        },
        {
          item: "bg-purple-300",
          item_meta: "background-color: var(--color-purple-300); /* oklch(82.7% 0.119 306.383) */",
        },
        {
          item: "bg-purple-400",
          item_meta: "background-color: var(--color-purple-400); /* oklch(71.4% 0.203 305.504) */",
        },
        {
          item: "bg-purple-500",
          item_meta: "background-color: var(--color-purple-500); /* oklch(62.7% 0.265 303.9) */",
        },
        {
          item: "bg-purple-600",
          item_meta: "background-color: var(--color-purple-600); /* oklch(55.8% 0.288 302.321) */",
        },
        {
          item: "bg-purple-700",
          item_meta: "background-color: var(--color-purple-700); /* oklch(49.6% 0.265 301.924) */",
        },
        {
          item: "bg-purple-800",
          item_meta: "background-color: var(--color-purple-800); /* oklch(43.8% 0.218 303.724) */",
        },
        {
          item: "bg-purple-900",
          item_meta: "background-color: var(--color-purple-900); /* oklch(38.1% 0.176 304.987) */",
        },
        {
          item: "bg-purple-950",
          item_meta: "background-color: var(--color-purple-950); /* oklch(29.1% 0.149 302.717) */",
        },
        {
          item: "bg-fuchsia-50",
          item_meta: "background-color: var(--color-fuchsia-50); /* oklch(97.7% 0.017 320.058) */",
        },
        {
          item: "bg-fuchsia-100",
          item_meta: "background-color: var(--color-fuchsia-100); /* oklch(95.2% 0.037 318.852) */",
        },
        {
          item: "bg-fuchsia-200",
          item_meta: "background-color: var(--color-fuchsia-200); /* oklch(90.3% 0.076 319.62) */",
        },
        {
          item: "bg-fuchsia-300",
          item_meta: "background-color: var(--color-fuchsia-300); /* oklch(83.3% 0.145 321.434) */",
        },
        {
          item: "bg-fuchsia-400",
          item_meta: "background-color: var(--color-fuchsia-400); /* oklch(74% 0.238 322.16) */",
        },
        {
          item: "bg-fuchsia-500",
          item_meta: "background-color: var(--color-fuchsia-500); /* oklch(66.7% 0.295 322.15) */",
        },
        {
          item: "bg-fuchsia-600",
          item_meta: "background-color: var(--color-fuchsia-600); /* oklch(59.1% 0.293 322.896) */",
        },
        {
          item: "bg-fuchsia-700",
          item_meta: "background-color: var(--color-fuchsia-700); /* oklch(51.8% 0.253 323.949) */",
        },
        {
          item: "bg-fuchsia-800",
          item_meta: "background-color: var(--color-fuchsia-800); /* oklch(45.2% 0.211 324.591) */",
        },
        {
          item: "bg-fuchsia-900",
          item_meta: "background-color: var(--color-fuchsia-900); /* oklch(40.1% 0.17 325.612) */",
        },
        {
          item: "bg-fuchsia-950",
          item_meta: "background-color: var(--color-fuchsia-950); /* oklch(29.3% 0.136 325.661) */",
        },
        {
          item: "bg-pink-50",
          item_meta: "background-color: var(--color-pink-50); /* oklch(97.1% 0.014 343.198) */",
        },
        {
          item: "bg-pink-100",
          item_meta: "background-color: var(--color-pink-100); /* oklch(94.8% 0.028 342.258) */",
        },
        {
          item: "bg-pink-200",
          item_meta: "background-color: var(--color-pink-200); /* oklch(89.9% 0.061 343.231) */",
        },
        {
          item: "bg-pink-300",
          item_meta: "background-color: var(--color-pink-300); /* oklch(82.3% 0.12 346.018) */",
        },
        {
          item: "bg-pink-400",
          item_meta: "background-color: var(--color-pink-400); /* oklch(71.8% 0.202 349.761) */",
        },
        {
          item: "bg-pink-500",
          item_meta: "background-color: var(--color-pink-500); /* oklch(65.6% 0.241 354.308) */",
        },
        {
          item: "bg-pink-600",
          item_meta: "background-color: var(--color-pink-600); /* oklch(59.2% 0.249 0.584) */",
        },
        {
          item: "bg-pink-700",
          item_meta: "background-color: var(--color-pink-700); /* oklch(52.5% 0.223 3.958) */",
        },
        {
          item: "bg-pink-800",
          item_meta: "background-color: var(--color-pink-800); /* oklch(45.9% 0.187 3.815) */",
        },
        {
          item: "bg-pink-900",
          item_meta: "background-color: var(--color-pink-900); /* oklch(40.8% 0.153 2.432) */",
        },
        {
          item: "bg-pink-950",
          item_meta: "background-color: var(--color-pink-950); /* oklch(28.4% 0.109 3.907) */",
        },
        {
          item: "bg-rose-50",
          item_meta: "background-color: var(--color-rose-50); /* oklch(96.9% 0.015 12.422) */",
        },
        {
          item: "bg-rose-100",
          item_meta: "background-color: var(--color-rose-100); /* oklch(94.1% 0.03 12.58) */",
        },
        {
          item: "bg-rose-200",
          item_meta: "background-color: var(--color-rose-200); /* oklch(89.2% 0.058 10.001) */",
        },
        {
          item: "bg-rose-300",
          item_meta: "background-color: var(--color-rose-300); /* oklch(81% 0.117 11.638) */",
        },
        {
          item: "bg-rose-400",
          item_meta: "background-color: var(--color-rose-400); /* oklch(71.2% 0.194 13.428) */",
        },
        {
          item: "bg-rose-500",
          item_meta: "background-color: var(--color-rose-500); /* oklch(64.5% 0.246 16.439) */",
        },
        {
          item: "bg-rose-600",
          item_meta: "background-color: var(--color-rose-600); /* oklch(58.6% 0.253 17.585) */",
        },
        {
          item: "bg-rose-700",
          item_meta: "background-color: var(--color-rose-700); /* oklch(51.4% 0.222 16.935) */",
        },
        {
          item: "bg-rose-800",
          item_meta: "background-color: var(--color-rose-800); /* oklch(45.5% 0.188 13.697) */",
        },
        {
          item: "bg-rose-900",
          item_meta: "background-color: var(--color-rose-900); /* oklch(41% 0.159 10.272) */",
        },
        {
          item: "bg-rose-950",
          item_meta: "background-color: var(--color-rose-950); /* oklch(27.1% 0.105 12.094) */",
        },
        {
          item: "bg-slate-50",
          item_meta: "background-color: var(--color-slate-50); /* oklch(98.4% 0.003 247.858) */",
        },
        {
          item: "bg-slate-100",
          item_meta: "background-color: var(--color-slate-100); /* oklch(96.8% 0.007 247.896) */",
        },
        {
          item: "bg-slate-200",
          item_meta: "background-color: var(--color-slate-200); /* oklch(92.9% 0.013 255.508) */",
        },
        {
          item: "bg-slate-300",
          item_meta: "background-color: var(--color-slate-300); /* oklch(86.9% 0.022 252.894) */",
        },
        {
          item: "bg-slate-400",
          item_meta: "background-color: var(--color-slate-400); /* oklch(70.4% 0.04 256.788) */",
        },
        {
          item: "bg-slate-500",
          item_meta: "background-color: var(--color-slate-500); /* oklch(55.4% 0.046 257.417) */",
        },
        {
          item: "bg-slate-600",
          item_meta: "background-color: var(--color-slate-600); /* oklch(44.6% 0.043 257.281) */",
        },
        {
          item: "bg-slate-700",
          item_meta: "background-color: var(--color-slate-700); /* oklch(37.2% 0.044 257.287) */",
        },
        {
          item: "bg-slate-800",
          item_meta: "background-color: var(--color-slate-800); /* oklch(27.9% 0.041 260.031) */",
        },
        {
          item: "bg-slate-900",
          item_meta: "background-color: var(--color-slate-900); /* oklch(20.8% 0.042 265.755) */",
        },
        {
          item: "bg-slate-950",
          item_meta: "background-color: var(--color-slate-950); /* oklch(12.9% 0.042 264.695) */",
        },
        {
          item: "bg-gray-50",
          item_meta: "background-color: var(--color-gray-50); /* oklch(98.5% 0.002 247.839) */",
        },
        {
          item: "bg-gray-100",
          item_meta: "background-color: var(--color-gray-100); /* oklch(96.7% 0.003 264.542) */",
        },
        {
          item: "bg-gray-200",
          item_meta: "background-color: var(--color-gray-200); /* oklch(92.8% 0.006 264.531) */",
        },
        {
          item: "bg-gray-300",
          item_meta: "background-color: var(--color-gray-300); /* oklch(87.2% 0.01 258.338) */",
        },
        {
          item: "bg-gray-400",
          item_meta: "background-color: var(--color-gray-400); /* oklch(70.7% 0.022 261.325) */",
        },
        {
          item: "bg-gray-500",
          item_meta: "background-color: var(--color-gray-500); /* oklch(55.1% 0.027 264.364) */",
        },
        {
          item: "bg-gray-600",
          item_meta: "background-color: var(--color-gray-600); /* oklch(44.6% 0.03 256.802) */",
        },
        {
          item: "bg-gray-700",
          item_meta: "background-color: var(--color-gray-700); /* oklch(37.3% 0.034 259.733) */",
        },
        {
          item: "bg-gray-800",
          item_meta: "background-color: var(--color-gray-800); /* oklch(27.8% 0.033 256.848) */",
        },
        {
          item: "bg-gray-900",
          item_meta: "background-color: var(--color-gray-900); /* oklch(21% 0.034 264.665) */",
        },
        {
          item: "bg-gray-950",
          item_meta: "background-color: var(--color-gray-950); /* oklch(13% 0.028 261.692) */",
        },
        {
          item: "bg-zinc-50",
          item_meta: "background-color: var(--color-zinc-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "bg-zinc-100",
          item_meta: "background-color: var(--color-zinc-100); /* oklch(96.7% 0.001 286.375) */",
        },
        {
          item: "bg-zinc-200",
          item_meta: "background-color: var(--color-zinc-200); /* oklch(92% 0.004 286.32) */",
        },
        {
          item: "bg-zinc-300",
          item_meta: "background-color: var(--color-zinc-300); /* oklch(87.1% 0.006 286.286) */",
        },
        {
          item: "bg-zinc-400",
          item_meta: "background-color: var(--color-zinc-400); /* oklch(70.5% 0.015 286.067) */",
        },
        {
          item: "bg-zinc-500",
          item_meta: "background-color: var(--color-zinc-500); /* oklch(55.2% 0.016 285.938) */",
        },
        {
          item: "bg-zinc-600",
          item_meta: "background-color: var(--color-zinc-600); /* oklch(44.2% 0.017 285.786) */",
        },
        {
          item: "bg-zinc-700",
          item_meta: "background-color: var(--color-zinc-700); /* oklch(37% 0.013 285.805) */",
        },
        {
          item: "bg-zinc-800",
          item_meta: "background-color: var(--color-zinc-800); /* oklch(27.4% 0.006 286.033) */",
        },
        {
          item: "bg-zinc-900",
          item_meta: "background-color: var(--color-zinc-900); /* oklch(21% 0.006 285.885) */",
        },
        {
          item: "bg-zinc-950",
          item_meta: "background-color: var(--color-zinc-950); /* oklch(14.1% 0.005 285.823) */",
        },
        {
          item: "bg-neutral-50",
          item_meta: "background-color: var(--color-neutral-50); /* oklch(98.5% 0 0) */",
        },
        {
          item: "bg-neutral-100",
          item_meta: "background-color: var(--color-neutral-100); /* oklch(97% 0 0) */",
        },
        {
          item: "bg-neutral-200",
          item_meta: "background-color: var(--color-neutral-200); /* oklch(92.2% 0 0) */",
        },
        {
          item: "bg-neutral-300",
          item_meta: "background-color: var(--color-neutral-300); /* oklch(87% 0 0) */",
        },
        {
          item: "bg-neutral-400",
          item_meta: "background-color: var(--color-neutral-400); /* oklch(70.8% 0 0) */",
        },
        {
          item: "bg-neutral-500",
          item_meta: "background-color: var(--color-neutral-500); /* oklch(55.6% 0 0) */",
        },
        {
          item: "bg-neutral-600",
          item_meta: "background-color: var(--color-neutral-600); /* oklch(43.9% 0 0) */",
        },
        {
          item: "bg-neutral-700",
          item_meta: "background-color: var(--color-neutral-700); /* oklch(37.1% 0 0) */",
        },
        {
          item: "bg-neutral-800",
          item_meta: "background-color: var(--color-neutral-800); /* oklch(26.9% 0 0) */",
        },
        {
          item: "bg-neutral-900",
          item_meta: "background-color: var(--color-neutral-900); /* oklch(20.5% 0 0) */",
        },
        {
          item: "bg-neutral-950",
          item_meta: "background-color: var(--color-neutral-950); /* oklch(14.5% 0 0) */",
        },
        {
          item: "bg-stone-50",
          item_meta: "background-color: var(--color-stone-50); /* oklch(98.5% 0.001 106.423) */",
        },
        {
          item: "bg-stone-100",
          item_meta: "background-color: var(--color-stone-100); /* oklch(97% 0.001 106.424) */",
        },
        {
          item: "bg-stone-200",
          item_meta: "background-color: var(--color-stone-200); /* oklch(92.3% 0.003 48.717) */",
        },
        {
          item: "bg-stone-300",
          item_meta: "background-color: var(--color-stone-300); /* oklch(86.9% 0.005 56.366) */",
        },
        {
          item: "bg-stone-400",
          item_meta: "background-color: var(--color-stone-400); /* oklch(70.9% 0.01 56.259) */",
        },
        {
          item: "bg-stone-500",
          item_meta: "background-color: var(--color-stone-500); /* oklch(55.3% 0.013 58.071) */",
        },
        {
          item: "bg-stone-600",
          item_meta: "background-color: var(--color-stone-600); /* oklch(44.4% 0.011 73.639) */",
        },
        {
          item: "bg-stone-700",
          item_meta: "background-color: var(--color-stone-700); /* oklch(37.4% 0.01 67.558) */",
        },
        {
          item: "bg-stone-800",
          item_meta: "background-color: var(--color-stone-800); /* oklch(26.8% 0.007 34.298) */",
        },
        {
          item: "bg-stone-900",
          item_meta: "background-color: var(--color-stone-900); /* oklch(21.6% 0.006 56.043) */",
        },
        {
          item: "bg-stone-950",
          item_meta: "background-color: var(--color-stone-950); /* oklch(14.7% 0.004 49.25) */",
        },
        {
          item: "bg-(<custom-property>)",
          item_meta: "background-color: var(<custom-property>);",
        },
        {
          item: "bg-[<value>]",
          item_meta: "background-color: <value>;",
        }
      ]
    },
    {
      group: "background-image",
      classes: [
        {
          item: "bg-[<value>]",
          item_meta: "background-image: <value>;",
        },
        {
          item: "bg-(image:<custom-property>)",
          item_meta: "background-image: var(<custom-property>);",
        },
        {
          item: "bg-none",
          item_meta: "background-image: none;",
        },
        {
          item: "bg-linear-to-t",
          item_meta: "background-image: linear-gradient(to top, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-to-tr",
          item_meta: "background-image: linear-gradient(to top right, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-to-r",
          item_meta: "background-image: linear-gradient(to right, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-to-br",
          item_meta: "background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-to-b",
          item_meta: "background-image: linear-gradient(to bottom, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-to-bl",
          item_meta: "background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-to-l",
          item_meta: "background-image: linear-gradient(to left, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-to-tl",
          item_meta: "background-image: linear-gradient(to top left, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-<angle>",
          item_meta: "background-image: linear-gradient(<angle> in oklab, var(--tw-gradient-stops));",
        },
        {
          item: "-bg-linear-<angle>",
          item_meta: "background-image: linear-gradient(-<angle> in oklab, var(--tw-gradient-stops));",
        },
        {
          item: "bg-linear-(<custom-property>)",
          item_meta: "background-image: linear-gradient(var(--tw-gradient-stops, var(<custom-property>)));",
        },
        {
          item: "bg-linear-[<value>]",
          item_meta: "background-image: linear-gradient(var(--tw-gradient-stops, <value>));",
        },
        {
          item: "bg-radial",
          item_meta: "background-image: radial-gradient(in oklab, var(--tw-gradient-stops));",
        },
        {
          item: "bg-radial-(<custom-property>)",
          item_meta: "background-image: radial-gradient(var(--tw-gradient-stops, var(<custom-property>)));",
        },
        {
          item: "bg-radial-[<value>]",
          item_meta: "background-image: radial-gradient(var(--tw-gradient-stops, <value>));",
        },
        {
          item: "bg-conic-<angle>",
          item_meta: "background-image: conic-gradient(from <angle> in oklab, var(--tw-gradient-stops));",
        },
        {
          item: "-bg-conic-<angle>",
          item_meta: "background-image: conic-gradient(from -<angle> in oklab, var(--tw-gradient-stops));",
        },
        {
          item: "bg-conic-(<custom-property>)",
          item_meta: "background-image: var(<custom-property>);",
        },
        {
          item: "bg-conic-[<value>]",
          item_meta: "background-image: <image>;",
        },
        {
          item: "from-<color>",
          item_meta: "--tw-gradient-from: <color>;",
        },
        {
          item: "from-<percentage>",
          item_meta: "--tw-gradient-from-position: <percentage>;",
        },
        {
          item: "from-(<custom-property>)",
          item_meta: "--tw-gradient-from: var(<custom-property>);",
        },
        {
          item: "from-[<value>]",
          item_meta: "--tw-gradient-from: <value>;",
        },
        {
          item: "via-<color>",
          item_meta: "--tw-gradient-via: <color>;",
        },
        {
          item: "via-<percentage>",
          item_meta: "--tw-gradient-via-position: <percentage>;",
        },
        {
          item: "via-(<custom-property>)",
          item_meta: "--tw-gradient-via: var(<custom-property>);",
        },
        {
          item: "via-[<value>]",
          item_meta: "--tw-gradient-via: <value>;",
        },
        {
          item: "to-<color>",
          item_meta: "--tw-gradient-to: <color>;",
        },
        {
          item: "to-<percentage>",
          item_meta: "--tw-gradient-to-position: <percentage>;",
        },
        {
          item: "to-(<custom-property>)",
          item_meta: "--tw-gradient-to: var(<custom-property>);",
        },
        {
          item: "to-[<value>]",
          item_meta: "--tw-gradient-to: <value>;",
        }
      ]
    },
    {
      group: "background-origin",
      classes: [
        {
          item: "bg-origin-border",
          item_meta: "background-origin: border-box;",
        },
        {
          item: "bg-origin-padding",
          item_meta: "background-origin: padding-box;",
        },
        {
          item: "bg-origin-content",
          item_meta: "background-origin: content-box;",
        }
      ]
    },
    {
      group: "background-position",
      classes: [
        {
          item: "bg-top-left",
          item_meta: "background-position: top left;",
        },
        {
          item: "bg-top",
          item_meta: "background-position: top;",
        },
        {
          item: "bg-top-right",
          item_meta: "background-position: top right;",
        },
        {
          item: "bg-left",
          item_meta: "background-position: left;",
        },
        {
          item: "bg-center",
          item_meta: "background-position: center;",
        },
        {
          item: "bg-right",
          item_meta: "background-position: right;",
        },
        {
          item: "bg-bottom-left",
          item_meta: "background-position: bottom left;",
        },
        {
          item: "bg-bottom",
          item_meta: "background-position: bottom;",
        },
        {
          item: "bg-bottom-right",
          item_meta: "background-position: bottom right;",
        },
        {
          item: "bg-position-(<custom-property>)",
          item_meta: "background-position: var(<custom-property>);",
        },
        {
          item: "bg-position-[<value>]",
          item_meta: "background-position: <value>;",
        }
      ]
    },
    {
      group: "background-repeat",
      classes: [
        {
          item: "bg-repeat",
          item_meta: "background-repeat: repeat;",
        },
        {
          item: "bg-repeat-x",
          item_meta: "background-repeat: repeat-x;",
        },
        {
          item: "bg-repeat-y",
          item_meta: "background-repeat: repeat-y;",
        },
        {
          item: "bg-repeat-space",
          item_meta: "background-repeat: space;",
        },
        {
          item: "bg-repeat-round",
          item_meta: "background-repeat: round;",
        },
        {
          item: "bg-no-repeat",
          item_meta: "background-repeat: no-repeat;",
        }
      ]
    },
    {
      group: "background-size",
      classes: [
        {
          item: "bg-auto",
          item_meta: "background-size: auto;",
        },
        {
          item: "bg-cover",
          item_meta: "background-size: cover;",
        },
        {
          item: "bg-contain",
          item_meta: "background-size: contain;",
        },
        {
          item: "bg-size-(<custom-property>)",
          item_meta: "background-size: var(<custom-property>);",
        },
        {
          item: "bg-size-[<value>]",
          item_meta: "background-size: <value>;",
        }
      ]
    }
  ]
}

export default bordersCategory

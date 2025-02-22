import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { AreaChart, Area } from "recharts";
import { c as cn } from "./blue-parrot-logo_lrnY5FNr.mjs";
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "text-black",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 border-1", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight text-black",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-black/80", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const THEMES = { light: "", dark: ".dark" };
const ChartContext = React.createContext(null);
function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      "data-chart": chartId,
      ref,
      className: cn(
        "flex aspect-video justify-center text-xs bottom-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx(RechartsPrimitive.ResponsiveContainer, { children })
      ]
    }
  ) });
});
ChartContainer.displayName = "Chart";
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
const ChartTooltipContent = React.forwardRef(
  ({
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  }, ref) => {
    const { config } = useChart();
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
      if (labelFormatter) {
        return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
      }
      if (!value) {
        return null;
      }
      return /* @__PURE__ */ jsx("div", { className: cn("font-medium", labelClassName), children: value });
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey
    ]);
    if (!active || !payload?.length) {
      return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "grid min-w-[8rem] items-start gap-1.5 px-2.5 py-1.5 text-xs bg-white rounded-md border border-black",
          className
        ),
        children: [
          !nestLabel ? tooltipLabel : null,
          /* @__PURE__ */ jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "flex w-full flex-wrap items-stretch gap-2",
                  indicator === "dot" && "items-center"
                ),
                children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  itemConfig?.icon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "shrink-0",
                        {
                          "h-2.5 w-2.5": indicator === "dot",
                          "w-1": indicator === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                          "my-0.5": nestLabel && indicator === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "grid gap-1.5", children: [
                          nestLabel ? tooltipLabel : null,
                          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name })
                        ] }),
                        item.value && /* @__PURE__ */ jsx("span", { className: "font-mono font-medium", children: item.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              item.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";
const ChartLegendContent = React.forwardRef(
  ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    if (!payload?.length) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        ),
        children: payload.map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: cn(
                "flex items-center gap-1.5"
              ),
              children: [
                itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx(itemConfig.icon, {}) : /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0",
                    style: {
                      backgroundColor: item.color
                    }
                  }
                ),
                itemConfig?.label
              ]
            },
            item.value
          );
        })
      }
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
const initialChartData = [
  { date: "2024-04-16", Lesen: Math.random() * 700 + 100 + 10, Schreiben: Math.random() * 700 + 100 + 10 },
  { date: "2024-04-17", Lesen: Math.random() * 700 + 100 + 10, Schreiben: Math.random() * 700 + 100 + 10 },
  { date: "2024-04-18", Lesen: Math.random() * 700 + 100 + 10, Schreiben: Math.random() * 700 + 100 + 10 },
  { date: "2024-04-19", Lesen: Math.random() * 700 + 100 + 10, Schreiben: Math.random() * 700 + 100 + 10 },
  { date: "2024-04-20", Lesen: Math.random() * 700 + 100 + 10, Schreiben: Math.random() * 700 + 100 + 10 },
  { date: "2024-04-18", Lesen: Math.random() * 700 + 100 + 10, Schreiben: Math.random() * 700 + 100 + 10 }
];
const chartConfig = {
  visitors: {
    label: "Visitors"
  },
  Lesen: {
    label: "Lesen",
    color: "hsl(var(--chart-1))"
  },
  Schreiben: {
    label: "Schreiben",
    color: "hsl(var(--chart-4))"
  }
};
function MyChart() {
  const [chartData, setChartData] = React.useState(initialChartData);
  const [timeRange, setTimeRange] = React.useState("90d");
  React.useEffect(() => {
    const interval = setInterval(() => {
      setChartData(
        (prevData) => prevData.map((item) => ({
          ...item,
          Lesen: item.Lesen = Math.random() * 500 + 100 + 10,
          Schreiben: item.Schreiben = Math.random() * 500 + 100 + 10
        }))
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = /* @__PURE__ */ new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return /* @__PURE__ */ jsx(
    ChartContainer,
    {
      config: chartConfig,
      className: "aspect-auto h-[400px] w-full p-0 m-0",
      children: /* @__PURE__ */ jsxs(AreaChart, { data: filteredData, children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs("linearGradient", { id: "fillLesen", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx(
              "stop",
              {
                offset: "5%",
                stopColor: "var(--color-Lesen)",
                stopOpacity: 1
              }
            ),
            /* @__PURE__ */ jsx(
              "stop",
              {
                offset: "100%",
                stopColor: "var(--color-Lesen)",
                stopOpacity: 1
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("linearGradient", { id: "fillSchreiben", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx(
              "stop",
              {
                offset: "100%",
                stopColor: "var(--color-Schreiben)",
                stopOpacity: 1
              }
            ),
            /* @__PURE__ */ jsx(
              "stop",
              {
                offset: "100%",
                stopColor: "var(--color-Schreiben)",
                stopOpacity: 1
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Area,
          {
            dataKey: "Schreiben",
            type: "natural",
            fill: "url(#fillSchreiben)",
            stroke: "var(--color-Schreiben)",
            stackId: "a"
          }
        ),
        /* @__PURE__ */ jsx(
          Area,
          {
            dataKey: "Lesen",
            type: "natural",
            fill: "url(#fillLesen)",
            stroke: "var(--color-Lesen)",
            stackId: "a"
          }
        )
      ] })
    }
  );
}
export {
  MyChart as M
};

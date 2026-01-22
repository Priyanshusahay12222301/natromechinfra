// Chart component disabled to prevent WebAssembly loading issues
// This component is not used in the current application

import * as React from "react";

export type ChartConfig = Record<string, {
  label?: React.ReactNode;
  icon?: React.ComponentType;
  color?: string;
  theme?: Record<string, string>;
}>;

export const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & {
  config: ChartConfig;
  children: React.ReactElement;
}>((props, ref) => null);
ChartContainer.displayName = "ChartContainer";

export const ChartTooltip = (props: any) => null;
export const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
ChartTooltipContent.displayName = "ChartTooltipContent";

export const ChartLegend = (props: any) => null;
export const ChartLegendContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
ChartLegendContent.displayName = "ChartLegendContent";

export const ChartStyle = (props: { id: string; config: ChartConfig }) => null;

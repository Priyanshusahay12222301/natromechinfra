import * as React from "react";

export const ToggleGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
ToggleGroup.displayName = "ToggleGroup";

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return <button ref={ref} {...props} />;
});
ToggleGroupItem.displayName = "ToggleGroupItem";

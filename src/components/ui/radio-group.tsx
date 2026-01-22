import * as React from "react";

export const RadioGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
RadioGroup.displayName = "RadioGroup";

export const RadioGroupItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }>((props, ref) => {
  return <button ref={ref} {...props} />;
});
RadioGroupItem.displayName = "RadioGroupItem";

import * as React from "react";

export const Checkbox = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { checked?: boolean; onCheckedChange?: (checked: boolean) => void }>((props, ref) => {
  return <button ref={ref} {...props} />;
});
Checkbox.displayName = "Checkbox";

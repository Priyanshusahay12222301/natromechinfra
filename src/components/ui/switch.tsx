import * as React from "react";

export const Switch = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { checked?: boolean; onCheckedChange?: (checked: boolean) => void }>((props, ref) => {
  return <button ref={ref} {...props} />;
});
Switch.displayName = "Switch";

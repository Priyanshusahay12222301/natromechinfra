import * as React from "react";

export const Toggle = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return <button ref={ref} {...props} />;
});
Toggle.displayName = "Toggle";

export const toggleVariants = () => "";

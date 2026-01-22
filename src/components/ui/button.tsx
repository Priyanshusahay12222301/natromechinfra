import * as React from "react";

export const buttonVariants = () => "";

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return <button ref={ref} {...props} />;
});
Button.displayName = "Button";

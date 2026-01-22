import * as React from "react";

export const Slider = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
Slider.displayName = "Slider";

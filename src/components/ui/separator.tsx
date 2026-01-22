import * as React from "react";

export const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
Separator.displayName = "Separator";

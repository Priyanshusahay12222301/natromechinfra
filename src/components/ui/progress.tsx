import * as React from "react";

export const Progress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value?: number }>((props, ref) => {
  return <div ref={ref} {...props} />;
});
Progress.displayName = "Progress";

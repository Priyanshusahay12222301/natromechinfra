import * as React from "react";

export const AspectRatio = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { ratio?: number }>((props, ref) => {
  return <div ref={ref} {...props} />;
});
AspectRatio.displayName = "AspectRatio";

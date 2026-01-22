import * as React from "react";

export const HoverCard = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const HoverCardTrigger = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const HoverCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
HoverCardContent.displayName = "HoverCardContent";

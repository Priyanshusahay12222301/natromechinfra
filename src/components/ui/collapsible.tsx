import * as React from "react";

export const Collapsible = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => <button ref={ref} {...props} />);
CollapsibleTrigger.displayName = "CollapsibleTrigger";
export const CollapsibleContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => <div ref={ref} {...props} />);
CollapsibleContent.displayName = "CollapsibleContent";

import * as React from "react";

export const TooltipProvider = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const Tooltip = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const TooltipTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => <button ref={ref} {...props} />);
TooltipTrigger.displayName = "TooltipTrigger";
export const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => <div ref={ref} {...props} />);
TooltipContent.displayName = "TooltipContent";

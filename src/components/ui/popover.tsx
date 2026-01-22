import * as React from "react";

export const Popover = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const PopoverTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => <button ref={ref} {...props} />);
PopoverTrigger.displayName = "PopoverTrigger";
export const PopoverContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => <div ref={ref} {...props} />);
PopoverContent.displayName = "PopoverContent";
export const PopoverAnchor = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => <div ref={ref} {...props} />);
PopoverAnchor.displayName = "PopoverAnchor";

import * as React from "react";

export const Sheet = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const SheetTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return <button ref={ref} {...props} />;
});
SheetTrigger.displayName = "SheetTrigger";

export const SheetClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return <button ref={ref} {...props} />;
});
SheetClose.displayName = "SheetClose";

export const SheetPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const SheetOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
SheetOverlay.displayName = "SheetOverlay";

export const SheetContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
SheetContent.displayName = "SheetContent";

export const SheetHeader = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};
SheetHeader.displayName = "SheetHeader";

export const SheetFooter = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};
SheetFooter.displayName = "SheetFooter";

export const SheetTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => {
  return <h2 ref={ref} {...props} />;
});
SheetTitle.displayName = "SheetTitle";

export const SheetDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => {
  return <p ref={ref} {...props} />;
});
SheetDescription.displayName = "SheetDescription";

import * as React from "react";

export const Dialog = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const DialogPortal = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const DialogOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => <div ref={ref} {...props} />);
DialogOverlay.displayName = "DialogOverlay";
export const DialogClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => <button ref={ref} {...props} />);
DialogClose.displayName = "DialogClose";
export const DialogTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => <button ref={ref} {...props} />);
DialogTrigger.displayName = "DialogTrigger";
export const DialogContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => <div ref={ref} {...props} />);
DialogContent.displayName = "DialogContent";
export const DialogHeader = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
export const DialogFooter = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>;
export const DialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => <h2 ref={ref} {...props} />);
DialogTitle.displayName = "DialogTitle";
export const DialogDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => <p ref={ref} {...props} />);
DialogDescription.displayName = "DialogDescription";

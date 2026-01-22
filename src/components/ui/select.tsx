import * as React from "react";

export const Select = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const SelectGroup = ({ children }: { children?: React.ReactNode }) => <>{children}</>;
export const SelectValue = ({ placeholder }: { placeholder?: string }) => <span>{placeholder}</span>;

export const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return <button ref={ref} {...props} />;
});
SelectTrigger.displayName = "SelectTrigger";

export const SelectScrollUpButton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
SelectScrollUpButton.displayName = "SelectScrollUpButton";

export const SelectScrollDownButton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
SelectScrollDownButton.displayName = "SelectScrollDownButton";

export const SelectContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
SelectContent.displayName = "SelectContent";

export const SelectLabel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
SelectLabel.displayName = "SelectLabel";

export const SelectItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>((props, ref) => {
  return <div ref={ref} {...props} />;
});
SelectItem.displayName = "SelectItem";

export const SelectSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
SelectSeparator.displayName = "SelectSeparator";

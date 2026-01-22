import * as React from "react";

export const Accordion = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  return <button ref={ref} {...props} />;
});
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return <div ref={ref} {...props} />;
});
AccordionContent.displayName = "AccordionContent";

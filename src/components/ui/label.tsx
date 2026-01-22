import * as React from "react";

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>((props, ref) => {
  return <label ref={ref} {...props} />;
});
Label.displayName = "Label";

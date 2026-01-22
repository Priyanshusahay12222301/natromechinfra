import * as React from "react";

export const badgeVariants = () => "";

export const Badge = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};

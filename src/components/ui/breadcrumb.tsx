import * as React from "react";

export const Breadcrumb = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => <nav ref={ref} {...props} />);
Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = React.forwardRef<HTMLOListElement, React.OlHTMLAttributes<HTMLOListElement>>((props, ref) => <ol ref={ref} {...props} />);
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>((props, ref) => <li ref={ref} {...props} />);
BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>((props, ref) => <a ref={ref} {...props} />);
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>((props, ref) => <span ref={ref} {...props} />);
BreadcrumbPage.displayName = "BreadcrumbPage";

export const BreadcrumbSeparator = ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => <li {...props}>{children}</li>;

export const BreadcrumbEllipsis = ({ ...props }: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>...</span>;

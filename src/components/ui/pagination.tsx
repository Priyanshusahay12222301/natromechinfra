import * as React from "react";

export const Pagination = ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => <nav {...props}>{children}</nav>;
export const PaginationContent = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>((props, ref) => <ul ref={ref} {...props} />);
PaginationContent.displayName = "PaginationContent";
export const PaginationItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>((props, ref) => <li ref={ref} {...props} />);
PaginationItem.displayName = "PaginationItem";
export const PaginationLink = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>;
export const PaginationPrevious = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>;
export const PaginationNext = ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>;
export const PaginationEllipsis = ({ ...props }: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>...</span>;

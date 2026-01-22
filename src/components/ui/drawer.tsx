// Drawer component disabled to prevent WebAssembly loading issues
// This component is not used in the current application

import * as React from "react";

export const Drawer = (props: any) => null;
export const DrawerTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => null);
export const DrawerPortal = (props: any) => null;
export const DrawerClose = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => null);
export const DrawerOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
export const DrawerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
export const DrawerHeader = (props: React.HTMLAttributes<HTMLDivElement>) => null;
export const DrawerFooter = (props: React.HTMLAttributes<HTMLDivElement>) => null;
export const DrawerTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>((props, ref) => null);
export const DrawerDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => null);

// Navigation Menu component disabled to prevent potential loading issues
// This component is not used in the current application

import * as React from "react";

export const NavigationMenu = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => null);
NavigationMenu.displayName = "NavigationMenu";

export const NavigationMenuList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>((props, ref) => null);
NavigationMenuList.displayName = "NavigationMenuList";

export const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>((props, ref) => null);
NavigationMenuItem.displayName = "NavigationMenuItem";

export const navigationMenuTriggerStyle = () => "";

export const NavigationMenuTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => null);
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export const NavigationMenuContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
NavigationMenuContent.displayName = "NavigationMenuContent";

export const NavigationMenuLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>((props, ref) => null);
NavigationMenuLink.displayName = "NavigationMenuLink";

export const NavigationMenuIndicator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";

export const NavigationMenuViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
NavigationMenuViewport.displayName = "NavigationMenuViewport";

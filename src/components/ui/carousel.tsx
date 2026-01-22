// Carousel component disabled to prevent WebAssembly loading issues
// This component is not used in the current application

import * as React from "react";

type CarouselApi = any;

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: any;
  plugins?: any;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>((props, ref) => null);
Carousel.displayName = "Carousel";

export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => null);
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => null);
CarouselNext.displayName = "CarouselNext";

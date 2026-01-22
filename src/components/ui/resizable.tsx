// Resizable component disabled to prevent potential loading issues
// This component is not used in the current application

import * as React from "react";

export const ResizablePanelGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
ResizablePanelGroup.displayName = "ResizablePanelGroup";

export const ResizablePanel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
ResizablePanel.displayName = "ResizablePanel";

export const ResizableHandle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { withHandle?: boolean }>((props, ref) => null);
ResizableHandle.displayName = "ResizableHandle";

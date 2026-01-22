// InputOTP component disabled to prevent WebAssembly loading issues
// This component is not used in the current application

import * as React from "react";

export const InputOTP = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => null);
InputOTP.displayName = "InputOTP";

export const InputOTPGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
InputOTPGroup.displayName = "InputOTPGroup";

export const InputOTPSlot = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { index: number }>((props, ref) => null);
InputOTPSlot.displayName = "InputOTPSlot";

export const InputOTPSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
InputOTPSeparator.displayName = "InputOTPSeparator";

// Form component disabled to prevent WebAssembly loading issues
// This component is not used in the current application

import * as React from "react";

type FormFieldContextValue = any;
type FormItemContextValue = any;

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);
const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

export const Form = (props: any) => null;
export const FormField = (props: any) => null;
export const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
FormItem.displayName = "FormItem";

export const FormLabel = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>((props, ref) => null);
FormLabel.displayName = "FormLabel";

export const FormControl = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => null);
FormControl.displayName = "FormControl";

export const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => null);
FormDescription.displayName = "FormDescription";

export const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>((props, ref) => null);
FormMessage.displayName = "FormMessage";

export const useFormField = () => ({
  invalid: false,
  isDirty: false,
  isTouched: false,
  isValidating: false,
  error: undefined,
});

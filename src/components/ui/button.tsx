import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "border border-transparent bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.99]",
  destructive:
    "border border-transparent bg-destructive text-white shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/20",
  outline:
    "border border-input bg-background shadow-xs hover:border-primary hover:bg-accent hover:text-accent-foreground",
  secondary:
    "border border-border/80 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-11 px-6 py-2.5 rounded-xl text-sm font-semibold",
  sm: "h-9 rounded-lg px-4 text-xs font-semibold",
  lg: "h-12 rounded-xl px-7 py-3.5 text-sm sm:text-base font-bold",
  icon: "h-11 w-11 p-0 rounded-xl",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const combinedClasses = cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 outline-none",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(combinedClasses, (children.props as { className?: string }).className),
        ...props,
      });
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

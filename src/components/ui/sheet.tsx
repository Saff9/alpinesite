"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const SheetContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export function Sheet({ open = false, onOpenChange, children }: SheetProps) {
  const [internalOpen, setInternalOpen] = React.useState(open);
  const isControlled = onOpenChange !== undefined;
  const currentOpen = isControlled ? open : internalOpen;

  const setOpen = React.useCallback(
    (value: boolean) => {
      if (onOpenChange) onOpenChange(value);
      else setInternalOpen(value);
    },
    [onOpenChange]
  );

  return (
    <SheetContext.Provider value={{ open: currentOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

export function SheetTrigger({
  asChild,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const ctx = React.useContext(SheetContext);
  if (!ctx) return null;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
      onClick: () => {
        (children.props as { onClick?: () => void }).onClick?.();
        ctx.setOpen(true);
      },
    });
  }

  return (
    <button type="button" onClick={() => ctx.setOpen(true)} {...props}>
      {children}
    </button>
  );
}

export function SheetContent({
  side = "right",
  className,
  children,
}: {
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(SheetContext);
  const [mounted, setMounted] = React.useState(ctx?.open ?? false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (ctx?.open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => {
        setVisible(true);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setVisible(false);
      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [ctx?.open]);

  React.useEffect(() => {
    if (!mounted) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") ctx?.setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [mounted, ctx]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out",
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => ctx?.setOpen(false)}
      />

      {/* Drawer with smooth slide in & slide out animation */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed top-0 bottom-0 z-50 h-full bg-background shadow-2xl transition-transform duration-300 ease-out will-change-transform",
          side === "right" && (visible ? "right-0 w-80 translate-x-0" : "right-0 w-80 translate-x-full"),
          side === "left" && (visible ? "left-0 w-80 translate-x-0" : "left-0 w-80 -translate-x-full"),
          className
        )}
      >
        <button
          type="button"
          onClick={() => ctx?.setOpen(false)}
          aria-label="Close navigation"
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground hover:bg-neutral-100 hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function SheetTitle({
  asChild,
  children,
  className,
}: {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  if (asChild && React.isValidElement(children)) {
    return children;
  }
  return <h2 className={cn("text-base font-semibold", className)}>{children}</h2>;
}

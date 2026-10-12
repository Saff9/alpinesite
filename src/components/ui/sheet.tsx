"use client";

import * as React from "react";
import { createPortal } from "react-dom";
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
  const isOpen = Boolean(ctx?.open);
  const [closing, setClosing] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      const raf = requestAnimationFrame(() => {
        setClosing(false);
        setVisible(true);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      const raf = requestAnimationFrame(() => {
        setVisible(false);
        setClosing(true);
      });
      const timer = setTimeout(() => {
        setClosing(false);
      }, 300);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  const mounted = isOpen || closing || visible;

  React.useEffect(() => {
    if (!mounted) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") ctx?.setOpen(false);
    }
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyOverscroll = body.style.overscrollBehavior;

    document.addEventListener("keydown", handleKeyDown);
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;
    };
  }, [mounted, ctx]);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-hidden overscroll-none">
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-out touch-none",
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => ctx?.setOpen(false)}
      />

      {/* Drawer with smooth slide in & slide out animation and exact visible viewport height */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-y-0 z-50 flex h-full max-h-full flex-col bg-background shadow-2xl transition-transform duration-300 ease-out will-change-transform",
          side === "right" && (visible ? "right-0 w-[86vw] max-w-80 translate-x-0 sm:max-w-88" : "right-0 w-[86vw] max-w-80 translate-x-full sm:max-w-88"),
          side === "left" && (visible ? "left-0 w-[86vw] max-w-80 translate-x-0 sm:max-w-88" : "left-0 w-[86vw] max-w-80 -translate-x-full sm:max-w-88"),
          className
        )}
      >
        <button
          type="button"
          onClick={() => ctx?.setOpen(false)}
          aria-label="Close navigation"
          className="absolute right-3.5 top-3.5 z-10 rounded-lg p-2 text-muted-foreground hover:bg-neutral-100 hover:text-foreground transition-colors sm:right-4 sm:top-4"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body
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

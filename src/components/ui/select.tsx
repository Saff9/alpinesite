"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectContextType {
  value: string;
  onValueChange?: (val: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerId?: string;
  selectedLabel: string;
  setSelectedLabel: (label: string) => void;
}

const SelectContext = React.createContext<SelectContextType | null>(null);

export function Select({
  value = "",
  onValueChange,
  children,
}: {
  value?: string;
  onValueChange?: (val: string) => void;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState("");

  return (
    <SelectContext.Provider
      value={{
        value,
        onValueChange,
        isOpen,
        setIsOpen,
        selectedLabel,
        setSelectedLabel,
      }}
    >
      <div className="relative inline-block w-full">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) return null;

  return (
    <button
      id={id}
      type="button"
      onClick={() => ctx.setIsOpen(!ctx.isOpen)}
      className={cn(
        "border-input flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm shadow-xs transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      aria-expanded={ctx.isOpen}
    >
      <div className="flex-1 text-left truncate">{children}</div>
      <ChevronDown className={cn("ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform", ctx.isOpen && "rotate-180")} />
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) return null;
  return <span className={cn(!ctx.selectedLabel && !ctx.value && "text-muted-foreground")}>{ctx.selectedLabel || ctx.value || placeholder}</span>;
}

export function SelectContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(SelectContext);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ctx?.isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        ctx?.setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ctx]);

  if (!ctx?.isOpen) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 top-full z-50 mt-1 max-h-60 w-full min-w-[8rem] overflow-y-auto rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-50 zoom-in-95",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SelectItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(SelectContext);
  const isSelected = ctx?.value === value;

  React.useEffect(() => {
    if (isSelected && typeof children === "string" && ctx?.setSelectedLabel) {
      ctx.setSelectedLabel(children);
    }
  }, [isSelected, children, ctx]);

  if (!ctx) return null;

  return (
    <button
      type="button"
      onClick={() => {
        ctx.onValueChange?.(value);
        if (typeof children === "string") ctx.setSelectedLabel(children);
        ctx.setIsOpen(false);
      }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 px-3 text-sm text-left outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        isSelected && "bg-accent/80 font-semibold text-foreground",
        className
      )}
    >
      <span className="truncate">{children}</span>
    </button>
  );
}

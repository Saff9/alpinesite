"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export function Accordion({
  defaultValue,
  type = "single",
  collapsible = true,
  className,
  children,
}: {
  defaultValue?: string | string[];
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const isOpen = prev.includes(value);
        if (type === "single") {
          if (isOpen) {
            return collapsible ? [] : prev;
          }
          return [value];
        } else {
          return isOpen ? prev.filter((v) => v !== value) : [...prev, value];
        }
      });
    },
    [type, collapsible]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("divide-y divide-border", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextType {
  value: string;
  isOpen: boolean;
}

const AccordionItemContext = React.createContext<AccordionItemContextType | null>(null);

export function AccordionItem({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(AccordionContext);
  const isOpen = ctx ? ctx.openItems.includes(value) : false;

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn("border-b border-border last:border-b-0", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const accordion = React.useContext(AccordionContext);
  const item = React.useContext(AccordionItemContext);

  if (!accordion || !item) return null;

  return (
    <button
      type="button"
      onClick={() => accordion.toggleItem(item.value)}
      aria-expanded={item.isOpen}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-colors hover:underline outline-none cursor-pointer",
        className
      )}
    >
      <div className="flex-1 min-w-0 pr-4">{children}</div>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
          item.isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const item = React.useContext(AccordionItemContext);
  if (!item || !item.isOpen) return null;

  return (
    <div className={cn("overflow-hidden pb-4 text-sm transition-all", className)}>
      {children}
    </div>
  );
}

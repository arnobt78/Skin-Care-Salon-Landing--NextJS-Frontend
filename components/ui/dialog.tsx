/**
 * Dialog Component - shadcn/ui Dialog
 * 
 * Modal dialog component built on Radix UI primitives
 * Used for ModalVideo component to display video in a modal overlay
 * 
 * Features:
 * - Accessible (keyboard navigation, focus management, ARIA attributes)
 * - Animations (fade in/out, scale, slide)
 * - Overlay backdrop
 * - Close button
 * - Portal rendering (renders outside DOM hierarchy)
 * 
 * This is a shadcn/ui component - see: https://ui.shadcn.com/docs/components/dialog
 */
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

// Export Radix UI primitives as named exports
const Dialog = DialogPrimitive.Root; // Root component that manages dialog state
const DialogTrigger = DialogPrimitive.Trigger; // Element that opens the dialog
const DialogPortal = DialogPrimitive.Portal; // Portals content outside DOM hierarchy
const DialogClose = DialogPrimitive.Close; // Element that closes the dialog

/**
 * DialogOverlay - Backdrop that appears behind dialog content
 * Uses forwardRef to allow parent components to access the DOM node
 * Includes fade-in/out animations based on dialog state
 */
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

/**
 * DialogContent - Main content container for the dialog
 * Wraps content in a Portal and includes overlay
 * Features:
 * - Centered positioning (50% top/left with transform)
 * - Responsive width (90vw mobile, 70vw tablet, 40vw desktop)
 * - Animations (fade, zoom, slide)
 * - Built-in close button (X icon)
 */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid p-4 w-[90vw] md:w-[70vw] xl:w-[40vw] h-[480px] translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
        className
      )}
      {...props}
    >
      {children}
      {/* Close button with X icon - positioned absolutely outside content area */}
      <DialogPrimitive.Close className="absolute -right-2 -top-10 xl:-right-7 rounded-sm opacity-80 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
        <X className="h-8 w-8 text-white" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

/**
 * DialogHeader - Container for dialog title and description
 * Responsive text alignment (centered on mobile, left on desktop)
 */
const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

/**
 * DialogFooter - Container for dialog actions (buttons)
 * Responsive layout: stacked on mobile, row on desktop
 */
const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

/**
 * DialogTitle - Accessible title for the dialog
 * Uses Radix UI primitive for proper ARIA attributes
 */
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

/**
 * DialogDescription - Accessible description for the dialog
 * Provides additional context for screen readers
 */
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

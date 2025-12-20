/**
 * Utility Functions
 *
 * cn (className) utility function
 * Combines clsx and tailwind-merge for optimal className handling
 *
 * Features:
 * - clsx: Conditionally joins classNames together
 * - twMerge: Intelligently merges Tailwind CSS classes, resolving conflicts
 *
 * Example usage:
 * cn("px-2 py-1", isActive && "bg-blue-500", "px-4")
 * // Result: "py-1 bg-blue-500 px-4" (px-2 is overridden by px-4)
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines classNames with Tailwind conflict resolution
 * @param inputs - Array of classNames (strings, objects, arrays, or conditionals)
 * @returns Merged className string with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

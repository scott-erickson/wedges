import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Prevents output of unnecessary Tailwind classes and merges classes.
 *
 * @param inputs - Any number of class names or class name arrays.
 * @returns A string of merged class names.
 */

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

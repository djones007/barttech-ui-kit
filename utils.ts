import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Join class names and let later Tailwind classes win over earlier ones (`px-2` then `px-4` → `px-4`). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

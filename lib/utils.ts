import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wordCount(text: string) {
  return text.split(" ").length
}

export function readingTime(text: string) {
  const wpm = 225;

  return Math.ceil(wordCount(text)/ wpm);
}

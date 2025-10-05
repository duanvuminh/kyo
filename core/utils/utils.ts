import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function randomArrayElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
/**
 * get all values of enum.
 *
 * @template T - enum.
 * @param {T} enumObj - Input enum object.
 * @returns {T[keyof T][]} - return enum.
 */
export function getEnumValues<T extends object>(enumObj: T): T[keyof T][] {
  return Object.keys(enumObj)
    .filter((key) => isNaN(Number(key)))
    .map((key) => enumObj[key as keyof T]);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function trimLineBreak(value: string) {
  return value.trim().replaceAll(/[\r\n]+/g, "");
}

/**
 * Convert a time string in the format "HH:MM:SS.MS" to seconds.
 *
 *  * Example:
 *   timeStringToSeconds("00:00:04.380") => 4.38
 *
 * @param {string} timeStr - The time string to convert.
 * @returns {number} - The total number of seconds.
 */
export function timeStringToSeconds(timeStr: string): number {
  const [hh, mm, ssMs] = timeStr.split(":");
  const [ss, ms] = ssMs.split(".");
  return (
    parseInt(hh, 10) * 3600 +
    parseInt(mm, 10) * 60 +
    parseInt(ss, 10) +
    parseInt(ms, 10) / 1000
  );
}

export function stripUndefined<T extends Record<string, unknown>>(
  obj: T
): Partial<{ [K in keyof T]: Exclude<T[K], undefined> }> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined)
  ) as Partial<{ [K in keyof T]: Exclude<T[K], undefined> }>;
}

export function hasYouTubeLink(str?: string): boolean {
  if (!str) return false;
  return /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\//.test(str);
}

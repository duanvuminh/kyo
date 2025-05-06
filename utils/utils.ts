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

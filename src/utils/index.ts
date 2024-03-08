import { StorageValue } from "zustand/middleware";

export function sum(a: number, b: number): number {
  return a + b;
}

export function getStorageItem<T>(name: string): StorageValue<T> {
  return JSON.parse(localStorage.getItem(name) || "");
}

export function checkInputNumber(value: string) {
  const validated = Number(value).toString();
  return validated == value;
}

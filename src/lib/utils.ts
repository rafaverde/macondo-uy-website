import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Cria data por extenso em espanhol (dd de mmmm de yyyy)
const actualDate = new Date();
const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const spanishDate = new Intl.DateTimeFormat("es-ES", dateOptions).format(
  actualDate,
);

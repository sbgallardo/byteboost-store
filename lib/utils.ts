import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {ReadonlyURLSearchParams} from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSingleImageOrDefault(images: string | string[] | null) : string {
  const defaultImage: string = "/no-image.png";
  if (images === null) return defaultImage
  if (Array.isArray(images)) {
    return images[0]
  } else {
    return images
  }
}

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

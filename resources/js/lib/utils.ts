import { InertiaLinkProps } from '@inertiajs/react';
import { type ClassValue, clsx } from 'clsx';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
  return typeof url === 'string' ? url : url.url;
}

export function debounce<T>(fn: (...args: T[]) => void, delay = 300) {
  let timeoutId: any;

  return function (...arg: T[]) {
    // @ts-ignore
    let context: any = this;
    let args: any = arguments;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

export function useListStorage<T>(key: string, initValues?: T[]) {
  return useMemo(() => {
    // Save full data
    function write(data: T[]) {
      localStorage.setItem(key, JSON.stringify(data));
    }

    // Read data (default array)
    function read(): T[] {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.error('Failed to parse localStorage:', e);
        return [];
      }
    }

    // Append new item
    function append(item: T) {
      const current = read();
      const updated = [...current, item];
      write(updated);
      return updated;
    }

    // Clear
    function clear() {
      localStorage.removeItem(key);
    }

    if (initValues?.length && !localStorage.getItem(key)) {
      write(initValues);
    }

    return { read, write, append, clear };
  }, [key]);
}

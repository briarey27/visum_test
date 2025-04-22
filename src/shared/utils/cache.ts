import { unstable_cache } from 'next/cache';

type Callback<T extends unknown[], R> = (...args: T) => Promise<R>;

export const cache = <T extends unknown[], R>(
  fn: Callback<T, R>,
  revalidate: number,
  ...tags: string[]
) => {
  return unstable_cache(fn, [fn.name], {
    tags: [fn.name, ...tags],
    revalidate,
  });
};

'use server';

import { Post } from '@/serverActions/types';

interface ReqQuery {
  start?: number;
  limit?: number;
}

export const GetPosts = async ({ start = 0, limit = 20 }: ReqQuery = {}): Promise<
  Post[] | Error
> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      return new Error(`Failed post fetch. status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      return error;
    } else {
      return new Error('Unknown error');
    }
  }
};

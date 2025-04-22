'use server';

import { Post } from '@/serverActions/types';
import { cache } from '@/shared/utils/cache';

interface ReqQuery {
  postId: string;
}

const ONE_HOUR_CACHE = 3600;

const fn = async ({ postId }: ReqQuery): Promise<Post | Error> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      next: {
        revalidate: 3600,
      },
    });
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

export const GetPost = cache(fn, ONE_HOUR_CACHE, 'GetPost');

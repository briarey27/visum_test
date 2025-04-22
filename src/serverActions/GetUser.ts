'use server';

import { Author } from '@/serverActions/types';

interface ReqQuery {
  userId: string;
}

export const GetUser = async ({ userId }: ReqQuery): Promise<Author | Error> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return new Error(`Failed user fetch. status: ${response.status}`);
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

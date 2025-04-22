'use server';

import { UserPost } from '@/serverActions/types';
import { GetPost } from '@/serverActions/GetPost';
import { GetUser } from '@/serverActions/GetUser';

interface ReqQuery {
  postId: string;
}

export const GetUsersPost = async ({ postId }: ReqQuery): Promise<UserPost | Error> => {
  try {
    const post = await GetPost({ postId });
    if (post instanceof Error) return post;

    const user = await GetUser({ userId: post.userId.toString() });
    if (user instanceof Error) return user;

    return { ...post, user };
  } catch (error) {
    if (error instanceof Error) {
      return error;
    } else {
      return new Error('Unknown error');
    }
  }
};

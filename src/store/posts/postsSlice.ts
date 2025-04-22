'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '@/serverActions/types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getInfinitePosts: builder.infiniteQuery<Post[], number, number>({
      infiniteQueryOptions: {
        initialPageParam: 0,
        maxPages: 6,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          return lastPageParam + 1;
        },
        getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
          return firstPageParam > 0 ? firstPageParam - 1 : undefined;
        },
      },
      query({ queryArg, pageParam }) {
        return `posts?_start=${pageParam * queryArg}&_limit=${queryArg}`;
      },
    }),
  }),
});

export const { useGetInfinitePostsInfiniteQuery } = postsApi;

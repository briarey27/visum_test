'use client';

import { Grid } from '@mui/material';
import { Post } from '@/serverActions/types';
import { PostCard } from '@/entities/post/ui/PostCard';
import { InfiniteData } from '@reduxjs/toolkit/query';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useGetInfinitePostsInfiniteQuery } from '@/store/posts/postsSlice';
import { PostsListLoader } from '@/features/PostsListLoader';

const PAGE_SIZE = 12;

const flatResults = (data: Post[][]): Post[] => {
  return data.flat() ?? [];
};

const isLastPage = (data: InfiniteData<Post[], number> | undefined): boolean => {
  const lastPageLength = data?.pages.at(-1)?.length || 0;
  return lastPageLength < PAGE_SIZE;
};

export const PostsList = () => {
  const { ref: previousRef, inView: inViewPrevious } = useInView({ delay: 100 });
  const { ref: nextRef, inView: inViewNext } = useInView({ delay: 100 });

  const [posts, setPosts] = useState<Post[]>([]);
  const { data, isFetching, fetchNextPage, fetchPreviousPage, isLoading } =
    useGetInfinitePostsInfiniteQuery(PAGE_SIZE);

  useEffect(() => {
    if (isLastPage(data) && data?.pages) {
      setPosts(flatResults(data.pages));
      return;
    }

    if (inViewNext && !isFetching) {
      fetchNextPage().then(() => {
        if (data?.pages) {
          setPosts(flatResults(data.pages));
        }
      });
    }
  }, [data, fetchNextPage, inViewNext, isFetching]);

  useEffect(() => {
    if (inViewPrevious && !isFetching) {
      fetchPreviousPage().then(() => {
        if (data?.pages) {
          setPosts(flatResults(data.pages));
        }
      });
    }
  }, [data, fetchPreviousPage, inViewPrevious, isFetching]);

  return (
    <div>
      <div ref={previousRef} style={{ height: 20 }} />
      <Grid container spacing={2} alignItems="stretch">
        {posts.map((post) => {
          return (
            <Grid key={post.id} size={{ xs: 12, md: 2 }}>
              <PostCard post={post} />
            </Grid>
          );
        })}

        {(isLoading || isFetching) && <PostsListLoader amount={6} />}
      </Grid>

      <div ref={nextRef} style={{ height: 20 }} />
    </div>
  );
};

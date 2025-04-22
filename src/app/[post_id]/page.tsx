import { GetUsersPost } from '@/serverActions/GetUsersPost';
import { CurrentPostView } from '@/view/CurrentPostView';

type IProps = {
  params: Promise<{ post_id: string }>;
};

export default async function PostPage({ params }: IProps) {
  const { post_id } = await params;

  const pageData = await GetUsersPost({ postId: post_id });

  if (pageData instanceof Error) {
    return <div>Post not found</div>;
  }

  return <CurrentPostView post={pageData} />;
}

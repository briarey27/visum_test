import { Grid, Skeleton } from '@mui/material';

interface IProps {
  amount: number;
}
export const PostsListLoader = ({ amount }: IProps) => {
  const arr = Array(amount)
    .fill(0)
    .map((_, i) => i);

  return (
    <>
      {arr.map((_, index) => {
        return (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Skeleton variant="rectangular" height={130} />
          </Grid>
        );
      })}
    </>
  );
};

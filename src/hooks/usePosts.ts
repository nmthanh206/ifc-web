import axios from 'axios';
import { useQuery } from 'react-query';

import { IPost } from '@/types/post';
import { catchAsync } from '@/utils/catchAsync';

const getPosts = catchAsync(async () => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`,
  );

  return data;
});

export const usePosts = () => {
  return useQuery<IPost[], Error>(['getPosts'], getPosts, {
    onSuccess: (posts) => {
      console.log('🚀 ~ file: usePost.ts ~ line 14 ~ posts', posts);
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

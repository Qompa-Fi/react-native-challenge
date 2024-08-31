import api from "./api.service";

export const getPosts = (page = 1) => {
  return api.get(`/posts`, {
    params: {
      _page: page,
      _limit: 10,
    },
  });
};

export const getPostById = (postId) => {
  return api.get(`/posts/${postId}`);
};

export const getCommentsByPostId = (postId) => {
  return api.get(`/posts/${postId}/comments`);
};

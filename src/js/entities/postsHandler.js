export default function postsHandler(handlerPosts) {
  const posts = handlerPosts || [];
  return {
    get posts() {
      return posts;
    }
  };
}

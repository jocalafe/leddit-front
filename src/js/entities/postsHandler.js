export default function postsHandler(initialPosts = []) {
  const posts = initialPosts || [];
  return {
    get posts() {
      return posts;
    }
  };
}

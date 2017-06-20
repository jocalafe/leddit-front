export default function commentsHandler(handlerComments) {
  let comments = handlerComments || [];
  return {
    get comments() {
      return comments;
    },
    addComment(comment) {
      comments = [...comments, comment];
    },
    deleteComment(id) {
      comments = comments.filter(comment => comment.id !== id);
    }
  };
}

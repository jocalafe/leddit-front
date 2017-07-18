export default function commentsHandler(initialComments) {
  let comments = initialComments || [];
  return {
    get comments() {
      return comments;
    },
    setComments(newComments) {
      comments = [...newComments];
    },
    addComment(comment) {
      comments = [...comments, comment];
    },
    deleteComment(id) {
      comments = comments.filter(comment => comment.id !== id);
    }
  };
}

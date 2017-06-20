export default function comment(commentId, commentText) {
  const id = commentId;
  let text = commentText;
  return {
    get text() {
      return text;
    },
    get id() {
      return id;
    },
    setText(newText) {
      text = newText;
    }
  };
}

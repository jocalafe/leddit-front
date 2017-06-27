import commentsHandler from './commentsHandler';
import voteHandler from './voteHandler';

export default function comment(commentId, commentText, commentAuthor, commentComments, commentVotes) {
  const id = commentId;
  let text = commentText;
  const author = commentAuthor;
  return {
    get id() {
      return id;
    },
    get text() {
      return text;
    },
    get author() {
      return author;
    },
    commentsHandler: commentsHandler(commentComments),
    voteHandler: voteHandler(commentVotes),
    setText(newText) {
      text = newText;
    }
  };
}

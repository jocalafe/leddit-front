import commentsHandler from './commentsHandler';
import voteHandler from './voteHandler';

export default function comment(id, text, author, comments, votes) {
  return {
    get id() {
      return id;
    },
    get text() {
      return text;
    },
    setText(newText) {
      text = newText;
    },
    get author() {
      return author;
    },
    commentsHandler: commentsHandler(comments),
    voteHandler: voteHandler(votes)
  };
}

import commentsHandler from './commentsHandler';
import voteHandler from './voteHandler';

export default function post(id, title, link, initialDescription, author, comments, votes) {
  let description = initialDescription || '';
  return {
    get id() {
      return id;
    },
    get title() {
      return title;
    },
    get link() {
      return link;
    },
    get description() {
      return description;
    },
    setDescription(newDescription) {
      description = newDescription;
    },
    get author() {
      return author;
    },
    commentsHandler: commentsHandler(comments),
    voteHandler: voteHandler(votes),
  };
}

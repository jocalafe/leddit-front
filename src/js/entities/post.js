import commentsHandler from './commentsHandler';
import voteHandler from './voteHandler';

export default function post(postTitle, postLink, postDescription, postAuthor, postComments, postVotes) {
  const title = postTitle;
  const link = postLink || '';
  let description = postDescription || '';
  const author = postAuthor;
  return {
    get title() {
      return title;
    },
    get link() {
      return link;
    },
    get description() {
      return description;
    },
    get author() {
      return author;
    },
    commentsHandler: commentsHandler(postComments),
    voteHandler: voteHandler(postVotes),
    setDescription(newDescription) {
      description = newDescription;
    }
  };
}

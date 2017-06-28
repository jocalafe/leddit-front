import commentsHandler from './commentsHandler';
import voteHandler from './voteHandler';

export default function post(postId, postTitle, postLink, postDescription, postAuthor, postComments, postVotes) {
  const id = postId;
  const title = postTitle;
  const link = postLink || '';
  let description = postDescription || '';
  const author = postAuthor;
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

import postsHandler from './postsHandler';
import voteHandler from './voteHandler';

export default function subreddit(subredditId, subredditName, subredditBanner, subredditPosts, subredditVotes) {
  const id = subredditId;
  const name = subredditName;
  const banner = subredditBanner;
  if (subredditName === undefined) {
    throw new Error('subreddit name is required');
  }
  if (subredditName === '') {
    throw new Error('subreddit name should not be empty');
  }
  return {
    get id() {
      return id;
    },
    get name() {
      return name;
    },
    get banner() {
      return banner;
    },
    postsHandler: postsHandler(subredditPosts),
    voteHandler: voteHandler(subredditVotes)
  };
}

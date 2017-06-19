export default function subreddit(name) {
  const subredditName = name;
  if (subredditName === undefined) {
    throw new Error('subreddit name is required');
  }
  if (subredditName === ''){
    throw new Error('subreddit name should not be empty');
  }
  return {
    get name() {
      return subredditName;
    }
  }
}

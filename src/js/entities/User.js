export default function user(username) {
  let self = {
    username,
    subscribedSubreddits: [],
    subscribeToSubreddit(subredditId) {
      self.subscribedSubreddits = [...self.subscribedSubreddits, subredditId];
    },
    unSubscribeFromSubreddit(subredditId) {
      self.subscribedSubreddits = self.subscribedSubreddits.filter(id => id !== subredditId);
    }
  }
  return self;

}

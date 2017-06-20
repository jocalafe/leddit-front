export default function user(name) {
  const userName = name;
  let subscribedSubreddits = [];
  return {
    get name() {
      return userName;
    },
    get subscribedSubreddits() {
      return subscribedSubreddits;
    },
    subscribeToSubreddit(subredditId) {
      subscribedSubreddits = [...subscribedSubreddits, subredditId];
    },
    unSubscribeFromSubreddit(subredditId) {
      subscribedSubreddits = subscribedSubreddits.filter(id => id !== subredditId);
    }
  };
}


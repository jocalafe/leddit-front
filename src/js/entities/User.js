const user = (name) => {
  const userName = name;
  let subscribedSubreddits = [];
  const self = {
    getUserName() {
      return userName;
    },
    getSubscribedSubreddits() {
      return subscribedSubreddits;
    },
    subscribeToSubreddit(subredditId) {
      subscribedSubreddits = [...subscribedSubreddits, subredditId];
    },
    unSubscribeFromSubreddit(subredditId) {
      subscribedSubreddits = subscribedSubreddits.filter(id => id !== subredditId);
    }
  }
  return self;

}

export default user;

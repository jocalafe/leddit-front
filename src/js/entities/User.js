export default function user(userId, userName, userSubscribedSubreddits) {
  const id = userId;
  const name = userName;
  let subscribedSubreddits = userSubscribedSubreddits || [];
  return {
    get id() {
      return id;
    },
    get name() {
      return name;
    },
    get subscribedSubreddits() {
      return subscribedSubreddits;
    },
    subscribeToSubreddit(subredditId) {
      subscribedSubreddits = [...subscribedSubreddits, subredditId];
    },
    unSubscribeFromSubreddit(subredditId) {
      subscribedSubreddits = subscribedSubreddits.filter(subscribedId => subscribedId !== subredditId);
    }
  };
}


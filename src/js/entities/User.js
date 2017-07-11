export default function user(userId, userName, userSubscriptions) {
  const id = userId;
  const name = userName;
  let subscriptions = userSubscriptions || [];
  return {
    get id() {
      return id;
    },
    get name() {
      return name;
    },
    get subscriptions() {
      return subscriptions;
    },
    subscribeToSubreddit(subredditId) {
      subscriptions = [...subscriptions, subredditId];
    },
    unSubscribeFromSubreddit(subredditId) {
      subscriptions = subscriptions.filter(subscribedId => subscribedId !== subredditId);
    }
  };
}


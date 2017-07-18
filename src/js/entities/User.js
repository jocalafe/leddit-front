export default function user(id, name, initialSubscriptions = []) {
  let subscriptions = initialSubscriptions;
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


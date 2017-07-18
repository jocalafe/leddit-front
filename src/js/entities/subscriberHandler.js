export default function subscriberHandler(handlerSubscribers) {
  const subscribers = handlerSubscribers || [];
  return {
    get subscribers() {
      return subscribers;
    }
  };
}

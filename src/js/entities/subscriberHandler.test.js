import subscriberHandler from './subscriberHandler';
import user from './user';

describe('subscriber handler factory function', () => {
  it('returns an object', () => {
    expect(subscriberHandler()).toEqual(expect.any(Object));
  });
});

describe('subscriber handler object', () => {
  const subscribers = [user(1, 'user1'), user(2, 'user2')];
  const subscriberHandler1 = subscriberHandler(subscribers);
  it('can get its subscribers', () => {
    expect(subscriberHandler1.subscribers).toEqual(subscribers);
  });
});

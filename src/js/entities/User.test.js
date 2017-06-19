import user from './user';

describe('user', () => {
  it("can get the username", () => {
    const username = 'user1';
    const user1 = user(username);
    expect(user1.getUserName()).toBe(username);
  });
  it("can subscribe to a subreddit", () => {
    const user1 = user('user1');
    const subredditId = 1;
    user1.subscribeToSubreddit(subredditId);
    expect(user1.getSubscribedSubreddits()).toEqual([subredditId]);
  });
  it("can unsubscribe to a subreddit", () => {
    const user1 = user('user1');
    const subredditId = 1;
    user1.subscribeToSubreddit(subredditId);
    user1.unSubscribeFromSubreddit(subredditId);
    expect(user1.getSubscribedSubreddits()).toEqual([]);
  });
});

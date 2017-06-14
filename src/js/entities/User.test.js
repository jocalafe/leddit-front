import User from './User';

describe('User', () => {
  it("can have a username", () => {
    const username = 'user1';
    const user1 = new User(username);
    expect(user1.username).toBe(username);
  });
  it("can subscribe to a subreddit", () => {
    const user1 = new User('user1');
    const subredditId = 1;
    user1.subscribeToSubreddit(subredditId);
    expect(user1.subscribedSubreddits).toEqual([subredditId]);
  });
  it("can unsubscribe to a subreddit", () => {
    const user1 = new User('user1');
    const subredditId = 1;
    user1.subscribeToSubreddit(subredditId);
    user1.unSubscribeFromSubreddit(subredditId);
    expect(user1.subscribedSubreddits).toEqual([]);
  });
});

import subreddit from './subreddit';

describe('Subreddit factory function', () => {
  it('should create a Subreddit object with a given name', () => {
    const name = 'testSub';
    const subreddit1 = subreddit(name);
    expect(subreddit1.name).toEqual(name);
  });
});

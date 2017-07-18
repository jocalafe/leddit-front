import subreddit from './subreddit';

describe('Subreddit factory function', () => {
  it('should return an object', () => {
    expect(subreddit(1, 'test')).toEqual(expect.any(Object));
  });
  it('should throw unnamed subreddit error when name is not supplied', () => {
    expect(() => {
      subreddit();
    }).toThrow('subreddit name is required');
  });

  it('should throw subreddit name should not be empty error when name is empty', () => {
    expect(() => {
      subreddit(1, '');
    }).toThrow('subreddit name should not be empty');
  });
});

describe('subreddit object', () => {
  let testSubreddit;

  beforeEach(() => {
    testSubreddit = subreddit(1, 'testSub', 'banner');
  });

  it('can get its id', () => {
    expect(testSubreddit.id).toEqual(1);
  });

  it('can get its name', () => {
    expect(testSubreddit.name).toEqual('testSub');
  });

  it('can get its banner', () => {
    expect(testSubreddit.banner).toEqual('banner');
  });

  it('has a postsHandler', () => {
    expect(testSubreddit.postsHandler).toEqual(expect.any(Object));
  });

  it('has a votes handler', () => {
    expect(testSubreddit.voteHandler).toEqual(expect.any(Object));
  });
});


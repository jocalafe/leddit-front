import subreddit from './subreddit';

describe('Subreddit factory function', () => {
  it('should create a Subreddit object with a given name', () => {
    const name = 'testSub';
    const subreddit1 = subreddit(name);
    expect(subreddit1.getName()).toEqual(name);
  });

  it('should throw unnamed subreddit error when name is not supplied', () => {
    expect(() => {
      subreddit()
    }).toThrowError('subreddit name is required');
  });

  it('should throw subreddit name should not be empty error when name is empty', () => {
    expect(() => {
      subreddit('')
    }).toThrow('subreddit name should not be empty');
  });
});

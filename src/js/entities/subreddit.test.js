import subreddit from './subreddit';

describe('Subreddit factory function', () => {
  it('should return an object', () => {
    expect(subreddit('test')).toEqual(expect.any(Object));
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

describe('subreddit object', () => {
  it('can get its name', () => {
    const name = 'testSub';
    const subreddit1 = subreddit(name);
    expect(subreddit1.name).toEqual(name);
  });
});


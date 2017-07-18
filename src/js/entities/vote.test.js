import user from './user.js';
import vote from './vote.js';

describe('vote factory function', () => {
  it('returns an Object', () => {
    expect(vote()).toEqual(expect.any(Object));
  });
});

describe('vote object', () => {
  const author = user('user1');
  let type = 'DOWN';
  const id = 1;
  const vote1 = vote(id, author, type);
  it('should get its id', () => {
    expect(vote1.id).toEqual(id);
  });
  it('should get its author', () => {
    expect(vote1.author).toEqual(author);
  });
  it('should get its type', () => {
    expect(vote1.type).toEqual(type);
  });
  type = 'UP';
  vote1.setType(type);
  it('should set its type', () => {
    expect(vote1.type).toEqual(type);
  });
  it('throws invalid type error when type is not valid', () => {
    expect(() => {
      vote1.setType('REGULAR');
    }).toThrowError('Invalid vote type');
  });
});

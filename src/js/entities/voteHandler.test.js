import voteHandler from './voteHandler';
import vote from './vote';
import user from './user';

describe('voteHandler factory function', () => {
  it('returns an object', () => {
    expect(voteHandler()).toEqual(expect.any(Object));
  });
});

describe('voteHandler object', () => {
  let votes = [vote(1, user('user1'), 'UP'), vote(2, user('user2'), 'DOWN')];
  const voteHandler1 = voteHandler(votes);
  it('can get its votes', () => {
    expect(voteHandler1.votes).toEqual(votes);
  });
  const newVote = vote(3, user('user3'), 'UP');
  votes = [...votes, newVote];
  voteHandler1.addVote(newVote);
  it('can add a vote', () => {
    expect(voteHandler1.votes).toEqual(votes);
  });
  votes.pop();
  voteHandler1.deleteVote(3);
  it('can delete a vote', () => {
    expect(voteHandler1.votes).toEqual(votes);
  });
  it('can add all the votes correctly', () => {
    expect(voteHandler1.sum).toEqual(0);
  });
});

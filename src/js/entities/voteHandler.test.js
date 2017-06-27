import voteHandler from './voteHandler';
import vote from './vote';
import user from './user';

describe('voteHandler factory function', () => {
  it('returns an object', () => {
    expect(voteHandler()).toEqual(expect.any(Object));
  });
});

describe('voteHandler object', () => {
  it('can get its votes', () => {
    const votes = [vote(1, user('user1'), 'UP'), vote(2, user('user2'), 'DOWN')];
    const voteHandler1 = voteHandler(votes);
    expect(voteHandler1.votes).toEqual(votes);
  });
  it('can add a vote', () => {
    let votes = [vote(1, user('user1'), 'UP'), vote(2, user('user2'), 'DOWN')];
    const voteHandler1 = voteHandler(votes);
    const newVote = vote(3, user('user3'), 'UP');
    votes = [...votes, newVote];
    voteHandler1.addVote(newVote);
    expect(voteHandler1.votes).toEqual(votes);
  });
  it('can delete a vote', () => {
    const votes = [vote(1, user('user1'), 'UP'), vote(2, user('user2'), 'DOWN')];
    const voteHandler1 = voteHandler(votes);
    voteHandler1.addVote(vote(3, user('user3'), 'UP'));
    voteHandler1.deleteVote(3);
    expect(voteHandler1.votes).toEqual(votes);
  });
  it('sum of empty votes should equal 0', () => {
    const voteHandler1 = voteHandler();
    expect(voteHandler1.sum).toEqual(0);
  });
  it('can add all the votes correctly', () => {
    const votes = [vote(1, user('user1'), 'UP'), vote(2, user('user2'), 'DOWN'), vote(3, user('user3'), 'DOWN')];
    const voteHandler1 = voteHandler(votes);
    expect(voteHandler1.sum).toEqual(-1);
  });
});

import * as voteTypes from '../constants/voteTypes';

export default function voteHandler(handlerVotes) {
  let votes = handlerVotes || [];
  return {
    get votes() {
      return votes;
    },
    get sum() {
      return votes.reduce((a, b) => a + (b.type === voteTypes.UP ? 1 : -1), 0);
    },
    addVote(vote) {
      votes = [...votes, vote];
    },
    deleteVote(id) {
      votes = votes.filter(currVote => currVote.id !== id);
    }
  };
}

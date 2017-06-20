import * as types from '../constants/voteTypes';
export default function voteHandler(handlerVotes) {
  let votes = handlerVotes || [];
  return {
    get votes(){
      return votes;
    },
    get sum() {
      return votes.reduce((a, b) => {
        let aNum = a.type === types.UP? 1 : -1;
        let bNum = b.type === types.UP? 1 : -1;
        return aNum + bNum;
      });
    },
    addVote(vote) {
      votes = [...votes, vote];
    },
    deleteVote(id) {
      votes = votes.filter(currVote => currVote.id !== id);
    }
  };
}

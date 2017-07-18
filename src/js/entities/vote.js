import * as types from '../constants/voteTypes';

export default function vote(voteId, voteAuthor, voteType) {
  const id = voteId;
  const author = voteAuthor;
  let type = voteType;

  function isValidType(newType) {
    if (Object.keys(types).includes(newType)) {
      type = newType;
      return;
    }
    throw new Error('Invalid vote type');
  }

  return {
    get id() {
      return id;
    },
    get author() {
      return author;
    },
    get type() {
      return type;
    },
    setType(newType) {
      if (isValidType(newType)) {
        type = newType;
      }
    }
  };
}

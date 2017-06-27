import { connect } from 'react-redux';

import CommentList from '../components/CommentList';

function mapStateToProps(state) {
  return {
    comments: state.post.comments,
    isFetchingComments: state.post.isFetchingComments
  };
}

export default connect(mapStateToProps)(CommentList);

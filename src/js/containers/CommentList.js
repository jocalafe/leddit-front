import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import CommentList from '../components/CommentList';

function mapStateToProps(state) {
  return {
    comments: state.post.comments,
    isFetchingComments: state.post.isFetchingComments
  };
}

export default withRouter(connect(mapStateToProps)(CommentList));

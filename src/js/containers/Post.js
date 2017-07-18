import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Post from '../components/Post';

function mapStateToProps(state) {
  return {
    post: state.post.currentPost,
    isFetchingComments: state.post.isFetchingComments
  };
}

export default withRouter(connect(mapStateToProps)(Post));

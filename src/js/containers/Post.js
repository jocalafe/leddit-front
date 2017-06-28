import { connect } from 'react-redux';

import Post from '../components/Post';

function mapStateToProps(state) {
  return {
    post: state.post.currentPost,
    isFetchingComments: state.post.isFetchingComments
  };
}

export default connect(mapStateToProps)(Post);

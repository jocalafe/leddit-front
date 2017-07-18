import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import PostList from '../components/PostList';

import { fetchPostComments } from '../actions/postComments';

function mapStateToProps(state) {
  return {
    posts: state.subreddit.currentSubreddit.postsHandler.posts,
    isFetchingPosts: state.post.isFetchingPosts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleTouchTap(history, post) {
      dispatch(fetchPostComments(post));
      history.push(`${history.location.pathname}/${post.id}`);
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));

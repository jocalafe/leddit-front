import { connect } from 'react-redux';

import PostList from '../components/PostList';

function mapStateToProps(state) {
  return {
    posts: state.subreddit.currentSubreddit.postsHandler.posts,
    isFetchingPosts: state.post.isFetchingPosts
  };
}

export default connect(mapStateToProps)(PostList);

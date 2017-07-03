import { connect } from 'react-redux';

import Subreddit from '../components/Subreddit';

function mapStateToProps(state) {
  return {
    subreddit: state.subreddit.currentSubreddit,
    isFetchingPosts: state.post.isFetchingPosts
  };
}

export default connect(mapStateToProps)(Subreddit);

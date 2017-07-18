import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Subreddit from '../components/Subreddit';

function mapStateToProps(state) {
  return {
    subreddit: state.subreddit.currentSubreddit,
    isFetchingPosts: state.post.isFetchingPosts
  };
}

export default withRouter(connect(mapStateToProps)(Subreddit));

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import SubredditList from '../components/SubredditList';

import { fetchSubredditPosts } from '../actions/subredditPosts';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isFetchingSubscriptions: state.auth.isFetchingSubscriptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleTouchTap(post) {
      dispatch(fetchSubredditPosts(post));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubredditList));

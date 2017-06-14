export default function User(username) {
  this.username = username;
  this.subscribedSubreddits = [];

  this.subscribeToSubreddit = function(subredditId) {
    this.subscribedSubreddits = [...this.subscribedSubreddits, subredditId];
  }

  this.unSubscribeFromSubreddit = function(subredditId) {
    this.subscribedSubreddits = this.subscribedSubreddits.filter(id => id !== subredditId);
  }

}

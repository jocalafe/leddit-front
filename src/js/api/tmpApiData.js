import user from '../entities/user';
import comment from '../entities/comment';
import post from '../entities/post';
import subreddit from '../entities/subreddit';

export const testUser = user(1, 'test');

export const commentsDota = [comment(1, 'dotacomment1', user('testuser'),
  [comment(11, 'dotacomment1.1', user('test2'), [comment(21, 'dotacomment1.1.1')]), comment(12, 'dotacomment1.2')]),
  comment(2, 'dotacomment2')];

export const commentsCfc = [comment(1, 'cfccomment1', user('testuser'),
  [comment(11, 'cfccomment1.1'), comment(12, 'cfccomment1.2')]),
  comment(2, 'cfccomment2')];

export const postsDota = [post(1, 'dotapost1', 'www.facebook.com', 'dota is the best game ever!', user(1, 'user')),
  post(2, 'dotapost2', 'www.google.com', 'dota is legit', user(2, 'user2'))];

export const postsCfc = [post(6, 'cfcpost1', 'www.facebook.com', 'cfc is the team ever!', user(1, 'user')),
  post(7, 'cfcpost2', 'www.google.com', 'cfc is legit', user(2, 'user2')),
  post(8, 'cfcpost3', 'www.google.com', 'cfc is legit', user(3, 'user3'))];

export const subscriptions = [subreddit(1, 'DOTA2'), subreddit(2, 'chelseafc')];

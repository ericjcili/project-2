const { Post } = require('../models');

const postData = [
  {
    title: 'This is a test post',
    post_text: 'This is being inserted into the post_text, which should be displayed in the post titled "This is a test post." I sure hope it works.',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
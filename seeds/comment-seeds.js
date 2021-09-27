const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "And this is a test comment responding to the post titled 'This is a test.' I sure hope it works!",
    post_id: 1,
    user_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
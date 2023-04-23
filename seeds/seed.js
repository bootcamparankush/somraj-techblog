const sequelize = require('../config/connection');
const {Comment, Post, User} = require('../models');

const postsData = require('./postSeedData.json');
const userData = require('./userSeedData.json');
const commentsData = require('./commentsSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postsData, {
     returning: true,
   });
  
   const comments = await Comment.bulkCreate(commentsData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();




// const seedAll = async () => {
//   await sequelize.sync({
//     force: true
//   });
//   console.log('\n----- DATABASE SYNCED -----\n');
  
//   await seedUsers();
//   console.log('\n----- USERS SEEDED -----\n');

//   await seedPosts();
//   console.log('\n----- POSTS SEEDED -----\n');

//   await seedComments();
//   console.log('\n----- COMMENTS SEEDED -----\n');

//   process.exit(0);
// };

// seedAll();
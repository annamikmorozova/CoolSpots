// const { Seeder } = require('mongo-seeding');
const { green, red } = require("chalk");
const { db, User, Place } = require("./server/db");

// require("dotenv").config();


const users = [
  {
    firstName: "Anna",
    lastName: "Morozova",
    email: "anna@mymap.com",
    password: "12345",
  },{
    firstName: "Erik",
    lastName: "Yeomans",
    email: "anna@mymap.com",
    password: "12345",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(users.map(user => {
      return User.create(user);
    }));

    console.log(green("Seeding success!"));
    db.close();

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}


// const config = {
//     database: {
//       name: 'cool-places',
//       host: process.env.DB_SECRET
//     },
//     dropDatabase: true,
//   };

// const seeder = new Seeder(config);
// const collections = seeder.readCollectionsFromPath(path.resolve("/Users/annamorozova/Desktop/mongodb-data"));

// seeder
//   .import(collections)
//   .then(() => {
//     console.log("Collections are seeded!")
//   })
//   .catch(err => {
//       console.log(err)
//   })

//   module.exports = {
//     firstName: 'John',
//   }
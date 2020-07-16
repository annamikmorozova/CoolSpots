const { green, red } = require("chalk");
const { db, User, Place } = require("./server/db");

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

module.exports = seed;
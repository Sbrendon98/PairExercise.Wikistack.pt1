const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

//BELOW CODE: turns off SQL command text logging in console
// const db = new Sequelize('postgres://localhost:5432/wikistack', {
// logging: false
// });

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
      validate:
        {
         isURl: true
        }
    },
    content: Sequelize.STRING,
    status: {
      type: Sequelize.ENUM,
      values: ['open', 'closed']
      //can also format Sequelize.ENUM('open', 'closed')
    }

  })

  const User = db.define('user', {
    name: Sequelize.STRING,
    email:{
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
  })

module.exports = {
  db, Page, User
}

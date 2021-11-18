const morgan = require("morgan")
const express = require("express")
const index = require("./views/index")
const { db, Page, User } = require('./models/index');

const app = express()
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded({ extended: false }))
//app.use(express.json)

// app.use("/", index)


app.get("/",(req, res) => {
   res.send(index.main())
})

//PLACE BELOW IN DB FILE (e.g. index.js)
// db
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

const PORT = 3000

const tables = async () => {
  // await Page.sync()
  // await User.sync()
  //await db.sync({force: true}) // for specific use in dropping all tables to update the schema; note all data in existing tables will be lost
  await db.sync()
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
   })
}

tables();

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`)
// })


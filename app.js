const morgan = require("morgan")
const express = require("express")
const index = require("./views/index")


const app = express()
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded({ extended: false }))
//app.use(express.json)

// app.use("/", index)

app.get("/",(req, res) => {
   res.send(index.main())
})


const PORT = 3000

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})


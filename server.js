const express = require('express')
const cors = require('cors')
// const sequelize = require("sequelize");

const app = express()

var corOptions = {
    origin: 'https://localhost:8081'
    }

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cors(corOptions))


//test

app.get('/', (req,res) => {
    res.json({ message: 'hello from api' })
})

// // routers
const router = require('./routes/productRouter.js')
app.use('/api/products', router)

// //static Images Folder

// app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
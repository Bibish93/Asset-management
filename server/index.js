const express = require("express")
const db = require("./models")
const cors = require('cors')
const app = express()

const register = require('./routes/register')
const home = require('./routes/home')
const assets = require('./routes/assets')
const signup = require('./routes/signup')

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({extended: true}))

// app.use(express.static('public'))

app.use('/signup', signup)
app.use('/assets', assets)
app.use('/register', register)



app.get('/', (req, res) => {
    res.send("welcome!!")
})


db.sequelize.sync().then(() =>{

    app.listen(3000, () => {
        console.log("server running on port 3000");
    })
})


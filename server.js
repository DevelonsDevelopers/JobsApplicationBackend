const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

const errorController = require('./controllers/error')
const categoryRouter = require('./routes/category');
const countryRouter = require('./routes/country');
const companyRouter = require('./routes/company');

const app = express();

const port = process.env.PORT || 5001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressSession({secret: 'JOBAPI', resave: false, saveUninitialized: false}))

app.use(cors({
    // origin: 'https://gym-management-next.vercel.app',
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(cookieParser('JOBAPI'))

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type Authorization')
//     next()
// })

app.use(categoryRouter)
app.use(countryRouter)
app.use(companyRouter)

app.use(errorController.get404)
app.use(errorController.get500)

app.listen(port, () => console.log(`Listening on port ${port}`))

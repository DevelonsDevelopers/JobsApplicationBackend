const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

const errorController = require('./controllers/error')
const appliedRouter = require('./routes/applied');
const categoryRouter = require('./routes/category');
const companyRouter = require('./routes/company');
const companyAuthenticationRouter = require('./routes/companyAuthentication')
const countryRouter = require('./routes/country');
const cvRouter = require('./routes/cv');
const cvCareerRouter = require('./routes/cvCareer')
const cvCourseRouter = require('./routes/cvCourse')
const cvEducationRouter = require('./routes/cvEducation')
const cvInterestRouter = require('./routes/cvInterest')
const cvLanguageRouter = require('./routes/cvLanugage')
const cvResumeRouter = require('./routes/cvResume')
const cvSkillRouter = require('./routes/cvSkill')
const featuredRouter = require('./routes/featured')
const interactionsRouter = require('./routes/interactions')
const jobsRouter = require('./routes/jobs')
const plansRouter = require('./routes/plans')
const reportsRouter = require('./routes/reports')
const seekerAuthRouter = require('./routes/seekerAuthentication')
const seekersRouter = require('./routes/seekers')
const tagsRouter = require('./routes/tags')
const transactionsRouter = require('./routes/transactions')
const userRouter = require('./routes/user')
const userAuthRouter = require('./routes/userAuthentication');

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

app.use(appliedRouter)
app.use(categoryRouter)
app.use(countryRouter)
app.use(companyRouter)
app.use(userAuthRouter)
app.use(companyAuthenticationRouter)
app.use(cvCareerRouter)
app.use(cvCourseRouter)
app.use(cvEducationRouter)
app.use(cvInterestRouter)
app.use(cvLanguageRouter)
app.use(cvResumeRouter)
app.use(cvSkillRouter)
app.use(featuredRouter)
app.use(interactionsRouter)
app.use(jobsRouter)
app.use(plansRouter)
app.use(reportsRouter)
app.use(seekersRouter)
app.use(seekerAuthRouter)
app.use(tagsRouter)
app.use(transactionsRouter)
app.use(userRouter)
app.use(cvRouter)

app.use(errorController.get404)
app.use(errorController.get500)

app.listen(port, () => console.log(`Listening on port ${port}`))

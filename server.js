const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const Stripe = require("stripe")

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
const citiesRouter = require('./routes/city')
const bookmarksRouter = require('./routes/bookmark')
const dashboardRouter = require('./routes/dashboard')
const coverRouter = require('./routes/cover')
const offerRouter = require('./routes/offers')
const paymentRouter = require('./routes/payment')
const userPlansRouter = require('./routes/userPlans')
const apiJobsRouter = require('./routes/apiJobs')
const jobBanksRouter = require('./routes/jobBanks')

const app = express();

const port = process.env.PORT || 5001;

const PUBLISHABLE_KEY = "pk_test_51NpsCXBA5mbdD8e2Tg8MVBCXtomGyF11MzP1eFRceziDGIOGxMwmjToCNFLQEc2zXeYnBUhk89oKcJ9ffXpSikqU00bObmoUIu";
const SECRET_KEY = "sk_test_51NpsCXBA5mbdD8e2xS4UKx8BT8wRi1OxkzDQc2j6bArEzdJht3yxOXQcPMecdX5YVGdzNmwK2u3tJNVqAiaP3toT00MIf7IOrJ";

const stripe = Stripe(SECRET_KEY, {apiVersion: "2023-08-16"});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(expressSession({secret: 'JOBAPI', resave: false, saveUninitialized: false}))

app.post("/api/create-payment-intent", async (req, res) => {
    const price = req.body.price;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: price, //lowest denomination of particular currency
            currency: "usd",
            payment_method_types: ["card"], //by default
        });

        const clientSecret = paymentIntent.client_secret;

        res.json({
            clientSecret: clientSecret,
        });
    } catch (e) {
        console.log(e.message);
        res.json({error: e.message});
    }
});

app.post('/api/distribute', async (req, res) => {
    const name = req.body.name
    const address = req.body.address
    const phone = req.body.phone
    const email = req.body.email
    const role = req.body.role
    const intro = req.body.intro
    const skills = req.body.skills
    const careers = req.body.careers
    const educations = req.body.educations
    const courses = req.body.courses
    const interests = req.body.interests

    const nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: "2af2cb7e938eb6",
            pass: "91c797d4bf7ad5"
        }
    })
    message = {
        from: "anymail@example.com",
        to: "tayyabrana5999@gmail.com",
        subject: "Invoice",
        text: "...",
//         html: `<!DOCTYPE html>
// <html lang="en">
//
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>CV</title>
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap"
//         rel="stylesheet">
// </head>
//
// <style>
//     * {
//         font-family: 'Poppins', sans-serif;
//     }
//
//     h2 {
//         font-weight: 400;
//     }
//
//     h3 {
//         font-weight: 400;
//     }
// </style>
//
//
// <body style="padding: 5rem;border: 1px solid black; margin: 80px; border-radius: 20px;">
//
//     <center>
//         <h2>${name}</h2>
//         <h2 style="font-size: 20px;">${address}</h2>
//         <div style="display: flex;justify-content: center; gap: 20px;margin-top: -20px;">
//             <h3>${phone}</h3>
//             <h3>${email}</h3>
//         </div>
//         <hr>
//         <h2>${role}</h2>
//         <hr>
//     </center>
//     <p style="font-weight: 500;">${intro}
//     </p>
//     <hr>
//     <h2 style="text-align: center;">Key skills</h2>
//     <hr>
//     <center>
//         <div style="grid-template-columns: repeat(3,minmax(0, 1fr)); display: grid;">
//            ${skills?.map((value) => (
//             <h4>${value.skill}</h4>
//         ))}
//         </div>
//     </center>
//     <hr>
//     <h2 style="text-align: center;">Employment History</h2>
//     <hr>
//
//     ${careers?.map((value) => (
//             <div>
//                 <div style="display: flex;gap: 20px;">
//                     <h3>Developer</h3>
//                     <h3>|</h3>
//                     <h3>2012-2023</h3>
//                 </div>
//                 <div style="display: flex;margin-top: -20px;gap: 20px;">
//                     <h3>Company</h3>
//                     <h3>:</h3>
//                     <h3> TecnoMentor</h3>
//                 </div>
//                 <div style="display: flex;margin-top: -20px;gap: 20px;">
//                     <h3>Address</h3>
//                     <h3>:</h3>
//                     <h3>MughalPura,Lahore</h3>
//                 </div>
//                 <h3 style="text-align: right;">Phone:111-222-333-444</h3>
//                 <hr />
//                     </div>
//                     ))}
//
//                     <h2 style="text-align: center;">Qualification</h2>
//                     <hr />
//                         <div>
//                             ${educations?.map((value) => (
//                             <div>
//                                 <div style="display: flex;gap: 20px;">
//                                     <h3>Matric</h3>
//                                     <h3>|</h3>
//                                     <h3>2012-2023</h3>
//                                 </div>
//                                 <h3 style="text-align: right;">Lahore,Pakistan</h3>
//                                 <hr />
//                             </div>
//                             ))}
//
//                         </div>
//                         <h2 style="text-align: center;">Training Courses</h2>
//                         <hr>
//                             <div>
//                                 ${courses?.map((value)=>(
//                                 <div>
//
//                                     <div style="display: flex;gap: 20px;">
//                                         <h3>${value.name}</h3>
//                                         <h3>|</h3>
//                                         <h3>${value.timeperiod}</h3>
//                                     </div>
//                                     <h3 style="text-align: right;">${value.address}</h3>
//                                     <hr />
//                                 </div>
//                                 ))}
//                             </div>
//                             <h2 style="text-align: center;">Interest</h2>
//                             <hr>
//                                 <center>
//                                     <div style="grid-template-columns: repeat(3,minmax(0, 1fr)); display: grid;">
//                                         ${interests?.map((value) => (
//                                         <h4>${value.interest}</h4>
//                                     ))}
//                                     </div>
//                                 </center>
//
//
//                             </body>
//
//                         </html>`
    }

    transporter.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
            res.json({error: err});
        } else {
            console.log(info);
            res.json({message: "Mail Sent"});
        }
    })
})

app.use(cors({
    // origin: 'https://gym-management-next.vercel.app',
    origin: ['http://192.168.1.15:3000', 'http://192.168.1.15:3001', 'http://192.168.1.25:3000', 'http://localhost:3000', 'https://develons.biz', 'http://develons.biz'],
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
app.use(citiesRouter)
app.use(bookmarksRouter)
app.use(dashboardRouter)
app.use(coverRouter)
app.use(offerRouter)
app.use(paymentRouter)
app.use(userPlansRouter)
app.use(apiJobsRouter)
app.use(jobBanksRouter)

app.use(errorController.get404)
app.use(errorController.get500)

app.listen(port, () => console.log(`Listening on port ${port}`))

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

const app = express();

const port = process.env.PORT || 5001;

const PUBLISHABLE_KEY = "pk_test_51NpsCXBA5mbdD8e2Tg8MVBCXtomGyF11MzP1eFRceziDGIOGxMwmjToCNFLQEc2zXeYnBUhk89oKcJ9ffXpSikqU00bObmoUIu";
const SECRET_KEY = "sk_test_51NpsCXBA5mbdD8e2xS4UKx8BT8wRi1OxkzDQc2j6bArEzdJht3yxOXQcPMecdX5YVGdzNmwK2u3tJNVqAiaP3toT00MIf7IOrJ";

const stripe = Stripe(SECRET_KEY, { apiVersion: "2023-08-16" });

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
        res.json({ error: e.message });
    }
});

app.post('/api/distribute', async (req, res) => {
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
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .invoice {
            margin: 0 auto;
            padding: 20px;
            width: 80%;
            border: 1px solid #ff0000;
        }
        .invoice-header {
            text-align: center;
        }
        .invoice-body {
            margin-top: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #838383;
        }
        .total {
            text-align: right;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="invoice">
        <div class="invoice-header">
            <h1>Invoice</h1>
        </div>
        <div class="invoice-body">
            <p><strong>Invoice Number:</strong> INV123456</p>
            <p><strong>Invoice Date:</strong> 2023-10-07</p>
            <p><strong>Due Date:</strong> 2023-10-21</p>
            <p><strong>Bill To:</strong> John Doe<br>123 Main St<br>City, State ZIP</p>
            <p><strong>Ship To:</strong> Jane Smith<br>456 Elm St<br>City, State ZIP</p>
        </div>
        <table>
            <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>Product A</td>
                <td>2</td>
                <td>$50.00</td>
                <td>$100.00</td>
            </tr>
            <tr>
                <td>Product B</td>
                <td>3</td>
                <td>$30.00</td>
                <td>$90.00</td>
            </tr>
        </table>
        <p class="total"><strong>Total: $190.00</strong></p>
    </div>
</body>
</html>`
    }
    transporter.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
            res.json({ error: err });
        } else {
            console.log(info);
            res.json({ message: "Mail Sent" });
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

app.use(errorController.get404)
app.use(errorController.get500)

app.listen(port, () => console.log(`Listening on port ${port}`))

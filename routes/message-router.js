const express = require('express')
const fetch = require('node-fetch')
const nodemailer = require('nodemailer')

const router = express.Router()

router.post('/', async (req, res) => {

  // Ett fake konto där man kan se meddelanden i ethereal.mail med dessa uppgifter
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'catherine.heathcote66@ethereal.email',
        pass: 'UjU6H6ZnY6ZhF2C7Ny'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${req.body.name} " " ${req.body.email}`,
    to: "catherine.heathcote66@ethereal.email", // list of recievers
    subject: "Contact kingping", 
    text: `${req.body.message}`, 
    html: `<b>${req.body.message}</b>`, 
  });

  res.status(200).end()
})

module.exports = router
const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv/config')

const router = express.Router()

router.post('/', async (req, res) => {

  // Ett fake konto där man kan se meddelanden i ethereal.mail med dessa uppgifter
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: `${req.body.name} " " ${req.body.email}`,
    to: "catherine.heathcote66@ethereal.email", // list of recievers
    subject: "Contact kingping", 
    text: `${req.body.message}`, 
    html: `<b>${req.body.message}</b>`, 
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      res.status(500).json({ message: `Error has occured ${err}`})
    }
    res.status(200).json({ message: `Message sent: ${info.response}`})
  })
  
})

module.exports = router
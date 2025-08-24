const nodemailer = require('nodemailer');
require('dotenv').config();

const sendConfirmationEmail = (email, name) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Account Created Successfully',
        html: `
        <html>
        <body>
            <h2>Congratulations, ${name}!</h2>
            <p>We are excited to inform you that your account has been successfully created. Welcome aboard!</p>
        </body>
        </html>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = sendConfirmationEmail;

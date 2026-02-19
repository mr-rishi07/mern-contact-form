const nodeMailer = require('nodemailer');

const sendEmail = async(name, email, message) => {
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.APP_PASS,
        },
    })

    let messInfo = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thanks for contacting me 😊",
        text: `Hi ${name},

            Thank you for contacting me!
            I have received your message and will get back to you as soon as possible.

            Your message:
            "${message}"

            Best regards,
            Rishi`,
    }
    await transporter.sendMail(messInfo);

}

module.exports = sendEmail;
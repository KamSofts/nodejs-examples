require("dotenv").config(); // SMTP_SERVICE, SMTP_USER, SMTP_PASSWORD
const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

const mailOptions = {
    from: process.env.SMTP_USER,
    to: "kanamanavai@gmail.com",
    subject: "Email from Node.js",
    text: "Hello, Nagarajan.Kam Success is the best beauty."
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        return console.error("Error", err);
    }
    console.log("Success", info.response);
})
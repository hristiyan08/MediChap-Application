import { getUserData } from "./main"; // Import the function to get user data
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const button = document.getElementById("apply");

// Read the HTML template
const templatePath = path.join(__dirname, 'emailTemplate.html');
let htmlTemplate;

try {
    htmlTemplate = fs.readFileSync(templatePath, 'utf8');
} catch (error) {
    console.error("Error reading the email template:", error);
    return; // Exit if the template can't be read
}

// Create a transporter for emails
let transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP host
    port: 587, // Port (or 465 for SSL)
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER || "app.medichat@gmail.com", // Use environment variable or fallback
        pass: process.env.EMAIL_PASS || "Hrisi_08"  // Use environment variable or fallback
    }
});

button.addEventListener('click', () => {
    // Get the latest user data each time the button is clicked
    const { name, email, randomNum } = getUserData();

    // Set up the email options
    let mailOptions = {
        from: '"MediChat" <app@medichat.app>', // Sender email
        to: email, // Recipient email
        subject: 'Код за достъп до MediChat',
        html: htmlTemplate.replace('{{name}}', name).replace('{{code}}', randomNum) // HTML content of the email
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error("Error sending email:", error);
        }
        console.log('Email sent: %s', info.messageId);
    });
});

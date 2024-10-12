import {name} from "./main";
import {email} from "./main";
import {randomNum} from "./main";

const button = document.getElementById("apply");
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Четене на HTML шаблона
const templatePath = path.join(__dirname, 'emailTemplate.html');
let htmlTemplate = fs.readFileSync(templatePath, 'utf8');

// Динамично заместване на името
const clientName = 'Клиент'; // Задай името на клиента
htmlTemplate = htmlTemplate.replace('{{name}}', clientName);

// Създаване на транспорт за имейли
let transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Заменете с вашия SMTP хост
    port: 587, // Порт (или 465 за SSL)
    secure: false, // true за 465, false за други портове
    auth: {
        user: 'app.medichat@gmail.com', // Твоя имейл
        pass: 'Hrisi_08'     // Паролата за имейла
    }
});

// Опции за изпращане на имейл
htmlTemplate = htmlTemplate.replace('{{name}}', name); // Заменя {{name}} с името на клиента
htmlTemplate = htmlTemplate.replace('{{code}}', randomNum );
let mailOptions = {
    from: '"MediChat" <app@medichat.app>', // Имейл подател
    to: `${email}`, // Имейл получател
    subject: 'Код за достъп до MediChat',
    html: htmlTemplate // HTML съдържанието на имейла
};
button.addEventListener('click', () => {


// Изпращане на имейл
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Имейлът е изпратен: %s', info.messageId);
});
})
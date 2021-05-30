const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const details = require("./details.json");
const welcomeMail = require("./public/mail_template");
const transfertMail = require("./public/mail_transfert");
const fetchRouter = require('./routes/fetch-route');
const app = express();
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
app.use(cors({origin: "*"}));
app.use(bodyParser.json());

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, hostname, () => {
    console.log("bien connecté");
    console.log(`Server running at https://${hostname}:${port}`);
});

app.get("/", (req, res) => {
    res.send(
        "<h1 style='text-align: center'>Bienvenue sur SnapTechs Express Js API<br><br>👋</h1>"
    );
});

app.post("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
        res.send(info);
    });
});
/*Routes*/
app.get('/categories', fetchRouter);
app.get('/projects', fetchRouter);

async function sendMail(user, callback) {
    console.log(callback);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "mail.dibodev.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: details.email,
            pass: details.password
        }
    });

    let mailOptions = {
        from: '"Dibodev"<contact@dibodev.com>', // sender address
        to: user.email, // list of receivers
        subject: "Bienvenue sur Dibodev " + user.name.capitalize() + " 👋", // Subject line
        html: welcomeMail.render(user.name),
        text: "Merci " + user.name.capitalize() + " pour votre message et l'intérêt que vous portez à mon site. " +
            "Une réponse à votre demande vous sera envoyée au plus vite. En espérant vous revoir au plus vite sur dibodev ! Cordialement, Léo."
    };

    let mailOptions2 = {
        from: user.name + `<${user.email}>`, // sender address
        to: details.email, // list of receivers
        subject: user.name.capitalize() + " vous à envoyé un message 🔥", // Subject line
        html: transfertMail.render(user.name, user.email, user.text),
        text: user.text
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    let callBackMail = await transporter.sendMail(mailOptions2);

    callback(info);
    callback(callBackMail);
}

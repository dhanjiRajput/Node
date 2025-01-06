const nodemailer = require("nodemailer");
const User = require("../Model/user");
require("dotenv").config();

const EMAIL_PASSWORD=process.env.EMAIL_PASSWORD;
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:"kidechadhanji@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
    },
});


const sendingMail=async(to,subject,content)=>{

    try {
        const mailOptions = {
            from: "kidechadhanji@gmail.com",
            to: to,
            subject: subject,
            text: content,
        };
    
        let res=await transport.sendMail(mailOptions);
    } catch (error) {
        console.log(error.message);
    }
};


module.exports=sendingMail;
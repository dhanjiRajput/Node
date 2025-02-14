const nodemailer=require('nodemailer');
require("dotenv").config();

const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.email,
        pass: process.env.password,
    },
});

const sendMail=async(to,subject,body)=>{

    const mailoption={
        from:process.env.email,
        to:to,
        subject:subject,
        html:body,
    }

    let mail=await transport.sendMail(mailoption);
};

module.exports=sendMail;

const nodemailer=require("nodemailer");

const transport=nodemailer.createTransport(
    {
        service:"gmail",
        auth:{
            user:"kidechadhanji@gmail.com",
            pass:"warz dmev didd csif"
        }
    }
);

const sendigmail=async(to,subject,text)=>{
    const mail={
        from:"kidechadhanji@gmail.com",
        to:to,
        subject:subject,
        text:text
    }

    let res=await transport.sendMail(mail);
};

module.exports = sendigmail
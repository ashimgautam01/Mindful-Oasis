import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const SendVerificationEmail = async (email,html) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject:"OTP Verification",
      html:html,
    });
    console.log("Email sent: ", info.response);
    return { success: true };
  } catch (error) {
    console.error("Error sending email: ", error);
    return { success: false, error };
  }
};




export default SendVerificationEmail;

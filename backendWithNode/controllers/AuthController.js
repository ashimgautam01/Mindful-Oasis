import SendVerificationEmail from "../Emails/sendVerificatioMail.js";
import pool from "../index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const RegisterUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already registered and verified
    const [CheckingEmail] = await pool.query(
      `SELECT * FROM users WHERE email=? AND is_verified=1`,
      [email]
    );

    if (CheckingEmail.length > 0) {
      return res.status(402).json("Email already exists");
    }

    // Generate OTP and calculate expiry
    const otp = Math.floor(Math.random() * 999999).toString();
    const now = new Date();
    const expiry = new Date(Date.now() + 20 * 60 * 1000); // 20 minutes from now

    // Hash the password
    const hashpassword = await bcrypt.hash(password, 10);

    // Prepare the email content
    const html = `<h1>OTP Verification</h1>
        Dear <p class='text-red-600 font-bold'> ${name},</p>
        <p>Thank you for registering with us. To complete your registration, please use the following OTP code:</p>
        <div class="text-teal-800 font-bold"><b>${otp}</b></div>
        <p>This code is valid for the next 10 minutes. <P>It will expire at <b> ${expiry.toLocaleString(
          "en-US",
          { timeZone: "Asia/Kathmandu" }
        )}</b></P>If you did not request this, please ignore this email.</p>
        <p>If you have any questions or need further assistance, feel free to</p>
        <div class="footer">
            <p>Best regards,<br class='text-green-600'>Ashim</p>`;

    // Send the verification email
    const emailResult = await SendVerificationEmail(email, html);

    if (!emailResult) {
      return res.status(500).json("Failed to send verification email");
    }
    console.log("Email sent successfully");

    // Insert user data into the database
    const query = `INSERT INTO users(name, email, password, otp, expiry) VALUES (?, ?, ?, ?, ?)`;
    const values = [name, email, hashpassword, otp, expiry];

    pool.query(query, values, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(400).json("Database error");
      }

      console.log("Query successful:", results);
      return res.status(200).json({ message: "User registered successfully" });
    });

  } catch (error) {
    console.error("Error in RegisterUser:", error);
    return res.status(500).json("An unexpected error occurred");
  }
};

const OTPVerification = async (req, res) => {
  const { email, otp } = req.body;
  console.log('OTP:', otp);

  try {
    // Check if the email exists
    const [results] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (results.length === 0) {
      return res.status(400).json("Your email does not exist");
    }

    const user = results[0];
    console.log('User:', user);
    
    if (user.is_verified === 1) {
      return res.status(400).json("Email is already verified");
    }

    // Check if the OTP matches
    if (user.otp === otp) {
      // Update user verification status
      await pool.query('UPDATE users SET is_verified = ? WHERE id = ?', [1, user.id]);

      return res.status(200).json("Email verification successful");
    } else {
      return res.status(401).json("Email verification failed");
    }
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json("Database error");
  }
};


const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [result] = await pool.query(`SELECT * FROM users WHERE email=?`, [
      email,
    ]);
    if (result.length == 0) {
      return res.status(400).json("Email not found");
    }
    const user = result[0];
    if (user.is_verified == 0) {
      return res.json("Please verify your email");
    }
    const checkingpass = bcrypt.compare(password.toString(), user.password);
    if (!checkingpass) {
      return res.status(400).json("Check your password");
    }
   const refresh_token = jwt.sign(
      { email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    const access_token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "7d",
    });
    
   
      res.cookie("refresh", refresh_token,{ httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        path: '/'});
      res.cookie("access", access_token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        path: '/'
      });
      res.status(200).json({'access_token':access_token,"id":user.id,message:"Login Successful"});
    
  } catch (error) {
    console.log(error);
  }
};

const LogoutUser=async (req,res)=>{

      
    res.clearCookie("refresh")
    res.clearCookie("access")
    
    res.status(200).json("Logout Successful");


}

const verifyUser=async(req,res)=>{
  const users=req.user
  console.log("done");
  return res.status(200).json({'user':users})
}


export { RegisterUser, OTPVerification, LoginUser ,LogoutUser,verifyUser};




import express from 'express';
import mysql from 'mysql2/promise';
import { config } from 'dotenv';
import userRouter from './routes/userAuth.route.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieParser from 'cookie-parser';
config();

const app = express();

app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET"],
    credentials:true
}))
app.use(bodyParser.json());
app.use(cookieParser());
const PORT = process.env.PORT_NUM;


app.use('/api', userRouter);

const pool = mysql.createPool({
   host: process.env.DATABASE_HOST,
   user: process.env.DATABASE_USER,
   password: process.env.DATABASE_PASS,
   database: "test",
   connectionLimit: 10
});

const testConnection = async () => {
    try {
        const [results] = await pool.query("SELECT 1");
        console.log("Connection successful");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

testConnection();

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});

export default pool;

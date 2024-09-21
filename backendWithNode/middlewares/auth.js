import jwt from 'jsonwebtoken';


const verifyAccessToken = async (req, res, next) => {
    const accessToken = req.cookies.access; 
    console.log("Access Token:", accessToken);
    if (!accessToken) {
        return res.status(401).json("Token is not provided");
    }
    try {
        const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        req.user = data;
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(400).json("Invalid Token");
    }
};


export default verifyAccessToken;

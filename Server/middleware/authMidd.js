import jwt from ' jsonwebtoken';

const authMidd = (req, res, next) => {
     const token  =req.header("Authorization");
        if(!token) return res.status(401).json({message:"you are wrong"});

        try {
            const  decver =jwt.verify(token ,process.env.secret-key);
            req.user = decver;
            next();
        } catch (error) {
            res.status(400).json({message:"token gayab he"});
        }
};

export default authMidd;
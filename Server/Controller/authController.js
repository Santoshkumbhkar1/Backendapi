// Logic for 

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


//  for sign up 
export const signup = async (req, res) => {
    const { FirstName, LastName, Email, Password } = req.body;

    // it ensure unique user get stored 

    const emailexist = await User.findone({ Email });
    if (emailexist) {
        return res.status(400).json({ message: "use unique email" });

    }
    const hashedPass = await bcrypt.hash(Password, 10);

    try {
        const signUser = new User({
            FirstName,
            LastName,
            Email,
            Password: hashedPass
        });
        await signUser.save();
        res.status(201).json({ message: "user resisttered successfully" });

    } catch (error) {
        console.log("error while registering user", error);
    }
};



// for login

export const login = async (req, res) => {
    try {
    const { Email, Password } = req.body;

    const logUser = await User.findone({ Email });
    const ismatch = await bcrypt.compare(Password, logUser.Password);
    if (!logUser || !ismatch) {
        return res.status(400).json({ message: "Invalid credinatials" });

    }
    // token 

    const token = jwt.sign({ id: logUser._id }, process.env.secret - key, { expiresIn: "1h" });
    console.log(`User logged in succefully ${Email}`);
    res.status(200).json({ message :"login succesfull ," ,token });
    } catch (error) {
        res.status(400)
    }
}



//  user details

export const getuser = async (req, res) => {
    try {
        const userdet = await User.findByid(req.user.id).select("-Password");
        res.json(userdet);
    } catch (error) {
        res.status(400).json({ message: "user not found" });
    }
}


// - Users are able to forget their password via reset password link on email.

// For this we need nodemailer or some smtp request protocol





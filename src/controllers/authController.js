const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

//Helper function to generate JWT
const generateToken = (id, role) => {
    return jwt.sign({id, role}, process.env.JWT_SECRET, {
        expiresIn: '30d' //Token expires in 30 days
    });
};

// @desc Register a new user
// @route POST/api/v1/auth/register
exports.registerUser = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;

        //Check if user exists

        const userExists = await User.findOne({email});
        if (userExists) return res.status(400).json({message: 'User already exists'});

        //Create user
        const user = await User.create({
            name,
            email,
            password,
            role
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id, user.role)
        });
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
};

//@desc Authenticate user 
//@route POST/api/v1/auth/login
exports.loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;

        //Find user by email
        const user = await User.findOne({email});

        //Check if password using our model method
        if (user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id, user.role)
            });
        } else {
            res.status(401).json({message: 'Invalid email or password'});
        }
    }catch (error){
        res.status(500).json({message: error.message});
    }
};
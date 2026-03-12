const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// 1. Protect routes (Authentication)

exports.protect = async (req, res, next) => {
    let token;

    //Check if header contains token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get token from header (Bearer <token>)
            token = req.headers.authorization.split(' ')[1];

            //Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //Get user from token payload and attach to request
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }

    //2. Role-based access control (Authorization)
};
exports.authorize = (...roles) => {
        return (req, res, next) => {
            //Check if user's role is in allowed roles
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({
                    message: `User role '${req.user.role}' is not authorized to access this route`
                });
            }
            next();
        };
    };
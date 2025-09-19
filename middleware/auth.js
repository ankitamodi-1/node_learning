const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");

const auth = async (req, res, next) => {  
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]
  ) {    
    
    const token = req.headers.authorization?.split(' ')[1]; // Extract token
    
     if (!token) {
        return res.status(401).json({ message: 'Unauthorized! No token provided.' });
    }
    try {
      
      const decode = await jwt.verify(token, "fake-jwt-secret");
      const user = await User.findById(decode.user._id);
      if (!user) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  }
  return res.status(401).json({ message: 'Unauthorized! No token provided.' });
};

module.exports = auth;

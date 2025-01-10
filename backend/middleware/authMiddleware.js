// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to verify if the user is authenticated
const verifyToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: "No authentication token, access denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;  // Attach user data to request object
        console.log('Authenticated User:', req.user); // Debugging step to inspect user data
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};


// For Admin-only access (check user role in JWT)
const verifyAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied. Admins only.' });
    }
    next();
};

module.exports = { verifyToken, verifyAdmin };

// const express = require('express');
// const upload = require('../middlewares/fileUpload'); // For image upload
// const axios = require('axios');
// const { verifyToken } = require('../middleware/authMiddleware');
// const User = require('../models/User');

// const router = express.Router();

// // Reward points for "plastic" and "can"
// const ACTIVITY_POINTS = {
//     plastic: 15,
//     can: 25
// };

// // Eco activity (Image upload and reward points)
// router.post('/eco-activity-image', verifyToken, upload.single('image'), async (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ msg: "No image uploaded" });
//     }

//     try {
//         // Send the uploaded image to an ML model (Assuming external ML service/API)
//         const imagePath = req.file.path; // Path of the uploaded image
//         const mlResponse = await axios.post('http://localhost:5000/predict', { imagePath: imagePath });

//         // Process the classification result (plastic or can)
//         const activityType = mlResponse.data.activity; // Expected response: "plastic" or "can"
        
//         // Validate classification type
//         if (!ACTIVITY_POINTS[activityType]) {
//             return res.status(400).json({ msg: "Image classification failed" });
//         }

//         // Find the user and reward points
//         const userId = req.user.id;
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ msg: "User not found" });
//         }

//         // Award points for the activity
//         const pointsAwarded = ACTIVITY_POINTS[activityType];
//         user.points += pointsAwarded;

//         // Log the eco activity and points awarded
//         user.ecoActivities = user.ecoActivities || [];
//         user.ecoActivities.push({
//             activity: activityType,
//             pointsAwarded,
//             date: new Date()
//         });

//         await user.save();

//         // Send response with total points
//         res.json({
//             msg: `Eco activity recorded. You earned ${pointsAwarded} points for ${activityType}`,
//             pointsAwarded,
//             totalPoints: user.points
//         });

//         // Delete the uploaded image after use
//         const fs = require('fs');
//         fs.unlink(imagePath, (err) => {
//             if (err) console.error('Error deleting uploaded image:', err);
//         });

//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ msg: "Server error" });
//     }
// });

// module.exports = router;




const express = require('express');
const upload = require('../middleware/fileUpload'); // For image upload
const { verifyToken } = require('../middleware/authMiddleware');
const User = require('../models/User');

const router = express.Router();

// Reward points for "plastic" and "can"
const ACTIVITY_POINTS = {
    plastic: 15,
    can: 25
};

// Eco activity (Image upload and reward points)
router.post('/eco-activity-image', verifyToken, upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ msg: "No image uploaded" });
    }

    try {
        // Simulate ML classification response (For testing purposes)
        let activityType = req.body.activity;  // "plastic" or "can"
        
        if (!activityType || !ACTIVITY_POINTS[activityType]) {
            // Simulate logic, e.g., you can simulate a "plastic" or "can" result manually
            activityType = Math.random() > 0.5 ? 'plastic' : 'can'; // Randomly simulate either 'plastic' or 'can'
        }

        // Validate classification type
        if (!ACTIVITY_POINTS[activityType]) {
            return res.status(400).json({ msg: "Image classification failed" });
        }

        // Find the user and reward points
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Award points for the activity
        const pointsAwarded = ACTIVITY_POINTS[activityType];
        user.points += pointsAwarded;

        // Log the eco activity and points awarded
        user.ecoActivities = user.ecoActivities || [];
        user.ecoActivities.push({
            activity: activityType,
            pointsAwarded,
            date: new Date()
        });

        await user.save();

        // Send response with total points
        res.json({
            msg: `Eco activity recorded. You earned ${pointsAwarded} points for ${activityType}`,
            pointsAwarded,
            totalPoints: user.points
        });

        // Optionally delete the image after use (not necessary if you just simulate)
        // const fs = require('fs');
        // fs.unlink(imagePath, (err) => {
        //     if (err) console.error('Error deleting uploaded image:', err);
        // });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;

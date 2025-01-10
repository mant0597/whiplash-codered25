const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const User = require('../models/User');

const router = express.Router();

// Reward points for "plastic" and "can"
const ACTIVITY_POINTS = {
    plastic: 15,
    can: 25
};

// Eco activity (Random activity without image upload)
router.post('/eco-activity', verifyToken, async (req, res) => {
    // Simulate a random eco activity (either "plastic" or "can")
    const activities = ['plastic', 'can'];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];

    const pointsAwarded = ACTIVITY_POINTS[randomActivity];

    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Log the current user's activity data for debugging
        console.log("User data:", user);

        const today = new Date();
        const lastActivityDate = user.lastActivityDate ? new Date(user.lastActivityDate) : null;

        console.log("Today:", today);
        console.log("Last Activity Date:", lastActivityDate);

        // If it's the first activity (new user or no activity done before)
        if (!lastActivityDate) {
            // First activity, set streak to 1
            console.log("First activity - Setting streak to 1");
            user.streak = 1;
        } else {
            // Compare only the date part of the lastActivityDate and today
            const isSameDay = today.toDateString() === lastActivityDate.toDateString();
            const isNextDay = (today - lastActivityDate) / (1000 * 60 * 60 * 24) === 1;

            console.log("Is Same Day:", isSameDay);
            console.log("Is Next Day:", isNextDay);

            if (isSameDay) {
                // Same day, so don't reset streak, but allow multiple activities
                console.log("Same day, keeping streak as is (or initializing to 1 if not set yet)");
                if (user.streak === 0) {
                    // If streak is still 0, initialize it to 1
                    user.streak = 1;
                }
            } else if (isNextDay) {
                // If it's the next day, increment streak
                console.log("Incrementing streak by 1");
                user.streak += 1;
            } else {
                // If a day is missed, reset streak to 1
                console.log("Missed a day, resetting streak to 1");
                user.streak = 1;
            }
        }

        // Log the new streak value for debugging
        console.log("Updated Streak:", user.streak);

        // Update points
        user.points += pointsAwarded;

        // Update activity log with the correct 'activityType'
        user.ecoActivities.push({
            activityType: randomActivity, // This is the required field
            pointsEarned: pointsAwarded,  // Points earned for the activity
            timestamp: today // The date of the activity
        });

        user.lastActivityDate = today; // Update last activity date

        // Save the user data
        await user.save();

        // Send the response with updated streak and points
        res.json({
            msg: `Eco activity recorded. You earned ${pointsAwarded} points for ${randomActivity}`,
            pointsAwarded: pointsAwarded,
            totalPoints: user.points,
            streak: user.streak, // Send the updated streak to the client
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;

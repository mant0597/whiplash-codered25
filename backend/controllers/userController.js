// controllers/userController.js
const User = require('../models/User');

// Controller to get user stats (points and badges)
const getUserStats = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('points ecoBadges'); // Fetch points and badges only
    if (!user) {
        return res.status(404).json({ msg: 'User not found' });
    }
    
    const stats = {
      points: user.points,
      badges: user.ecoBadges.length,
    };

    res.json(stats); // Send points and badge count to the client
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
};

// Controller to redeem tree using points
const redeemTree = async (req, res) => {
  try {
      const { treeType, pointsRequired } = req.body;
      const userId = req.user.id; // Extracted from token

      // Find user by `userId`
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ msg: "User not found" });

      // Check if user has enough points
      if (user.points < pointsRequired) {
          return res.status(400).json({ msg: "Insufficient points" });
      }

      // Deduct points and add tree to redeemedTrees
      user.points -= pointsRequired;
      user.redeemedTrees.push({ treeType, pointsUsed: pointsRequired });
      await user.save();

      res.json({ msg: "Tree redeemed successfully", user });
  } catch (err) {
      res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { getUserStats, redeemTree };

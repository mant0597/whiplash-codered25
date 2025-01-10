const mongoose = require('mongoose');

// Define schema for eco activities
const ecoActivitySchema = new mongoose.Schema({
    activityType: { type: String, required: true },
    description: { type: String },
    pointsEarned: { type: Number, default: 0 },
    timestamp: { type: Date, default: Date.now }
});

// Define schema for redeemed trees
const redeemedTreeSchema = new mongoose.Schema({
    treeType: { type: String, required: true },
    pointsUsed: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Define schema for eco badges
const ecoBadgeSchema = new mongoose.Schema({
    badgeName: { type: String, required: true },
    description: { type: String },
    dateEarned: { type: Date, default: Date.now }
});

// Define user schema with eco activities, redeemed trees, and eco badges
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, default: 'user', enum: ['user', 'admin'] },
    points: { type: Number, default: 25 }, // Starting points
    streak: { type: Number, default: 0 }, // Streak for consecutive eco activities
    lastActivityDate: { type: Date, default: Date.now }, // Last time activity was logged
    ecoActivities: [ecoActivitySchema], // Array of eco activities the user has done
    redeemedTrees: [redeemedTreeSchema], // Array of redeemed trees and points used
    ecoBadges: [ecoBadgeSchema], // Array of eco badges earned by the user
    plantTrees: { type: Number, default: 0 } // Number of trees the user has planted
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

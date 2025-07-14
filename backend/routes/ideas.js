// backend/routes/ideas.js
const express = require('express');
const Idea = require('../models/Idea');
const router = express.Router();

// Get all ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find().sort({ createdAt: -1 });
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Post a new idea
router.post('/', async (req, res) => {
  try {
    const idea = new Idea(req.body);
    await idea.save();
    res.status(201).json(idea);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

module.exports = router;

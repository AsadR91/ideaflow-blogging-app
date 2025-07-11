const express = require('express');
const Idea = require('../models/Idea');
const router = express.Router();

router.get('/', async (req, res) => {
  const ideas = await Idea.find().sort({ createdAt: -1 });
  res.json(ideas);
});

router.post('/', async (req, res) => {
  const idea = new Idea(req.body);
  await idea.save();
  res.json(idea);
});

module.exports = router;
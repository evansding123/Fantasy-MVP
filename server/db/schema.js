const mongoose = require('mongoose');
const db = require('./mongo.js');


const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  team: String,
  games: Number,
  minutes: Number,
  points: Number,
  FGM: Number,
  FGA: Number,
  threePtsMade: Number,
  threePtsAttempted: Number,
  FTM: Number,
  FTA: Number,
  OREB: Number,
  DREB: Number,
  assists: Number,
  TO: Number,
  steals: Number,
  blocks: Number,
  TS: Number
});

const Player = mongoose.model('Player', playerSchema);


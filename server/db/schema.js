const mongoose = require('mongoose');
const db = require('./mongo.js');


const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
  team: String,
  points: Number,
  FGM: Number,
  FGA: Number,
  threePtsMade: Number,
  FTM: Number,
  FTA: Number,
  REB: Number,
  assists: Number,
  TO: Number,
  steals: Number,
  blocks: Number,

});

const teamSchema = new mongoose.Schema ({
  team: [playerSchema]
});

const Player = mongoose.model('Player', playerSchema);

const Team = mongoose.model('Team',teamSchema);

module.exports = {
  Player: Player,
  Team: Team
}
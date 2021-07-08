const db = require('./db/schema.js');




const test = new db.Player({
  name: 'bob',
  position: 'jones',
  team: 'warriors',
  points: 1,
  FGM: 2,
  FGA: 3,
  threePtsMade: 5,
  FTM: 1,
  FTA: 1,
  REB: 4,
  assists: 5,
  TO: 2,
  steals: 1,
  blocks: 5,
})

const testTeam = new db.Team({
  team: [test]
})

module.exports = {
  getAll: async () => {
    try {
      const result = await db.Team.find();
      return result;
    } catch (err) {
      console.log(err);
      throw new Error();
    }

  },

  post: (array) => {
    let team = new db.Team({
      team: array
    })
    team.save(function(err, team) {
      if(err) {
        console.log(err);
      } else {
        console.log(team);
      }
    })
  }
}



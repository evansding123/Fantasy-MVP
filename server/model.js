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

  post: async (array) => {
    try {
      let team = new db.Team({
        team: array
      })
      console.log('data in model', team);
      const result = await team.save();
      return result;
    } catch(err) {
      console.log(err);
      throw new Error();
    }

  },

  delete: async (id) => {
    try {
      console.log('id in model', id);
      let result = await db.Team.deleteOne({
        _id: id
      });
      return result;
    } catch(err) {
      console.log(err);
      throw new Error();
    }
  }
}


//module.exports.delete('60e7cae68ac3d47addd9ebaf')

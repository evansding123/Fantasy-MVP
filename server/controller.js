const axios = require('axios');
const TOKEN = require('../config');
const model = require('./model.js');

const getLeaders = async (date = '2020') => {
  const option = {
    method: 'get',
    url: `https://api.sportradar.us/nba/trial/v7/en/seasons/${date}/REG/leaders.json?api_key=${TOKEN.SRKey}`
  }
  try {
    const response = await axios(option);
    //console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    //throw new Error(err);
  }

}

const postPlayer  = async (array) => {
  try {
    const response = await model.post(array);
    console.log(response);
    return response;
  } catch(err) {
    console.log(err);
    throw new Error();
  }
}
module.exports = {
  getLeaders : getLeaders,
  postPlayer: postPlayer
}

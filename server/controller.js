const axios = require('axios');
const TOKEN = require('../config');

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

module.exports = {
  getLeaders : getLeaders
}

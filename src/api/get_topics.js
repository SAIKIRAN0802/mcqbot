const axios = require('axios')

exports.handler = async function(event, context) {
  const topic = event.queryStringParameters.topic;
  const data = await axios.get(`http://34.68.254.34:8000/get_topics?topic=${topic}`);
  return {
      statusCode: 200,
      body: JSON.stringify(data.data.hits.hits)
  };
}
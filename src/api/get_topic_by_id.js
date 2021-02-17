const axios = require('axios')

exports.handler = async function(event, context) {
  const id = event.queryStringParameters.id;
  const data = await axios.get(`http://34.68.254.34:8000/get_topic_by_id?id=${id}`);
  return {
      statusCode: 200,
      body: JSON.stringify(data.data)
  };
}
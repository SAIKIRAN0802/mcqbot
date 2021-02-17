const axios = require('axios')
export async function handler(event, context, callback) {
    const id = event.queryStringParameters.id;
    const data = await axios.get(`http://34.68.254.34:8000/get_topic_by_id?id=${id}`);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data.data),
    })
  }
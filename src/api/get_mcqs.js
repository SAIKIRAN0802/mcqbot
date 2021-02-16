const axios = require('axios')
export async function handler(event, context, callback) {
    const topic = event.queryStringParameters.topic;
    axios.get(`http://34.68.254.34:8000/get_topcs?topic=${topic}`).then((data) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.data),
      });
    })
    
  }
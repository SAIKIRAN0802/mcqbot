const axios = require('axios')
export async function handler(event, context, callback) {
    const data = await axios.get("http://34.68.254.34:8000/get_mcqs");
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data.data),
    });
  }
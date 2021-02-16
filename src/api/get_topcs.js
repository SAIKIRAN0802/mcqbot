const axios = require('axios')
export async function handler(event, context, callback) {
    const data = await axios.get("http://34.68.254.34:8000/get_topcs").catch(err =>{
      console.log(err);
    });
    console.log(data.data);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data.data.hits.hits),
    });
  }
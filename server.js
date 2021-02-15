const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios')
app.get('/api/quiz/get_mcqs', (request, response) => {

    const apiUrl = "http://34.68.254.34:8000/get_mcqs"
    const query = request.query || {};
    if (query._id) {
        query._id = ObjectId(query._id);
    }
    axios.get(apiUrl).then((results) => {
        response.json(JSON.stringify(results.data));
    });
});
function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}
app.use(logger);
app.use(express.static(path.join(__dirname, 'build')));
const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`
      *********************************************
      * Insecure prototyping backend is running!  *
      * Only use for prototyping                  *
      * Backend server up at ${PORT}              *
      *********************************************
    `);
  })
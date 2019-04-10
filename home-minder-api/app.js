const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const shortid = require('shortid');

app.locals.home = [
  { id: shortid.generate(),
    room: "Kitchen",
    category: "Filters",
    name: "Refrigerator Filter",
    replaceRecommend: "6 months",
    replaceUserPref: "",
    brand: "",
    model: "",
    purchaseLocation: "",
    replacedHistory: [],
  }
]

app.get('/api/v1/home', (request, response) => {
  return response.status(200).json(app.locals.home)
})
app.set('port', 3001);

module.exports = app
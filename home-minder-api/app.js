const express = require('express');
const app = express();
const cors = require('cors')
const shortid = require('shortid');
app.use(express.json());
app.use(cors());

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

app.get('api/v1/home', (request, response) => {
  return response.status(200).json(app.locals.home)
})

export default app
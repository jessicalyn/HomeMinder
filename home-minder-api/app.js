const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
import { homeData } from './homeData'

app.locals.home = homeData

app.get('/api/v1/home', (request, response) => {
  console.log(app.locals.home)
  return response.status(200).json(app.locals.home)
})

export default app;
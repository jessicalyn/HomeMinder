const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
import { homeData } from './homeData'

app.locals.home = homeData

app.get('/api/v1/home', (request, response) => {
  return response.status(200).json(app.locals.home)
})

app.get('/api/v1/:id', (request, response) => {
  const itemById = app.locals.filter(item => request.id == item.id)
  console.log(itemById)
  return response.status(200).json(itemById)
})

export default app;
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
  const itemById = app.locals.home.filter(item => request.id == item.id)
  return response.status(200).json(itemById)
})

app.put('/api/v1/:id', (request, response) => {
  const { home } = app.locals.home
  
  let found = false
  const updatedHomeData = home.map(item => {
    if (request.id == item.id) {
      found = true
      return {
        brand: request.brand,
        model: request.model,
        purchaseLocation: request.purchaseLocation,
        userScheduled: request.userScheduled,
      }
    } else {
      return item
    }
  })
  
  home = updatedHomeData
  console.log(home)
  return response.status(204)
})

export default app;
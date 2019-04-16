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
  const { home } = app.locals
  const itemById = app.locals.home.filter(item => request.params.id == item.id)
  return response.status(200).json(itemById)
})

app.put('/api/v1/:id', (request, response) => {
  const { home } = app.locals
  const { id } = request.params
  const { brand, model, purchaseLocation, userScheduled } = request.body
  
  let found = false
  const updatedHomeData = home.map(item => {
    if (id == item.id) {
      found = true
      return {
        brand: brand || item.brand,
        model: model || item.model,
        purchaseLocation: purchaseLocation || item.purchaseLocation,
        userScheduled: userScheduled || item.userScheduled,
        id,
        room: item.room,
        category: item.category,
        name: item.name,
        lastReplaced: item.lastReplaced,
        recommendation: item.recommendation,
        type: item.type
      }
    } else {
      return item
    }
  })
  if(!found) return response.status(404).json("Item was not found")
  
  app.locals.home = updatedHomeData
  return response.status(204)
})

export default app;
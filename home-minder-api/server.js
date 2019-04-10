const  app = require('./app');



app.listen(app.get('port'), () => {
  console.log('Server is now running at http://localhost:3001');
});
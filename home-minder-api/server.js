import app from './app'

app.set('port', 3001);

app.listen(app.get('port'), () => {
  console.log(`Server is now running at http://localhost:3001:${app.get('port')}`);
});
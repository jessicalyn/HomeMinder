import app from './app';

app.listen(app.get('3001'), () => {
  console.log('Server is now running at http://localhost:3001');
});
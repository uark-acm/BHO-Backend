import express_app from './loaders/express';
const port = 3000;

express_app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

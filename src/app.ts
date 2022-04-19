import configureEndpoints from './api';
import express_app from './loaders/express';
const port = process.env.PORT || 80;

configureEndpoints(express_app);

express_app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

import configureEndpoints from './api';
import express_app from './loaders/express';
import { sequelizeConnection } from './loaders/sequelize';
import { initializeModels } from './models';
import BHOItemCategory from './models/bho_item_category.model';
const port = process.env.PORT || 80;

configureEndpoints(express_app);

//TODO: Add shit to make some fields optional in the creation of an object (not all)
express_app.listen(port, async () => {
  await sequelizeConnection()
  await initializeModels()
  console.log("All models were synchronized successfully.");
  return console.log(`Express is listening at http://localhost:${port}`);
});

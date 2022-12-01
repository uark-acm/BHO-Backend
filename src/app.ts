import configureEndpoints from './api';
import express_app from './loaders/express';
import * as sqlizer from './models/sequelizeModels'
import { sequelize, sequelizeConnection } from './loaders/sequelize';
const port = process.env.PORT || 80;
/*
configureEndpoints(express_app);
*/
express_app.listen(port, async () => {
  sqlizer.borrow_request;
  sqlizer.bho_item;
  sqlizer.bho_item_category;
  sqlizer.bho_order;
  await sequelizeConnection()
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
  return console.log(`Express is listening at http://localhost:${port}`);
});

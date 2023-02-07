import { Express, Request } from 'express';
import { getItems } from "../services/clothingItemsService";
import { BHOItemCreationAttributes } from "../models/bho_item.model";
import { BHOItemCreateRequest } from '@uark-acm/bho-data-models/lib';

const configureClothingItemEndpoints = (app: Express) => {
    app.get('/clothingItems', async (req, res) => {
       const clothes = await getItems();
       res.send(clothes);
    });

    app.post('/clothingItems', (req: Request<object, string, BHOItemCreateRequest>, res) => {
        res.send("return the created object here");
    });

    app.get('/', (req, res) => {
        res.send("test endpoint");
    });
}

export default configureClothingItemEndpoints;
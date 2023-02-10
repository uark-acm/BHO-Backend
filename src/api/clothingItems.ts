import { Express, Request } from 'express';
import { createItem, getItems } from "../services/clothingItemsService";
import BHOItem, { BHOItemCreationAttributes } from "../models/bho_item.model";
import { BHOItemCreateRequest } from '@uark-acm/bho-data-models/lib';

const configureClothingItemEndpoints = (app: Express) => {
    app.get('/clothingItems', async (req: Request<object, BHOItem[], BHOItemCreateRequest>, res) => {
       const clothes = await getItems();
       res.send(clothes);
    });

    app.post('/clothingItems', async (req: Request<object, string, BHOItemCreateRequest>, res) => {
        const clothingItem = await createItem(req.BHOItemCreateRequest)
        res.send("return the created object here");
    });

    app.get('/', (req, res) => {
        res.send("test endpoint");
    });
}

export default configureClothingItemEndpoints;
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
        const request = req.body
        const attributes: BHOItemCreationAttributes = {
            item_name: request.name,
            in_stock: true,
            item_description: request.description,
            category_id: request.category_id,
            size: request.size,
            item_image_url: request.image,
            set_id: request.set_id,
        }
        const clothingItem = await createItem(attributes)
        res.send("return the created object here");
    });

    app.get('/', (req, res) => {
        res.send("test endpoint");
    });
}

export default configureClothingItemEndpoints;
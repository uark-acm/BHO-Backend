import { Express, Request } from 'express';
import {
    createItem,
    deleteItem,
    getItems,
} from '../services/clothingItemsService';
import BHOItem, { BHOItemCreationAttributes } from '../models/bho_item.model';
import { BHOItemCreateRequest } from '@uark-acm/bho-data-models/lib';
import { uploadImage } from '../services/imageService';

const configureClothingItemEndpoints = (app: Express) => {
    app.get(
        '/clothingItems',
        async (req: Request<object, BHOItem[], BHOItemCreateRequest>, res) => {
            try {
                const clothes = await getItems();
                res.send(clothes);
            } catch (error: any) {
                res.send(error);
            }
        }
    );

    app.post(
        '/clothingItems',
        async (req: Request<object, BHOItem, BHOItemCreateRequest>, res) => {
            try {
                const { name, description, category_id, size, image, set_id } =
                    req.body;

                const image_url = await uploadImage(image);
                const attributes: BHOItemCreationAttributes = {
                    item_name: name,
                    in_stock: true,
                    item_description: description,
                    category_id: category_id,
                    size: size,
                    item_image_url: image_url,
                    set_id: set_id,
                };
                const newItem: BHOItem = await createItem(attributes);
                res.send(newItem);
            } catch (error: any) {
                res.send(error);
            }
        }
    );

    app.delete(
        '/clothingItems',
        async (req: Request<object, string, BHOItem>, res) => {
            try {
                const { id } = req.body;
                await deleteItem(id);
                res.send('Item deleted successfully.');
            } catch (error: any) {
                res.send(error);
            }
        }
    );

    app.get('/', (req, res) => {
        res.send('test endpoint');
    });
};

export default configureClothingItemEndpoints;

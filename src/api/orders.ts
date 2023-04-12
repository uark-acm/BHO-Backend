import { Express } from 'express';

const configureOrderEndpoints = (app: Express) => {
    app.get('/orders', async (req, res) => {
        res.send([]);
    });

        /*
    app.post('/orders', async (req: Request<object, string, BHOOrderReq>, res) => {
        const { name, description, category_id, size, image, set_id } =
            req.body;
        const attributes: BHOItemCreationAttributes = {
            item_name: name,
            in_stock: true,
            item_description: description,
            category_id: category_id,
            size: size,
            item_image_url: image,
            set_id: set_id,
        };
        const clothingItem = await createItem(attributes);
        res.send('return the created object here');
    });
    */
        res.send('return the created object here');
    });
};

export default configureOrderEndpoints;

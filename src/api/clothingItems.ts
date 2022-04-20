import databaseConnection from "../loaders/postgres";
import { Request, Response, Express } from 'express';
import { getClothingItems } from "../services/clothingItemsService";

const configureClothingItemEndpoints = (app: Express) => {
    app.get('/clothingItems', async (req, res) => {
       const clothes = await getClothingItems();
       res.send(clothes);
    });
    app.get('/', (req, res) => {
        res.send("test endpoint");
    })
}

export default configureClothingItemEndpoints;
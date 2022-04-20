import databaseConnection from "../loaders/postgres";
import { Express } from 'express';
import { getClothingItems } from "../services/clothingItemsService";
import { CreateClothingItemRequest } from "@uark-acm/bho-data-models/lib";

const configureClothingItemEndpoints = (app: Express) => {
    app.get('/clothingItems', async (req, res) => {
       const clothes = await getClothingItems();
       res.send(clothes);
    });

    app.post('/clothingItems', (req, res) => {
        res.send("return the created object here");
    });

    app.get('/', (req, res) => {
        res.send("test endpoint");
    });
}

export default configureClothingItemEndpoints;
import databaseConnection from "../loaders/postgres";
import { Express } from 'express';
import { CreateClothingItemRequest } from "@uark-acm/bho-data-models/lib";
import { getItems } from "../services/clothingItemsService";

const configureClothingItemEndpoints = (app: Express) => {
    app.get('/clothingItems', async (req, res) => {
       const clothes = await getItems();
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
import databaseConnection from "../loaders/postgres";
import { Request, Response, Express } from 'express';

const configureClothingItemEndpoints = (app: Express) => {
    app.get('/clothingItems', async (req: Request, res: Response) => {
        const response = await databaseConnection.query('select * from orders;')
        res.send('Hello world!: ' + JSON.stringify((await response).rows));
    });
    app.get('/', (req, res) => {
        res.send('hello');
    })
}

export default configureClothingItemEndpoints;
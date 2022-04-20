import { Express } from 'express';

const configureOrderEndpoints = (app: Express) => {
    app.get('/orders', async (req, res) => {
        res.send([]);
    });
}

export default configureOrderEndpoints;
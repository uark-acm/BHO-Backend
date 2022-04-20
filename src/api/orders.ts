import { Express } from 'express';

const configureOrderEndpoints = (app: Express) => {
    app.get('/orders', async (req, res) => {
        res.send([]);
    });

    app.post('/orders', (req, res) => {
         res.send("return the created object here");
    });
}

export default configureOrderEndpoints;
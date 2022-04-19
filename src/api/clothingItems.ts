import client from "../loaders/postgres";

const configureClothingItemEndpoints = (app) => {
    app.get('/', async (req, res) => {
        //res.send("HELLO WORLD");
        await client.connect();
        const response = client.query('select * from clothing_item_conditions;')
        res.send('Hello world!: ' + JSON.stringify((await response).rows));
        client.end();
    });
}

export default configureClothingItemEndpoints;
import { Express } from 'express';
import { getCategories } from '../services/categoriesService';

const configureCategoriesEndpoints = (app: Express) => {
    app.get('/categories', async (req, res) => {
        const categories = await getCategories();
        res.send(categories);
    });
}

export default configureCategoriesEndpoints;
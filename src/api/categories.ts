import { Express } from 'express';
import { getCategories } from '../services/categoriesService';

const configureCategoriesEndpoints = (app: Express) => {
    app.get('/categories', async (req, res) => {
        try {
            const categories = await getCategories()
            res.send(categories)
        } catch (error: any) {
            res.send(error)
        }
    })
}

export default configureCategoriesEndpoints;

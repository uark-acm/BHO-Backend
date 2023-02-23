import { Express } from 'express'
import configureCategoriesEndpoints from './categories'
import configureClothingItemEndpoints from './clothingItems'
import configureOrderEndpoints from './orders'

const configureEndpoints = (express_app: Express) => {
    configureClothingItemEndpoints(express_app)
    configureOrderEndpoints(express_app)
    configureCategoriesEndpoints(express_app)
}

export default configureEndpoints

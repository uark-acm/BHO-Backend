import configureClothingItemEndpoints from './clothingItems'
import configureOrderEndpoints from './orders'

const configureEndpoints = (express_app) => {
    configureClothingItemEndpoints(express_app)
    configureOrderEndpoints(express_app)
}

export default configureEndpoints

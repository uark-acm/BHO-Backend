import databaseConnection from "../loaders/postgres"
import BHOItem, { BHOItemCreationAttributes } from "../models/bho_item.model";


export const getItems = async (): Promise<BHOItem[]> => {
    return await BHOItem.findAll()
} 

export const createItem = async (bhoItem: BHOItemCreationAttributes) => {
    await BHOItem.create(bhoItem)
}
 
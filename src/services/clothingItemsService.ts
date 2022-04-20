import { ClothingItem, ClothingItemDatabaseRow, DatabaseRowToClothingItem } from "@uark-acm/bho-data-models/lib";
import databaseConnection from "../loaders/postgres"


export const getClothingItems = async (): Promise<ClothingItem[]> => {
    const queryResponse = await databaseConnection.query('select * from clothing_items;');
    const dbClothingItems: ClothingItemDatabaseRow[] = (await queryResponse).rows;
    return dbClothingItems.map(item => {
        return DatabaseRowToClothingItem(item)
    });
} 
 
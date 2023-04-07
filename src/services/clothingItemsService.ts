import databaseConnection from '../loaders/postgres';
import BHOItem, { BHOItemCreationAttributes } from '../models/bho_item.model';

export const getItems = async (): Promise<BHOItem[]> => {
    return await BHOItem.findAll();
};

export const createItem = async (
    bhoItem: BHOItemCreationAttributes
): Promise<BHOItem> => {
    return await BHOItem.upsert(bhoItem)[0]; // upsert returns object and boolean, we only need object
};

export const deleteItem = async (bhoItemId: number): Promise<void> => {
    const bhoItem = await BHOItem.findOne({ where: { id: bhoItemId } });
    await bhoItem.destroy();
};

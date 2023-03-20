import BHOItemCategory from '../models/bho_item_category.model';

export const getCategories = async (): Promise<BHOItemCategory[]> => {
    return await BHOItemCategory.findAll();
};

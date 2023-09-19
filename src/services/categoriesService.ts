import { BHOItemCategory } from '@uark-acm/bho-data-models/lib';
import BHOItemCategoryDBRow from '../models/bho_item_category.model';

export const getCategories = async (): Promise<BHOItemCategory[]> => {
    const categories = await BHOItemCategoryDBRow.findAll();
    return categories.map((category) => {
        return {
            id: category.id,
            name: category.category_name,
            sizes: category.sizes,
        };
    });
};

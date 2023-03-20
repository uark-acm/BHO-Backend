import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/sequelize';

type BHOItemCategoryAttributes = {
    id: number;
    category_name: string;
    sizes: string[];
};

export type BHOItemCategoryCreationAttributes = Optional<
    BHOItemCategoryAttributes,
    'id'
>;

class BHOItemCategory extends Model<
    BHOItemCategoryAttributes,
    BHOItemCategoryCreationAttributes
> {
    declare id: number;
    declare category_name: string;
    declare sizes: string[];
}

BHOItemCategory.init(
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sizes: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
    },
    {
        tableName: 'bho_item_category',
        sequelize: sequelize,
    }
);

export default BHOItemCategory;

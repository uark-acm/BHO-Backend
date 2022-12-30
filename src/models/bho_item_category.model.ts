import { Model, Optional, Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/sequelize';


/*
export const bho_item_category_model = (sequelize: Sequelize) => {
    return sequelize.define("bho_item_category", {
        id: {
            primaryKey: true,
            type: DataType.INTEGER,
            allowNull: false
        },
        category_name: {
            type: DataType.STRING,
            allowNull: false
        },
        sizes: {
            type: DataType.ARRAY(DataType.STRING),
            allowNull: false
        }
    })
}
*/

type BHOItemCategoryAttributes = {
    id: number,
    category_name: string,
    sizes: string[]
};
  
type BHOItemCategoryCreationAttributes = Optional<BHOItemCategoryAttributes, 'id'>;

class BHOItemCategory extends Model<BHOItemCategoryAttributes, BHOItemCategoryCreationAttributes> {
    declare id: number;
    declare category_name: string;
    declare sizes: string[];
}

BHOItemCategory.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sizes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, {
    tableName: 'bho_item_category',
    sequelize: sequelize
})

export default BHOItemCategory
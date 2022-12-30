import { Model, Optional, Sequelize, DataTypes } from 'sequelize';
import internal from 'stream';
import { sequelize } from '../loaders/sequelize';

import BHOItemCategory from './bho_item_category.model';
import BHOItemSet from './bho_item_set.model';
/*
export const bho_item_model = (sequelize: Sequelize, bho_item_set, bho_item_category) => {
    return sequelize.define("bho_item", {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          allowNull: false
        },
        item_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        in_stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        item_description: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: bho_item_category,
              key: 'id',
            },
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
        },
        item_image_url: {
            type: DataTypes.STRING(1024),
            allowNull: false
        },
        set_id: {
            type: DataTypes.INTEGER,
            references: {
              model: bho_item_set,
              key: 'id',
            },
        }
    })
}
*/
type BHOItemAttributes = {
  id: number,
  item_name: string,
  in_stock: boolean,
  item_description: string,
  category_id: number,
  size: string,
  item_image_url: string,
  set_id: number
};

type BHOItemCreationAttributes = Optional<BHOItemAttributes, 'id'>;

class BHOItem extends Model<BHOItemAttributes, BHOItemCreationAttributes> {
  declare id: number;
  declare item_name: string;
  declare in_stock: boolean;
  declare item_description: string;
  declare category_id: number;
  declare size: string;
  declare item_image_url: string;
  declare set_id: number;
}

BHOItem.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  in_stock: {
      type: DataTypes.BOOLEAN,
      allowNull: false
  },
  item_description: {
      type: DataTypes.STRING(1024),
      allowNull: false
  },
  category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: BHOItemCategory,
        key: 'id',
      },
      allowNull: false
  },
  size: {
      type: DataTypes.STRING,
  },
  item_image_url: {
      type: DataTypes.STRING(1024),
      allowNull: false
  },
  set_id: {
      type: DataTypes.INTEGER,
      references: {
        model: BHOItemSet,
        key: 'id',
      },
  }
}, {
  tableName: 'bho_item',
  sequelize: sequelize
})

export default BHOItem

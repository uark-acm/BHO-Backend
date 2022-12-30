import { Model, Optional, Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/sequelize';


/*
export const bho_item_set_model = (sequelize: Sequelize) => {
  return sequelize.define("bho_item_set", {
    id: {
        primaryKey: true,
        type: DataType.INTEGER,
        allowNull: false
      },
      set_type: {
        type: DataType.STRING,
        allowNull: false
    }
  })
}
*/

type BHOItemSetAttributes = {
  id: number,
  set_type: string,
};

type BHOItemSetCreationAttributes = Optional<BHOItemSetAttributes, 'id'>;

class BHOItemSet extends Model<BHOItemSetAttributes, BHOItemSetCreationAttributes> {
  declare id: number;
  declare set_type: string;
}

BHOItemSet.init({
  id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
  },
  set_type: {
      type: DataTypes.STRING,
      allowNull: false
  },
}, {
  tableName: 'bho_item_set',
  sequelize: sequelize
})

export default BHOItemSet
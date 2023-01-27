import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/sequelize';

type BHOItemSetAttributes = {
  id: number,
  set_type: string,
};

export type BHOItemSetCreationAttributes = Optional<BHOItemSetAttributes, 'id'>;

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
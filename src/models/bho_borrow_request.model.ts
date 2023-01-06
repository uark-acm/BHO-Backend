import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/sequelize';
import BHOItem from './bho_item.model';
import BHOOrder from './bho_order.model';

type BHOBorrowRequestAttributes = {
    id: number,
    item_id: number,
    order_id: number,
    date_out: Date,
    date_in: Date
};
  
type BHOBorrowRequestCreationAttributes = Optional<BHOBorrowRequestAttributes, 'id'>;

class BHOBorrowRequest extends Model<BHOBorrowRequestAttributes, BHOBorrowRequestCreationAttributes> {
    declare id: number;
    declare item_id: number;
    declare order_id: number;
    declare date_out: Date;
    declare date_in: Date;
}

BHOBorrowRequest.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      item_id: {
        type: DataTypes.INTEGER,
        references: {
          model: BHOItem,
          key: 'id',
        },
        allowNull: false
      },
      order_id: {
          type: DataTypes.INTEGER,
          references: {
              model: BHOOrder,
              key: 'id',
          },
          allowNull: false
      },
      date_out: {
          type: DataTypes.DATE
      },
      date_in: {
          type: DataTypes.DATE
      }
}, {
    tableName: 'bho_borrow_request',
    sequelize: sequelize
})

export default BHOBorrowRequest
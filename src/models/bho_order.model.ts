import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/sequelize';

type BHOOrderAttributes = {
    id: number,
    user_name: string,
    user_email: string,
    user_is_international: string,
    user_reason?: string,
    event_date?: Date,
    order_placed: Date,
    requested_pickup: Date;
    order_status: string;
}
  
type BHOOrderCreationAttributes = Optional<BHOOrderAttributes, "id">
  
class BHOOrder extends Model<BHOOrderAttributes, BHOOrderCreationAttributes> {
    declare id: number;
    declare user_name: string;
    declare user_email: string;
    declare user_is_international: string;
    declare user_reason?: string;
    declare event_date?: Date;
    declare order_placed: Date;
    declare requested_pickup: Date;
    declare order_status: string;
}
  
BHOOrder.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      user_is_international: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      user_reason: {
          type: DataTypes.STRING(1024),
      },
      event_date: {
          type: DataTypes.DATE,
      },
      order_placed: {
          type: DataTypes.DATE,
          allowNull: false
      },
      requested_pickup: {
          type: DataTypes.DATE,
          allowNull: false
      },
      order_status: {
          type: DataTypes.STRING,
          allowNull: false
      },
}, {
    tableName: 'bho_order',
    sequelize: sequelize
  })
  

export default BHOOrder

import { DataTypes, Sequelize } from "sequelize";

import {sequelize} from "../loaders/sequelize"

export const bho_item_set = sequelize.define('bho_item_set', {
  // Model attributes are defined here
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  set_type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {});

export const bho_item_category = sequelize.define('bho_item_category', {
    // Model attributes are defined here
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sizes: {
        type: DataTypes.ARRAY(DataTypes.STRING)
  }
}, {});


export const bho_item = sequelize.define('bho_item', {
  // Model attributes are defined here
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
  },
}, {});


export const bho_order = sequelize.define('bho_order', {
    // Model attributes are defined here
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
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
}, {});


export const borrow_request = sequelize.define('borrow_request', {
    // Model attributes are defined here
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: bho_item,
        key: 'id',
      },
      allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER,
        references: {
            model: bho_order,
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
}, {});
import { Model, DataTypes } from "sequelize";
import { addressHasRequiredFields, addressNonEmptyFields } from "../services/order.service.js";

class Order extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.INTEGER,
                },
                status: {
                    allowNull: false,
                    type: DataTypes.STRING(30),
                },
                products: {
                    allowNull: true,
                    type: DataTypes.ARRAY(DataTypes.INTEGER),
                },
                client_id: {
                    allowNull: false,
                    type: DataTypes.INTEGER,
                },
                delivery_address: {
                    allowNull: true,
                    type: DataTypes.JSONB,
                    validate: {
                        addressHasRequiredFields,
                        addressNonEmptyFields
                    }
                },
                billing_address: {
                    allowNull: true,
                    type: DataTypes.JSONB,
                    validate: {
                        addressHasRequiredFields,
                        addressNonEmptyFields
                    }
                }
            },
            {
                sequelize,
            }
        );
    }
}

export default Order;
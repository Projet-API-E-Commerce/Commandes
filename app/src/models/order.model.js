import { Model, DataTypes } from "sequelize";

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
                name: {
                    allowNull: false,
                    type: DataTypes.STRING(255),
                },
                description: {
                    allowNull: true,
                    default: null,
                    type: DataTypes.TEXT,
                },
                data: {
                    allowNull: true,
                    default: null,
                    type: DataTypes.TEXT,
                },
                is_out: {
                    allowNull: false,
                    type: DataTypes.BOOLEAN,
                    default: false,
                },
            },
            {
                sequelize,
            }
        );
    }

    static associate({ Domain }) {
        Order.belongsTo(Domain, {
            foreignKey: {
                name: "domain_id",
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            as: "domain",
        });
        // Une Order appartient à un domaine
    }
}

export default Order;
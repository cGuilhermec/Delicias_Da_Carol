import { DataTypes, Model } from "sequelize";
import { IUserAttributes } from "../interfaces/IUserAttributes";
import sequelize from "../config/dataBase";


class User extends Model<IUserAttributes> implements IUserAttributes {
    public id!: number;
    public nome!: string;
    public email!: string;
    public password!: string;

    //timeStamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
    }
);

export default User;
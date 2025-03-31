import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db"; // Import database connection

class Task extends Model {
  public taskId!: number;
  public name!: string;
  public content!: string;
  public startDate?: Date;
  public endDate?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    taskId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Tasks", // Define table name
    timestamps: true, // Enable automatic createdAt and updatedAt timestamps
  }
);

export default Task;

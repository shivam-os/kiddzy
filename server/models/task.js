module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "task",
    {
      taskId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      timeline: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        required: true, 
      },
      coinPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10
      },
    },
    {
      timestamps: false,
    }
  );

  return Task;
};

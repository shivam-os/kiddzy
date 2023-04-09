module.exports = (sequelize, DataTypes) => {
  const KidTask = sequelize.define(
    "kid_task",
    {
      kidId: {
        type: DataTypes.INTEGER,
      },
      taskId: {
        type: DataTypes.INTEGER,
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return KidTask;
};

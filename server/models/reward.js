module.exports = (sequelize, DataTypes) => {
  const Reward = sequelize.define(
    "reward",
    {
      rewardId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
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

  return Reward;
};

module.exports = (sequelize, DataTypes) => {
  const KidReward = sequelize.define(
    "kid_reward",
    {
      kidId: {
        type: DataTypes.INTEGER,
      },
      rewardId: {
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      timestamps: false,
    }
  );

  return KidReward;
};

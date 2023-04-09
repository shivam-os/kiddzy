module.exports = (sequelize, DataTypes) => {
  const Kid = sequelize.define(
    "kid",
    {
      kidId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      dob: {
        type: DataTypes.DATEONLY,
        required: true,
        allowNull: false,
      },
      coins: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
    }
  );

  return Kid;
};

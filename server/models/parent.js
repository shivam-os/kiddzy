module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define(
    "parent",
    {
      parentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Parent;
};

const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

//Create connection to the database using given credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

//Check the connection to the database
const checkDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully.");
  } catch (err) {
    console.log("Error while connecting to the database:", err);
  }
};
checkDBConnection();

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

//Sync all the tables with the database
const syncAllTables = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log("All the tables are synced syccessfully.");
  } catch (err) {
    console.log("Error in syncing the table:", err);
  }
};
syncAllTables();

//Add the models to the above db object
db.parent = require("../models/parent")(sequelize, DataTypes);
db.kid = require("../models/kid")(sequelize, DataTypes);
db.task = require("../models/task")(sequelize, DataTypes);
db.kidTask = require("../models/kidTask")(sequelize, DataTypes);
db.reward = require("../models/reward")(sequelize, DataTypes);
db.kidReward = require("../models/kidReward")(sequelize, DataTypes);

//Create associations between the models
db.parent.hasMany(db.kid, { foreignKey: "parentId" });
db.parent.hasMany(db.task, { foreignKey: "parentId" });
db.parent.hasMany(db.reward, { foreignKey: "parentId" });
db.kid.belongsToMany(db.task, { through: "kid_task", foreignKey: "kidId" });
db.task.belongsToMany(db.kid, { through: "kid_task", foreignKey: "taskId" });
db.kid.belongsToMany(db.reward, { through: "kid_reward", foreignKey: "kidId" });
db.reward.belongsToMany(db.kid, {
  through: "kid_reward",
  foreignKey: "rewardId",
});

module.exports = db;

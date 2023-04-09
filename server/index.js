const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("./config/db");
const parentRoutes = require("./routes/parentRoutes");
const kidRoutes = require("./routes/kidRoutes");
const taskRoutes = require("./routes/taskRoutes");
const rewardRoutes = require("./routes/rewardRoutes");

const PORT = 3005;

//Default middlewares
app.use(cors({
  origin: '*'
}));
app.use(morgan("dev"));
app.use(express.json());

//App routes
app.use("/api/parent", parentRoutes);
app.use("/api/kid", kidRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/reward", rewardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

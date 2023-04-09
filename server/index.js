const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("./config/db");
const parentRoutes = require("./routes/parentRoutes");

const PORT = 3005;

//Default middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//App routes
app.use("/api/parent", parentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

const express = require("express");
const app = express();
const router = require("./routers");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
app.use(express.static("public"));
app.use(express.json());
app.use(cors({ credentials: false, origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.listen(PORT, () => {
  console.log("SERVER RUNNING PORT ", PORT);
});

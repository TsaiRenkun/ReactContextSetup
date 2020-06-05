const express = require("express");

const app = express();

//Connect Db
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact Keeper API" })
);

//Define Routes
app.use("/api/name", require("./routes/name"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

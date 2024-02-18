const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");
const PORT = 8080;
const menuController = require("./module_menu/src/controllers/MenuController")

app.use(cors());
app.get("/list", menuController.getMenu);

const pool = new Pool({
  user: "vickypoonia",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
});

//from DB
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  pool.query(sql, (err, result) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(result.rows);
  });
});

//static
app.get("/", (req, res) => {
  res.send("Hello, this is the root path!");
});

app.get("/api/home", (req, res) => {
  res.json({ message: "Liked it!", people: ["Arpan", "Jack", "Barry"] });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

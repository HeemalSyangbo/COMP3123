const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// GET /hello → "Hello Express JS"
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname= (defaults to Pritesh Patel)
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users (expects array in body, otherwise returns default)
app.post("/users", (req, res) => {
  let users = req.body;

  const valid =
    Array.isArray(users) &&
    users.every(
      (u) => u && typeof u.firstname === "string" && typeof u.lastname === "string"
    );

  if (!valid) {
    users = [
      { firstname: "Pritesh", lastname: "Patel" },
      { firstname: "John", lastname: "Doe" },
      { firstname: "John", lastname: "Rome" }
    ];
  }

  res.json(users);
});

app.listen(PORT, () => {
  console.log(`exec04 server running on http://localhost:${PORT}`);
});

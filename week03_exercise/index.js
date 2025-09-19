// index.js
const http = require("http");
// Use Employee Module here
const employees = require("./Employee");

console.log("Lab 03 -  NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
  // Only allow GET requests
  if (req.method !== "GET") {
    res.statusCode = 405; // Method Not Allowed
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }

  // Root route - HTML welcome message
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    return res.end("<h1>Welcome to Lab Exercise 03</h1>");
  }

  // /employee - all employee details (JSON)
  if (req.url === "/employee") {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(employees));
  }

  // /employee/names - full names in ASC order (JSON array)
  if (req.url === "/employee/names") {
    const names = employees
      .map(e => `${e.firstName} ${e.lastName}`)
      .sort();
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(names));
  }

  // /employee/totalsalary - sum of all salaries (JSON object)
  if (req.url === "/employee/totalsalary") {
    const total = employees.reduce((sum, e) => sum + e.Salary, 0);
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ total_salary: total }));
  }

  // Unknown route - 404 JSON
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

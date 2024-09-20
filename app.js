const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const catalyst = require('zcatalyst-sdk-node');
const app = express();
const port = process.env.PORT || 3306;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const db = mysql.createConnection({
  host: "bcny3nf7xqmoccpgwbrw-mysql.services.clever-cloud.com",
  user: "unz73sxgz7duoaws",
  password: "8X4mPR74A2jsAR6Lfc4b",
  database: "bcny3nf7xqmoccpgwbrw",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ");
    return;
  }
  console.log("Connected to database.");
});

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.get("/managementStaff", (req, res) => {
  db.query("SELECT * FROM ManagementStaff", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/officeStaff", (req, res) => {
  db.query("SELECT * FROM OfficeStaff", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/regularStaff", (req, res) => {
  db.query("SELECT * FROM regularStaff", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/sslc", (req, res) => {
  db.query("SELECT * FROM sslc", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/hsc", (req, res) => {
  db.query("SELECT * FROM hsc", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/mainEvent", (req, res) => {
  db.query("SELECT * FROM mainEvent", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.get("/subEvent", (req, res) => {
  db.query("SELECT * FROM subEvent", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.post("/hsc", (req, res) => {
  const { year, percentage, total_marks, topper } = req.body;
  const query = "INSERT INTO hsc (year, percentage, total_marks, topper) VALUES (?, ?, ?, ?)";
  db.query(query, [year, percentage, total_marks, topper], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
});

app.put("/hsc/:id", (req, res) => {
  const { id } = req.params;
  const { year, percentage, total_marks, topper } = req.body;
  const query = "UPDATE hsc SET year = ?, percentage = ?, total_marks = ?, topper = ? WHERE id = ?";
  db.query(query, [year, percentage, total_marks, topper, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.delete("/hsc/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM hsc WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.post("/sslc", (req, res) => {
  const { year, percentage, total_marks, topper } = req.body;
  const query = "INSERT INTO sslc (year, percentage, total_marks, topper) VALUES (?, ?, ?, ?)";
  db.query(query, [year, percentage, total_marks, topper], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
});

app.put("/sslc/:id", (req, res) => {
  const { id } = req.params;
  const { year, percentage, total_marks, topper } = req.body;
  const query = "UPDATE sslc SET year = ?, percentage = ?, total_marks = ?, topper = ? WHERE id = ?";
  db.query(query, [year, percentage, total_marks, topper, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.delete("/sslc/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM sslc WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.post("/mainEvent", (req, res) => {
  const { event_name, category, year, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = req.body;
  const query = "INSERT INTO mainEvent (event_name, category, year, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(query, [event_name, category, year, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
});

app.put("/mainEvent/:id", (req, res) => {
  const { id } = req.params;
  const { event_name, category, year, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = req.body;
  const query = "UPDATE mainEvent SET event_name = ?, category = ?, year = ?, description = ?, img1 = ?, img2 = ?, img3 = ?, img4 = ?, img5 = ?, img6 = ?, img7 = ?, img8 = ?, img9 = ?, img10 = ? WHERE id = ?";
  db.query(query, [event_name, category, year, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.delete("/mainEvent/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM mainEvent WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.post("/managementStaff", (req, res) => {
  const { name, department, image } = req.body;
  const query = "INSERT INTO ManagementStaff (name, department, image) VALUES (?, ?, ?)";
  db.query(query, [name, department, image], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
});

app.put("/managementStaff/:id", (req, res) => {
  const { id } = req.params;
  const { name, department, image } = req.body;
  const query = "UPDATE ManagementStaff SET name = ?, department = ?, image = ? WHERE id = ?";
  db.query(query, [name, department, image, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.delete("/managementStaff/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM ManagementStaff WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.post("/officeStaff", (req, res) => {
  const { name, department, image } = req.body;
  const query = "INSERT INTO OfficeStaff (name, department, image) VALUES (?, ?, ?)";
  db.query(query, [name, department, image], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
});

app.put("/officeStaff/:id", (req, res) => {
  const { id } = req.params;
  const { name, department, image } = req.body;
  const query = "UPDATE OfficeStaff SET name = ?, department = ?, image = ? WHERE id = ?";
  db.query(query, [name, department, image, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.delete("/officeStaff/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM OfficeStaff WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.post("/regularStaff", (req, res) => {
  const { name, department, image } = req.body;
  const query = "INSERT INTO regularStaff (name, department, image) VALUES (?, ?, ?)";
  db.query(query, [name, department, image], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
});

app.put("/regularStaff/:id", (req, res) => {
  const { id } = req.params;
  const { name, department, image } = req.body;
  const query = "UPDATE regularStaff SET name = ?, department = ?, image = ? WHERE id = ?";
  db.query(query, [name, department, image, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.delete("/regularStaff/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM regularStaff WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

// CRUD for Sub Event
app.post("/subEvent", (req, res) => {
  const { event_name, category, year, month, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = req.body;
  const query = "INSERT INTO subEvent (event_name, category, year, month, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(query, [event_name, category, year, month, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
});

app.put("/subEvent/:id", (req, res) => {
  const { id } = req.params;
  const { event_name, category, year, month, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = req.body;
  const query = "UPDATE subEvent SET event_name = ?, category = ?, year = ?, month = ?, description = ?, img1 = ?, img2 = ?, img3 = ?, img4 = ?, img5 = ?, img6 = ?, img7 = ?, img8 = ?, img9 = ?, img10 = ? WHERE id = ?";
  db.query(query, [event_name, category, year, month, description, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});

app.delete("/subEvent/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM subEvent WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204);
  });
});


const listenPort = process.env.X_ZOHO_CATALYST_LISTEN_PORT || port;

app.listen(listenPort, () => {
  console.log(`Server running on port ${listenPort}`);
});

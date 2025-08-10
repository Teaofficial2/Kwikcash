const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Health check
app.get("/", (req, res) => res.send("kwikcashñ backend running"));

// Webhook: BitLabs example
app.post("/webhook/bitlabs", async (req, res) => {
  const { user_id, reward, tx_id } = req.body;
  // Validate, check for duplicate tx, credit user, log transaction
  // Example only
  try {
    await pool.query(
      "INSERT INTO transactions (user_id, provider, amount, tx_id) VALUES ($1, $2, $3, $4)",
      [user_id, "bitlabs", reward, tx_id]
    );
    await pool.query(
      "UPDATE users SET balance = balance + $1 WHERE id = $2",
      [reward, user_id]
    );
    res.status(200).send("OK");
  } catch (e) {
    res.status(400).send("Error");
  }
});

// Withdraw request
app.post("/api/withdraw", async (req, res) => {
  const { user_id, method, destination, amount } = req.body;
  try {
    await pool.query(
      "INSERT INTO withdrawals (user_id, method, destination, amount, status) VALUES ($1, $2, $3, $4, 'pending')",
      [user_id, method, destination, amount]
    );
    res.status(200).json({ message: "Withdrawal requested." });
  } catch (e) {
    res.status(400).json({ error: "Error processing withdrawal." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
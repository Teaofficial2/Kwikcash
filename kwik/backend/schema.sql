CREATE TABLE users (
  id VARCHAR(64) PRIMARY KEY,
  email VARCHAR(255),
  balance DECIMAL(10,2) DEFAULT 0
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id),
  provider VARCHAR(32),
  amount DECIMAL(10,2),
  tx_id VARCHAR(128) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE withdrawals (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id),
  method VARCHAR(24),
  destination VARCHAR(255),
  amount DECIMAL(10,2),
  status VARCHAR(16) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
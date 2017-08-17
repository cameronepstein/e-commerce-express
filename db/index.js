'use strict'

const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({
  user: config.keys.username,
  database: config.keys.database,
  password: config.keys.password,
  host: config.keys.host,
  post: config.keys.port,
  max: 10,
  idleTimeoutMillis: 3000,
});

module.exports = {
  query: (text, params) => pool.query(text, params)
}

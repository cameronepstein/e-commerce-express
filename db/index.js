'use strict'

const { Pool } = require('pg');
const { config } = require('../config.js');

const pool = new Pool({
  user: '',
  host:
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}

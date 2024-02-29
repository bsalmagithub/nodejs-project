// models/User.js
const db = require('../database');

class User {
  static create(username) {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO User (username) VALUES (?)', [username], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    });
  }

  static findById(id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM User WHERE id = ?', [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  // Add more methods as needed for CRUD operations or additional functionalities
}

module.exports = User;

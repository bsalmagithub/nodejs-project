// models/Comment.js
const db = require('../database');

class Comment {
  static create(content, userId, blogId) {
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO Comment (content, userId, blogId) VALUES (?, ?, ?)', [content, userId, blogId], function(err) {
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
      db.get('SELECT * FROM Comment WHERE id = ?', [id], (err, row) => {
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

module.exports = Comment;

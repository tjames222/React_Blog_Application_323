const mysql = require('mysql');
const { connection } = require('../conn');
const { v4: uuid } = require('uuid');

const all = ({ limit, sort } = {}) => {
  // TODO: Use filtering
  return connection.query('SELECT * FROM GCU.Posts', (error, results) => {
    if (error) throw error;
    console.debug('all posts -- ', results);
    return results;
  });
};
const get = ({ id } = {}) => {
  return connection.query(
    mysql.format('SELECT * FROM GCU.Posts WHERE ID = ?', [id]),
    (error, results) => {
      if (error) throw error;
      console.debug('get post -- ', results);
      return results;
    }
  );
};
const create = ({ title, content, author } = {}) => {
  const query = mysql.format(
    'INSERT INTO GCU.Posts (ID, Title, Content, Author, Created, Updated) VALUES (?, ?, ?, ?, ?, ?)',
    [uuid(), title, content, author, mysql.raw('NOW()'), mysql.raw('NOW()')]
  );
  return connection.query(query, (error, results) => {
    if (error) throw error;
    console.debug('create post -- ', results);
    return results.affectedRows;
  });
};

const update = ({ id, title, content }) => {
  const query = mysql.format(
    'UPDATE GCU.Posts SET Title = ?, Content = ?, Updated = ? WHERE ID = ?',
    [title, content, mysql.raw('NOW()'), id]
  );
  return connection.query(query, (error, results) => {
    if (error) throw error;
    console.debug('update post -- ', results);
    return results.affectedRows;
  });
};

const deleteItem = ({ id = '' } = {}) => {
  const query = mysql.format('UPDATE GCU.Posts SET Deleted = ? WHERE ID = ?', [
    mysql.raw('NOW()'),
    id,
  ]);
  return connection.query(query, (error, results) => {
    if (error) throw error;
    console.debug('delete post -- ', results);
    return results.affectedRows;
  });
};

module.exports = {
  all,
  get,
  create,
  update,
  deleteItem,
};

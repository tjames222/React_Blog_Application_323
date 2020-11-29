const mysql = require('mysql');
const { connection } = require('../conn');

// Helpers
const { stripProtectedFields } = require('../../helpers/stripProtectedFields');

const all = ({ limit, sort } = {}) => {
  // TODO: Use filtering
  return new Promise((res, rej) =>
    connection.query('SELECT * FROM GCU.Users', (error, results) => {
      if (error) rej(error);
      console.debug('all users -- ', results);

      return res(results);
    })
  );
};
const get = ({ email } = {}) => {
  return new Promise((res, rej) =>
    connection.query(
      mysql.format('SELECT FirstName, LastName, Email FROM GCU.Users WHERE Email = ?', [email]),
      (error, results) => {
        if (error) rej(error);
        console.debug('get user -- ', results);
        res(results);
      }
    )
  );
};
const checkCreds = ({ email } = {}) => {
  return new Promise((res, rej) =>
    connection.query(
      mysql.format('SELECT Password FROM GCU.Users WHERE Email = ?', [email]),
      (error, results) => {
        if (error) rej(error);
        console.debug('get user password -- ', results);
        res(results);
      }
    )
  );
};

const create = ({ firstName, lastName, email, password } = {}) => {
  const query = mysql.format(
    'INSERT INTO GCU.Users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  );
  return new Promise((res, rej) =>
    connection.query(query, (error, results) => {
      if (error) rej(error);
      console.debug('create user -- ', results);
      return res(results);
    })
  );
};

const update = ({ email, oldPassword, newPassword }) => {
  // Check that old password matches current password in query
  const query = mysql.format('UPDATE GCU.Users SET Password = ? WHERE Email = ? AND Password = ?', [
    newPassword,
    email,
    oldPassword,
  ]);
  return new Promise((res, rej) =>
    connection.query(query, (error, results) => {
      if (error) rej(error);
      console.debug('update user password -- ', results);
      return res(results);
    })
  );
};

module.exports = {
  all,
  get,
  create,
  update,
  checkCreds,
};

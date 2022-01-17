const connection = require('./connection');

const getAll = (user) => connection().then((db) => db.collection('depoiments').find({ user }).toArray());

const newDepoiment = ({ user, name, message }) => connection().then((db) => db.collection('depoiments').insertOne({ user, name, message }));

module.exports = {
  getAll,
  newDepoiment,
}
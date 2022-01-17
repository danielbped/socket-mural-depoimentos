const DepoimentsModel = require('../models/depoiments');

module.exports = async (req) => {
  const { user, name, message } = req;
  const depoiment = { user, name, message };
  await DepoimentsModel.newDepoiment(depoiment);
};
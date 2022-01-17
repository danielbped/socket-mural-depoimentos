const DepoimentsModel = require('../models/depoiments');

module.exports = async (req, res, _next) => {
  const { user } = req.params;
  const depoiments = await DepoimentsModel.getAll(user);

  res.status(200).json(depoiments);
};
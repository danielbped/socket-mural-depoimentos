const newDepoiment = require('../controllers/newDepoiment');

const depoiments = (io) => io.on('connection', (socket) => {
  socket.on('sendDepoiment', async ({ user, name, message }) => {
    const depoiment = { user, name, message };
    await newDepoiment(depoiment)
  });
});

module.exports = depoiments;
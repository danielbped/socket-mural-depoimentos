const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const getDepoiments = require('./controllers/getDepoiments');

const newDepoiment = require('./controllers/newDepoiment');

const depoiments = require('./sockets/depoiments');

const PORT = 3001;

const httpServer = http.createServer(app);

const io = socketIo(httpServer, {
    cors: {
        origin: 'http://localhost:3000',
        method: ['GET', 'POST']
    }
});

depoiments(io);

app.use(cors());

app.get('/depoimentos/:user', getDepoiments);

app.post('/depoimentos/:user', newDepoiment);

httpServer.listen(PORT, () => console.log(`App listen on port ${PORT}`));
// import Board from './board';
import Board from './board.js';
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET","POST"]
    }
});

httpServer.listen(5000);

io.on('connection', client => {
    console.log("NEW CLIENT CONNECTED: "+client.id) 
    });

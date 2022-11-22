
const io = require('socket.io')({
    cors: {
        origin: "*",
        methods: ["GET","POST"]
    }
});

io.listen(3000);

io.on('connection', client => {
     console.log("NEW CLIENT CONNECTED: "+client.id) 
    });

/**
 * Created by User on 02/07/2016.
 */
const PORT = 8080,
    INDEX = '/index.html',
    express = require('express'),
    socketIO = require('socket.io'),
    server = express()
        .use(function(req, res) {
            res.sendFile(__dirname + INDEX);
        })
        .listen(PORT, function() {console.log('listening on port: ' + PORT)}),
    io = socketIO(server);

io.on('connection', function(socket) {
   console.log('Client connected');
    socket.on('disconnect', function() {
        console.log('client disconnected');
    });
});

setInterval(function() {
    io.emit('time', new Date().toTimeString());
}, 1000);
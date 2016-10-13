var amqp = require('amqplib/callback_api');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.NODE_PORT, function(){
    console.log('listening on *:', process.env.NODE_PORT);
});

io.on('connection', function(socket){
    console.log('socketio client connected');
});

amqp.connect('amqp://rabbit', function (err, conn) {
    if (err){
        console.log('err',err);
    }
    conn.createChannel(function (err, ch) {
        var queueName = 'hello';
       // let socket=io();
        ch.assertQueue(queueName, {durable: false});
        console.log(" [*] Waiting for MQ messages in %s. To exit press CTRL+C", queueName);
        ch.consume(queueName, function (msg) {
            console.log(" [x] Received %s, sending via socketIO", msg.content.toString());

            //send via socketIO
            io.emit('message',msg.content.toString());

        }, {noAck: true});
    });
});

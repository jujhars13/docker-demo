var amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbit', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var queueName = 'hello';

        ch.assertQueue(queueName, {durable: false});
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queueName);
        ch.consume(queueName, function (msg) {

            //console.log
            console.log(" [x] Received: %s", msg.content.toString());


        }, {noAck: true});
    });
});

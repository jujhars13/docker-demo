var amqp = require('amqplib/callback_api');

amqp.connect('amqp://rabbit', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'hello';

        ch.assertQueue(q, {durable: false});
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, function (msg) {

            //save msg to mysql
            console.log(" [x] Received %s", msg.content.toString());


        }, {noAck: true});
    });
});


function saveToMysql(msg=null) {
    return new Promise(function (fulfill, reject) {

    });

}
using System;
using RabbitMQ.Client;
using System.Text;

class Send
{
    public static void Main(string[] args)
    {
        var factory = new ConnectionFactory() { HostName = "rabbit" };

        using(var connection = factory.CreateConnection())
        using(var channel = connection.CreateModel())
        {
            channel.QueueDeclare(queue: "hello", durable: false, exclusive: false, autoDelete: false, arguments: null);

            //build string from stdin args, default to hello world if not passed in
            string message = "Hello World!";
            if (args.Length != 0){
                message = String.Join(" ",args);
            }

            //encode message as UTF8 bytes
            var body = Encoding.UTF8.GetBytes(message);

            //send to rabbitmq
            channel.BasicPublish(exchange: "", routingKey: "hello", basicProperties: null, body: body);
            Console.WriteLine(" [x] Sent {0}", message);
        }

        Environment.Exit(1);
    }
}
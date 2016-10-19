# JL Tech Conf 2016, Docker Demo 

This code is used to demonstrate Docker on your machine.
We will host a RabbitMQ server, C# container to push messages and two NodeJS to consume the messages:

1. Send a msg to a RabbitMQ queue
2. Read the msg via Node on CLI or Web

## Containers
To get the demo working, run the containers in the following order


### 1. RabbitMQ
```bash
    docker run --hostname rabbit --name rabbit rabbitmq:3
    
    #or if you want to have the web managment dashboard too
    docker run --hostname rabbit --name rabbit -p 9080:15672 rabbitmq:3-management
```

### 2. [C#] Send message to RabbitMQ `/send-csharp`
```bash
    docker build -t csharp ./ && docker run --link rabbit csharp "our message"
```

### 3. [Node.js] optional Receive message from RabbitMQ on CLI `/receive-node-cli`
```bash
    docker build -t node ./ && docker run --link rabbit node
```

### 4. [Node.js] Receive message from RabbitMQ in WEB `/receive-node-web`
Receive the message and send it via SocketIO to the web front end
```bash
    docker build -t nodeweb ./ && docker run --link rabbit -t -p 8080:8080 nodeweb
```


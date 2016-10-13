# JL Tech Conf 2016, Docker Demo Jujhar Singh


Host a Rabbit MQ server, C# server and NodeJS clients

## Containers
To get the demo working, run the containers in the following order


### 1. RabbitMQ
```bash
    docker run --hostname rabbit --name rabbit -p 9080:15672 rabbitmq:3-management
```

### 2. [C#] Send message to RabbitMQ `/send-csharp`
```
    docker build -t mono ./ && docker run --link rabbit mono "our message"
```

### 3. Receive message in Node from RabbitMQ on CLI
```
    docker build -t node ./ && docker run --link rabbit node
```

### 4. Receive message in Node from RabbitMQ in WEB
```
    docker build -t nodeweb ./ && docker run --link rabbit -t -p 8080:8080 nodeweb
```


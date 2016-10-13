# JL Tech Conf 2016, Docker Demo Jujhar Singh


Host a Rabbit MQ server, C# server and NodeJS client
## Containers
To get the demo working, run the containers in the following order


### 1. RabbitMQ
```bash
    docker run --hostname rabbit --name rabbit -p 9080:15672 rabbitmq:3-management
```


### 3. [C#] Send message to RabbitMQ `/3send-csharp`
```
    docker build -t mono ./ && docker run --link rabbit mono
```

### 4. Receive message in Node from RabbitMQ and write to Mysql
```
    docker build -t node ./ && docker run --link rabbit node
```



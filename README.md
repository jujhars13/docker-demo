# JL Tech Conf 2016, Docker Demo Jujhar Singh


## Containers
To get the demo working, run the containers in the following order


### 1. RabbitMQ
```bash
    docker run --hostname rabbit --name myrabbit -p 9080:15672 rabbitmq:3-management
```

### 2. MySQL
```

```

### 3. [Java[Send message to RabbitMQ `/3second-python`
```
    docker build -t mono ./ && docker run --link myrabbit mono
```

### 4. Receive message in Node from RabbitMQ and write to Mysql

### 5. Read from Mysql and render message on page



also need Mysql and Rabbit MQ containers


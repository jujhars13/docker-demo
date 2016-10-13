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

### 3. Send message from Python to RabbitMQ `/3second-python`
```
    docker build -t python ./ && docker run python
```

### 4. Receive message in Node from RabbitMQ and write to Mysql

### 5. Read from Mysql and render message on page



also need Mysql and Rabbit MQ containers


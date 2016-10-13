FROM mono:4.6.1.3

ADD app app/

WORKDIR /app

RUN mcs /r:/app/RabbitMQ.Client.dll /app/Send.cs

ENTRYPOINT ["mono", "Send.exe"]

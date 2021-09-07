# todo-typescript-ddd

Todo app with DDD.
I referred to [this book](https://www.amazon.co.jp/dp/479815072X).

# Local Development

Run app.

```bash
$ docker-compose up
```

Create todo.

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"name":"test", "memo":"memo", "isDone":true}' localhost:3333/todo
```

Get todos.

```bash
curl -s -X GET http://localhost:3333/todo/
```

Routing is [here](https://github.com/youchann/todo-typescript-ddd/blob/main/app/src/Application/web/router/index.ts).	

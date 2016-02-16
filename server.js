var faker = require("faker");
var jsonServer = require('json-server');

var seedTodos = ['0', 'Buy milk', 'Feed cat', 'Walk dog', 'Get job I don\'t suck at', 'Read War and Peace', 'Buy new car'];

function generateTask(id) {
  return {
    id: id,
    description: seedTodos[id],
    done: false,
    due_at: faker.date.future()
  }
}

function generateFakeData() {
  var todos = [];
  var tasks = [];
  for(var i=1; i < seedTodos.length; i++) {
    tasks.push(generateTask(i));
  }
  return {tasks: tasks};
}

var tasks = generateFakeData();
var server = jsonServer.create();
server.use(jsonServer.defaults());
var router = jsonServer.router(tasks);
server.use(router);
server.listen(3000);

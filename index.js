const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize('postgres://postgres:example@db:5432/task-list')
const tasks = Task(sequelize, DataTypes)



// We need to parse JSON coming from requests
app.use(express.json())

// List tasks
app.get('/tasks', async (req, res) => {
  const db = await tasks.findAll();
  res.json(db);
  
})

// Create task
app.post('/tasks', async (req, res) => {
  const body = req.body;

  await tasks.create({
    description: body.description,
    done: body.done,
  });

  res.json({ result: "Nova tarefa ", taskId: taskId });
});

// Show task
app.get('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const taskId = await tasks.findByPk(id);
  res.json(taskId);

})

// Update task
app.put('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const taskId = await tasks.findByPk(id);

  taskId.update({
    description: body.description,
    done: body.done,
  });

  res.send({ action: 'Updating task', taskId: taskId })
})

// Delete task
app.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id
  await tasks.destroy({ where: { taskId: taskId } });
  res.send({ action: 'Deleting task', taskId: taskId })
})

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})

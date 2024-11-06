import express from 'express';

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });  
});

app.post('/add', (req, res) => {
    const { task, time } = req.body;  // Destructure the task and time from the body
    const taskTime = new Date(time).toLocaleString(); // Format the time to a readable string
    tasks.push({ description: task, time: taskTime });  // Add both task and time as an object
    res.redirect('/');  
});

app.post('/remove', (req, res) => {
    const taskToRemove = req.body.task;  
    tasks = tasks.filter(task => task.description !== taskToRemove);  // Filter based on task description
    res.redirect('/');  
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

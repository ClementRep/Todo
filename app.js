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
    const { task } = req.body;  
    tasks.push(task);
    res.redirect('/');
});
// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));

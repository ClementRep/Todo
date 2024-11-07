import express from 'express';
import nodemailer from 'nodemailer';


const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

let tasks = [];
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tshwaraganangmaimane25@gmail.com',     
        pass: 'espx ndpe xaun dtuf'        
    }
});

// Check tasks every minute for upcoming deadlines
setInterval(() => {
    const now = new Date();
    tasks.forEach(task => {
        const taskTime = new Date(task.time);
        
        if (taskTime - now <= 600000 && taskTime - now > 0 && !task.reminded) {
            sendReminder(task.description, task.time,task.mail);
            task.reminded = true; 
        }
    });
}, 60000);  

// Function to send email reminders
function sendReminder(taskDescription, taskTime,mail) {
    const mailOptions = {
        from: 'tshwaraganangmaimane25@gmail.com',             // Replace with your email
        to: mail,          
        subject: 'Task Reminder',
        text: `Reminder: Your task "${taskDescription}" is due at ${taskTime}.`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending reminder:', error);
        } else {
            console.log('Reminder sent:', info.response);
        }
    });
}

app.get('/', (req, res) => {
    res.render('index', { tasks });  
});


app.post('/add', (req, res) => {
    const { task, time } = req.body; 
    const taskTime = new Date(time).toLocaleString(); 
    tasks.push({ description: task, time: taskTime });  
    res.redirect('/');  
});

app.post('/remove', (req, res) => {
    const taskToRemove = req.body.task;  
    tasks = tasks.filter(task => task.description !== taskToRemove); 
    res.redirect('/');  
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

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
        user: 'tshwaraganangmaimane25@gmail.com',      // Replace with your email
        pass: 'T1999+champ#'        // Replace with your email password or app-specific password
    }
});

// Check tasks every minute for upcoming deadlines
setInterval(() => {
    const now = new Date();
    tasks.forEach(task => {
        const taskTime = new Date(task.time);
        
        // Check if the task time is within the next 10 minutes
        if (taskTime - now <= 600000 && taskTime - now > 0 && !task.reminded) {
            sendReminder(task.description, task.time);
            task.reminded = true; // Mark the task as reminded
        }
    });
}, 60000);  // Check every minute

// Function to send email reminders
function sendReminder(taskDescription, taskTime) {
    const mailOptions = {
        from: 'ntlahlapikwa80@gmail.com',             // Replace with your email
        to: 'lefa030205@gmail.com',          // Replace with the user's email
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

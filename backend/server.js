const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const taskRouter = require('./routes/taskRoutes')

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Routes
app.use('/tasks',taskRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

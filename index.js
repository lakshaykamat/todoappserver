const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const connectDB = require('./db/connect.js')
const taskRoute = require('./routes/task')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 3000
//middleware
app.use(express.json())

//cross origin resoure
app.use(cors())

//routes
app.use('/api/v1/tasks',taskRoute)

/*
app.get('/api/v1/tasks')            - get all the task 
app.post('/api/v1/tasks')           - create a new task
app.get('/api/v1/tasks/:id')        - get single task
app.patch('/api/v1/tasks/:id')      - update task
app.delete('/api/v1/tasks/:id')     - delete task
*/
const start = async()=>{
    //if database connection failed don't run rest of the code of server
    try {
        const db = await connectDB(process.env.MONGO_URI)
        db ? console.log("Connected to DB :)") : console.log(":/")
        app.listen(port,console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}
start()



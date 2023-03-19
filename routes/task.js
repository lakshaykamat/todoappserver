const express = require('express')
const router =  express.Router()

//importing routes funciton from controller
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
} = require('../controller/task.js')

//adding routes
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router
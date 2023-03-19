//importing task schema
const Task = require("../models/task.js")
const getAllTasks = async (req, res) => {
    try {
        //printing all tasks
        const allTasks = await Task.find({})
        res.status(201).json(allTasks)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const createTask = async (req, res) => {
    try {
        //giving values to task schema for creating a task
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = async (req, res) => {
    try {
        //getting the id from url
        const taskID = req.params.id;
        //finding the task from database
        const theTask = await Task.findOne({ _id: taskID })
        if (!theTask) {
            return res.status(404).json({ msg: `No task with id:${taskID}` })
        }
        res.status(200).json({ theTask })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const updateTask = async (req, res) => {
    try {
        const taskID = req.params.id
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).json({ msg: `No task with id:${delID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const deleteTask = async (req, res) => {
    try {
        const delID = req.params.id
        console.log(delID)
        const task = await Task.findOneAndDelete({ _id: delID })
        console.log({ task })
        if (!task) {
            return res.status(404).json({ msg: `No task with id:${delID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
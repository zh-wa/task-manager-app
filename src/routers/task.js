const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

router.get('/tasks', async (req, res) => {
    // Task.find({}).then((tasks)=> {
    //     if(!mongoose.Types.ObjectId.isValid(id)) {
    //         return res.status(404).send();
    //     }
    //     res.send(tasks);
    // }).catch((e) => {
    //     res.status(500).send();
    // })
    try {
        const tasks = await Task.find({});
        res.send(tasks);
    } catch(e) {
        res.status(500).send();
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    // Task.findById(_id).then((task) => {
    //     if(!mongoose.Types.ObjectId.isValid(_id)) {
    //         res.status(404).send();
    //     }
    //     res.send(task);
    // }).catch((e) => {
    //     res.status(500).send();
    // })

    try {
        const task = await Task.find({ _id });
        if(!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(500).send();
    }
})

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((e) => {
    //     res.status(400).send();
    // })

    try {
        await task.save();
        res.status(201).send(task);
    } catch(e) {
        res.status(400).send(e);
    }
})

router.patch('/tasks/:id', async(req, res) => {
    const _id = req.params.id;
    const allowedUpdates = ['description', 'completed'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every(update => {
        return allowedUpdates.includes(update);
    })

    if(!isValidOperation) {
        return res.status(400).send();
    }
    try {
        // const task = await Task.findOneAndUpdate({_id}, req.body, { new: true, runValidators: true});
        const task = await Task.findById(_id);
        if(!task) {
            return res.status(404).send('Error: Invalid updates');
        } 
        updates.forEach(update => task[update] = req.body[update] );
        await task.save();
        res.send(task);
    } catch(e) {
        res.status(500).send(e);
    }
})

router.delete('/tasks/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete({_id});
        if(!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(500).send();
    }
})

module.exports = router;

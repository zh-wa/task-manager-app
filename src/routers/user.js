const express = require('express');
const router = new express.Router();
const User = require('../models/user');


router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch(e) {
        res.status(500).send();
    }
    // User.find({}).then((users) => {
    //     if(!users) {
    //         return res.status(404).send();
    //     }
    //     res.send(users);
    // }).catch((e) => {
    //     res.status(500).send();
    // })
})

router.get('/users/:id', async (req, res) => {
    // console.log(req.params);
    const _id = req.params.id;
    // User.findById(_id).then((user) => {
    //     if(!user) {
    //         return res.status(404).send();
    //     }
    //     res.send(user);
    // }).catch((e) => {
    //     res.status(500).send();
    // })
    try {
        const user = await User.findById({_id});
        if(!user) {
            return res.status(404).send();
        } 
        res.send(user);
    } catch(e) {
        res.status(500).send();
    }
})

router.post('/users', async (req, res) => {
    const user = new User(req.body);
    
    try {
        await user.save();
        res.status(201).send(user);
    } catch(e) {
        res.status(400).send(e);
    }
    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // });
})

router.patch('/users/:id', async (req, res) => {
    const _id = req.params.id;
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every( update => {
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation) {
        return res.status(400).send();
    }

    try {
        const user = await User.findByIdAndUpdate({_id}, req.body, { new: true, runValidators: true });
        if(!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/users/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findByIdAndDelete({_id});
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch(e) {
        res.status(500).send();
    }
})

module.exports = router;
require('../src/db/mongoose');
const Task = require('../src/model/task');

// Task.findByIdAndDelete('5cf9146d4a67021db4dfa064').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false});
// }).then((result) => {
//     console.log(result);
// }).catch(e => console.log(e)
// );

const findAndDelete = async(id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
}

findAndDelete('5cf8e0fd5e3c2d1a83466692').then(count => 
    console.log(count)).catch(e => 
        console.log(e));

require('../src/db/mongoose');
const User = require('../src/model/user');

// User.findByIdAndUpdate('5cf8effda810ec1af32c8d8f', {age: 2}, {new: true}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age: 1});
// }).then((result) => {
//     console.log(result);
// }).catch( e => console.log(e));

const findAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});
    return count;
}

findAndCount('5cf8effda810ec1af32c8d8f', 5).then(count => 
    console.log(count)).catch(e => 
        console.log('error', e));
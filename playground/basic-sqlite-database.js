var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
   'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

sequelize.sync().then(function() {
    console.log('Everything is synced');

    Todo.findById(3).then(function(todo) {
    if(todo) {
        console.log(todo.toJSON());
    } else {
        console.log('No items found');
    }
    });
});
//
//     Todo.create({
//         description: 'feed the cat',
//         completed: false
//     }).then(function(todo) {
//         return Todo.create({
//             description: 'clean office'
//         });
//     }).then(function{
//
//     })
//     }).catch(function(e) {
//         console.log(e);
//     });
// });


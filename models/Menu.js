const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Menu = db.define('menu', {
    title: {
        type: DataTypes.STRING
    }
})

// async function main() {

//     await Menu.sync({force: true})

//     await Menu.create({
//         title: 'Saver menu'
//     })
// }

// main()

module.exports = {Menu};
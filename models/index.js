const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./item')

/* Back in ./models/index.js Associate the Menu and Item models

Multiple items can be added to a menu.

Items can be added to many menus

Add another test to account for the association */

//-----------------------------------------------
/* Eager Loading

Add a test or two that eager loads the data.

For example, find all Menus, and include their Item model */

// Menu.belongsTo(Restaurant)
// Restaurant.hasMany(Menu)

// Item.belongsToMany(Menu, {through: 'menu_item'})
// Menu.belongsToMany(Item, {through: 'menu_item'})


module.exports = { Restaurant, Menu, Item }

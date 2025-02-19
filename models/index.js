const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./item')

/* In ./models/index.js, after the requires, but before the module.exports, associate the 2 models:

Multiple menus can be added to a Restaurant.

Add a third test to account for the association

Back in ./models/index.js Associate the Menu and Item models

Multiple items can be added to a menu.

Items can be added to many menus

Add another test to account for the association

Add a test or two that eager loads the data.

For example, find all Menus, and include their Item model */

Restaurant.hasMany(Menu)
Menu.belongsTo(Restaurant) //one to many

Item.belongsToMany(Menu, {through: 'menu_item'})
Menu.belongsToMany(Item, {through: 'menu_item'}) //many to many


module.exports = { Restaurant, Menu, Item }

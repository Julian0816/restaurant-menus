const {db} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {seedRestaurant, seedMenu } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    }); 

    test('can create a Restaurant', async () => {

        const seedTestRestaurant = await Restaurant.create(seedRestaurant[0])
        expect(seedTestRestaurant.name).toEqual(seedRestaurant[0].name)
        // TODO - write test
        // To do the test we first bring some data to taste, in this case we can use the seed data or de the test we did ourselves earlier on in the Menu file
        // Save that test into a variable.
        // const testRestaurant = await Restaurant.create({
        //     name: 'McDonalds',
        //     location: 'London',
        //     cuisine: 'American'
        // })
        // expect(testRestaurant.name).toEqual('McDonalds') //Call the expected values.
        //----------------------//
        //Now this how we would do the test with the seedData we have been provided with.
        
         //this line goes into the array of restaurants, gets the first one and calls the name/ 'AppleBees'    
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const seedTestMenu = await Menu.create(seedMenu[0])
        expect(seedTestMenu.name).toEqual(seedMenu[0].name)
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const findRestaurant = await Restaurant.findAll()
        expect(findRestaurant.length).toEqual(1)
        expect(findRestaurant[0].name).toEqual(seedRestaurant[0].name)
    });

    test('can find Menus', async () => {
        // TODO - write test
        const findMenu = await Menu.findAll()
        expect(findMenu.length).toEqual(1)
        expect(findMenu[0].name).toEqual(seedMenu[0].name)
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const findRestaurant2 = await Restaurant.findAll()
        const deleteRestaurant = await findRestaurant2[0].destroy() //Note, when we destroy something, it gets returned, that's why we save that desroyed objet in the variable we then .toEqual -> U get it dude? lol
        expect(deleteRestaurant.name).toEqual(findRestaurant2[0].name)
    });

    test('Restaurant can have many menys', async () => {
        await db.sync({force: true})

        let newRestaurant = await Restaurant.create({
            name: 'Wagamamas',
           location: 'Birmingham',
           cuisine: 'Japanese'
        })
    
        let newMenu = await Menu.create({
            title: 'Gyoza'
        })
    
        await newRestaurant.addMenu(newMenu);

        const menus = await newRestaurant.getMenus()

        expect(menus[0] instanceof Menu).tobeTruthy
        expect(menus[0] instanceof Menu).toBe(true)
        expect(menus[0].title).toEqual(newMenu.title)      
        expect(menus.length).toBe(1)
    })
})
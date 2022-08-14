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
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can find Menus', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    // test('can delete Restaurants', async () => {
    //     // TODO - write test
    //     expect('NO TEST').toEqual('EXPECTED DATA')
    // });
})
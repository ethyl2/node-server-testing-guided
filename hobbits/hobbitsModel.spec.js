
const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', function() {
    

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    });
    describe('insert() in hobbits model', function() {
        beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('hobbits').truncate();
          });
        it('adds a new hobbit to the db', async function() {
            await Hobbits.insert({name: 'rose'});
            await Hobbits.insert({name: 'sam'});
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        })
    });

    describe('delete() in hobbits model', function() {
        beforeEach(async () => {
            // this function executes and clears out the table before each test
            await db('hobbits').truncate();
          });
        it('adds a new hobbit to the db', async function() {
            await Hobbits.insert({name: 'rose'});
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(1);
        })
    });

})
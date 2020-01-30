const supertest = require('supertest');
const server = require('./server.js');

describe('server', function() {
    it('runs the test', function() {
        expect(true).toBe(true);
    })
    describe('GET /', function() {
        it('should return 200 OK', function() {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })
    it('should return a JSON object from the index route', async () => {
        const expectedBody = { api: 'up' };
  
        const response = await supertest(server).get('/');
  
        expect(response.body).toEqual(expectedBody);
    });
    it('should return a JSON object from the index route', async () => {
        const response = await supertest(server).get('/');
  
        expect(response.type).toEqual('application/json');
    });
})


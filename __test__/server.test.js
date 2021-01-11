// Require server file
const app = require('./../src/server/server'); 
const supertest = require('supertest');
const request = supertest(app);

describe('Test API routes', () => {
    test('GET Successfuly render the homepage', async (done) => {
      const response = await request.get('/').expect(200);
      done();
    });
});
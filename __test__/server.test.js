// Require server file
const app = require('./../src/server/server'); 
const supertest = require('supertest');
const request = supertest(app);
const trip = {
  formDestination: 'Barcelona',
};

describe('Test API routes', () => {
    test('GET Successfuly render the homepage', async () => {
      const response = await request.get('/').expect(200);
    });
    /*test('GET Successfuly get trips', async () => {
      const response = await request.get('/data');
      expect(response.statusCode).toBe(200);
    });
    test('POST Successfuly create a trip', async () => {
      const response = await request
        .post('/addEntry')
        .send({ trip })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200); 
      expect(response.body[0].city).toBe(trip.city);
      expect(response.body[0].id).toBeTruthy();
    });
    test('GET Successfuly get trips', async () => {
      const response = await request.get('/data').expect(200);
      expect(response.body.length).toBe(1);
    });*/
});
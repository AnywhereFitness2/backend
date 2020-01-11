const server = require('../api/server');
const request = require('supertest');

// ASYNC method
describe('GET /', () => {
  it('Should return 200 ok', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });

  it('should be json', async () => {
    const res = await request(server).get('/');
    expect(res.type).toBe('application/json');
  });

  it('Should return the right object', async () => {
    const res = await request(server).get('/');
    expect(res.body).toEqual({ API: 'API is Up!' });
  });
});

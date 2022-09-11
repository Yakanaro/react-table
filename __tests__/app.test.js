import request from 'supertest';
import expect from 'expect.js';
import { server } from '../server/index.js';

it('request', async () => {
  const res = await request(server).get('/');
  if (res.error) {
    throw res.error;
  }
  expect(res.status).to.be(200);
});

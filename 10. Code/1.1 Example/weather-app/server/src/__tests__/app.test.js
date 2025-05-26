const request = require('supertest');
const app = require('../app');

test('GET /api/status', async () => {
	const response = await request(app).get('/api/status');
	expect(response.statusCode).toBe(200);
	expect(response.body).toEqual({ status: 'ok' });
});
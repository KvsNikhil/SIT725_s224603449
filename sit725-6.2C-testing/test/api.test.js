const request = require('supertest');
const app = require('../app');
const chai = require('chai');
const expect = chai.expect;

describe('API Tests', () => {

    it('should add numbers correctly', async () => {
        const res = await request(app).get('/api/add?a=2&b=3');
        expect(res.body.result).to.equal(5);
    });

    it('should subtract numbers correctly', async () => {
        const res = await request(app).get('/api/subtract?a=5&b=3');
        expect(res.body.result).to.equal(2);
    });

    it('should return error for invalid input', async () => {
        const res = await request(app).get('/api/add?a=abc&b=3');
        expect(res.status).to.equal(400);
    });

    it('should handle divide by zero', async () => {
        const res = await request(app).get('/api/divide?a=10&b=0');
        expect(res.status).to.equal(400);
    });

});
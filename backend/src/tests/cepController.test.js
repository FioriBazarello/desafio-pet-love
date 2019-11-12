import request from 'supertest';
import app from '../index';

describe('Testing CEP Controller', () => {
  it('should get a success CEP', async () => {
    const response = await request(app).get('/cep/06045400');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty('cep');
    expect(response.body).toHaveProperty('localidade');
    expect(response.body).toHaveProperty('logradouro');
    expect(response.body).toHaveProperty('uf');
  });

  it('should get an fail on invalid CEP', async () => {
    const response = await request(app).get('/cep/12341234');

    expect(response.statusCode).toEqual(406);
    expect(response.body).toHaveProperty('error', true);
    expect(response.body).toHaveProperty('message');
  });

  it('should get an fail on invalid CEP by length', async () => {
    const response = await request(app).get('/cep/1234');

    expect(response.statusCode).toEqual(406);
    expect(response.body).toHaveProperty('error', true);
    expect(response.body).toHaveProperty('message');
  });

  it('should get an fail on not sending CEP', async () => {
    const response = await request(app).get('/cep/');

    expect(response.statusCode).toEqual(404);
  });
});
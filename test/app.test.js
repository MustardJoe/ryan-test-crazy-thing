require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Person = require('../lib/models/Person');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a person', () => {
    return request(app)
      .post('/api/v1/people')
      .send({ name: 'jorny' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'jorny',
          __v: 0
        });
      });
  });

  it('can get all the people', async() => {
    const people = await Person.create([
      { name: 'Jon1' },
      { name: 'Jon2' },
      { name: 'Jon3' },
    ]);

    return request(app)
      .get(`/api/v1/people/${person._id}`)
      .then(res => {
        const peopleJSON = JSON.parse(JSON.stringify(people));
        peopleJSON.forEach(person => {
          expect(res.body).toContainEqual(person);
        });
      });
  });

});

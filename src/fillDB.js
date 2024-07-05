require('dotenv').config();
const { faker } = require('@faker-js/faker');
const connectToDB = require('./utils/db');
const Character = require('./models/characters');
const { ROLES, RACES } = require('./constants');

const generateRandomCharacter = () => {
  return {
    name: faker.person.fullName(),
    level: faker.number.int({ min: 1, max: 100 }),
    class: faker.helpers.arrayElement(ROLES),
    race: faker.helpers.arrayElement(RACES),
  };
};

const fillDatabase = async () => {
  await connectToDB(process.env.DATABASE_URL);

  const characters = [];
  for (let i = 0; i < 2000; i++) {
    characters.push(generateRandomCharacter());
  }

  try {
    await Character.insertMany(characters);
    console.log('Inserted 2000 characters');
    process.exit(0); // Exit process with success
  } catch (error) {
    console.error('Error inserting characters:', error);
    process.exit(1); // Exit process with failure
  }
};

fillDatabase();
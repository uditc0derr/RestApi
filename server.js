import express from 'express';
import cors from 'cors';
import { faker } from '@faker-js/faker';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('🎉 Public Faker API! Example endpoints: /api/users, /api/products, /api/books, etc.');
});

const resources = [
  { name: 'users', fields: () => ({
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
  })},
  { name: 'products', fields: () => ({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.urlPicsumPhotos(),
    category: faker.commerce.department(),
  })},
  { name: 'movies', fields: () => ({
    title: faker.lorem.words({ min: 1, max: 4 }),
    genre: faker.music.genre(),
    year: faker.date.past({ years: 30 }).getFullYear(),
    description: faker.lorem.paragraph(),
    image: faker.image.urlLoremFlickr({ category: 'movie' }),
  })},
  { name: 'books', fields: () => ({
    title: faker.lorem.words({ min: 2, max: 5 }),
    author: faker.person.fullName(),
    genre: faker.word.adjective(),
    year: faker.date.past({ years: 50 }).getFullYear(),
    description: faker.lorem.sentences(),
    cover: faker.image.urlLoremFlickr({ category: 'book' }),
  })},
  { name: 'addresses', fields: () => ({
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    zipCode: faker.location.zipCode(),
  })},
  { name: 'jobs', fields: () => ({
    title: faker.person.jobTitle(),
    company: faker.company.name(),
    department: faker.commerce.department(),
    description: faker.lorem.sentence(),
  })},
  { name: 'music', fields: () => ({
    title: faker.lorem.words({ min: 1, max: 4 }),
    artist: faker.person.fullName(),
    genre: faker.music.genre(),
    year: faker.date.past({ years: 20 }).getFullYear(),
    cover: faker.image.urlLoremFlickr({ category: 'music' }),
  })},
  { name: 'quotes', fields: () => ({
    quote: faker.lorem.sentence(),
    author: faker.person.fullName(),
  })},
  { name: 'vehicles', fields: () => ({
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    fuel: faker.vehicle.fuel(),
    vin: faker.vehicle.vin(),
  })},
  { name: 'animals', fields: () => ({
    name: faker.animal.type(),
    species: faker.animal.type(),
    description: faker.lorem.sentence(),
    image: faker.image.urlLoremFlickr({ category: 'animals' }),
  })},
  { name: 'restaurants', fields: () => ({
    name: faker.company.name(),
    cuisine: faker.commerce.department(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    image: faker.image.urlLoremFlickr({ category: 'food' }),
  })},
  { name: 'tech', fields: () => ({
    name: faker.commerce.productName(),
    brand: faker.company.name(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    image: faker.image.urlLoremFlickr({ category: 'tech' }),
  })},
  { name: 'colors', fields: () => ({
    colorName: faker.color.human(),
    rgb: faker.color.rgb(),
    hex: '#' + faker.string.hexadecimal({ length: 6, casing: 'lower', prefix: '' }),
  })},
  { name: 'companies', fields: () => ({
    name: faker.company.name(),
    slogan: faker.company.catchPhrase(),
    industry: faker.commerce.department(),
    logo: faker.image.urlLoremFlickr({ category: 'business' }),
  })},
  { name: 'events', fields: () => ({
    title: faker.lorem.words({ min: 2, max: 5 }),
    date: faker.date.future().toISOString(),
    location: `${faker.location.city()}, ${faker.location.country()}`,
    description: faker.lorem.sentences(),
  })},
  { name: 'sports', fields: () => ({
    sport: faker.helpers.arrayElement(['Football','Basketball','Cricket','Tennis','Hockey']),
    player: faker.person.fullName(),
    team: faker.company.name(),
    country: faker.location.country(),
  })},
  { name: 'numbers', fields: () => {
    const num = faker.number.int({ min: 1, max: 10000 });
    return { number: num, fact: `Did you know? ${num} is interesting!` };
  }},
  { name: 'passwords', fields: () => ({
    password: faker.internet.password({ length: 12 }),
  })},
  { name: 'tools', fields: () => ({
    name: faker.commerce.productName(),
    type: faker.commerce.department(),
    brand: faker.company.name(),
    description: faker.lorem.sentence(),
  })},
  { name: 'drinks', fields: () => ({
    name: faker.word.words({ count: 2 }),
    type: faker.commerce.department(),
    alcoholic: faker.datatype.boolean(),
    description: faker.lorem.sentence(),
    image: faker.image.urlLoremFlickr({ category: 'drinks' }),
  })},
  { name: 'foods', fields: () => ({
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    image: faker.image.urlLoremFlickr({ category: 'food' }),
    calories: faker.number.int({ min: 50, max: 800 }),
  })},
];


resources.forEach(resource => {
  app.get(`/api/${resource.name}`, (req, res) => {
    const count = Number(req.query.count) || 10;
    const data = Array.from({ length: count }).map(() => ({
      id: faker.number.int({ min: 1, max: 10000 }),
      ...resource.fields(),
    }));
    res.json(data);
  });

  app.get(`/api/${resource.name}/:id`, (req, res) => {
    const { id } = req.params;
    const item = { id: parseInt(id), ...resource.fields(), fetchedAt: new Date().toISOString() };
    res.json(item);
  });

  app.put(`/api/${resource.name}/:id`, (req, res) => {
    const { id } = req.params;
    const updated = { id: parseInt(id), ...resource.fields(), updatedAt: new Date().toISOString() };
    res.json({ message: `${resource.name.slice(0,-1)} ${id} updated!`, [resource.name.slice(0,-1)]: updated });
  });

  app.delete(`/api/${resource.name}/:id`, (req, res) => {
    const { id } = req.params;
    res.json({ message: `${resource.name.slice(0,-1)} ${id} deleted!` });
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));

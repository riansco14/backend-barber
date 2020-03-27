import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Thiago Marinho',
    email: 'tgmarinhasas2o2222@gmail.com',
    password_hash: '1232131',
    provider: true
  });

  return res.json(user);
});

export default routes;
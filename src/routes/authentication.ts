import { login, register } from '../controllers/authentication.controller';
import {Router} from 'express';

export default (router: Router) => {
  router.post('/auth/register', register);
  router.post('/auth/login', login);
};

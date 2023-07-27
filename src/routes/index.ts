import express from 'express';
import userRouter from './user.route';
import configs from '../configs';

const appRoutes = express();
const { path } = configs;

appRoutes.use(path.USER_PREFIX, userRouter);

export default appRoutes;
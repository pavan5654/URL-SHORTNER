import express from 'express';
import userRouter from './routes/user.routes.js';
import { authenticationMiddleware } from './middlewares/auth.middleware.js';
import urlRouter from './routes/url.routes.js';
const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(authenticationMiddleware);

app.use('/user', userRouter);
app.use('/url', urlRouter);
app.get('/', (req, res) => {
    return res.json({ status: 'server is up and running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
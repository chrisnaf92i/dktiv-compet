import express from 'express';
import AuthRouter from './router/auth.routes';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/auth', AuthRouter);

app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));

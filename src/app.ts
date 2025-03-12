import express from 'express';
import AuthRouter from './router/auth.routes';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'dist', 'index.html'));
});

app.use('/api/auth', AuthRouter);

app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));

import express from 'express';
import AuthRouter from './router/auth.routes';
import CompanyRouter from './router/company.routes';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import MissionRouter from './router/mission.routes';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000', 'https://dktiv.fr'];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    }),
);

app.use('/api/auth', AuthRouter);
app.use('/api/company', CompanyRouter);
app.use('/api/mission', MissionRouter);

app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`));

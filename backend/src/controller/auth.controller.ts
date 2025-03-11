import { hash } from 'bcryptjs';
import { Request, Response } from 'express';

class AuthController {
    static async signin(req: Request, res: Response) {
        const { lastname, firstname, email, password } = req.body;

        const hashedPassword = await hash(password, 10);
    }
    static async login(req: Request, res: Response) {
        const { email, password } = req.body;

        if (email) {
            res.status(200).json({
                message: 'Connexion réussie',
            });
        } else {
            res.status(500).json({
                error: 'Missing credential',
            });
        }
    }
}

export default AuthController;

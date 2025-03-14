import { compare, hash } from 'bcryptjs';
import { Request, Response } from 'express';
import AuthService from '../service/auth.service';
import { Role } from '@prisma/client';

class AuthController {
    static async signin(req: Request, res: Response) {
        const { lastname, firstname, email, phone, password } = req.body;
        try {
            const hashedPassword = await hash(password, 10);
            const user = await AuthService.createAccount(
                lastname,
                firstname,
                email,
                phone,
                hashedPassword,
                Role.client,
            );

            res.status(201).json({
                message: 'Account is successfully created',
                user,
            });
        } catch (error: any) {
            res.status(500).json({ error });
        }
    }
    static async login(req: Request, res: Response) {
        const { email, phone, password } = req.body;

        if ((email || phone) && password) {
            try {
                if (email) {
                    const user = await AuthService.getUserByEmail(email);

                    if (!user) {
                        res.status(403).json({
                            error: 'Invalid credential',
                        });
                    } else {
                        const passwordIsValid = await compare(
                            password,
                            user.password,
                        );
                        if (!passwordIsValid) {
                            res.status(403).json({
                                error: 'Invalid credential',
                            });
                        } else {
                            const token = AuthService.generateJWT(email);
                            res.status(200)
                                .cookie('token', token, {
                                    httpOnly: true, // Empêche l'accès via JS (protège contre XSS)
                                    secure: true, // Ne fonctionne qu'en HTTPS
                                    sameSite: 'strict', // Protection contre CSRF
                                    maxAge: 24 * 60 * 60 * 1000, // Expire après 1 jour
                                })
                                .json({
                                    message: 'Successfully connected',
                                });
                        }
                    }
                } else if (phone) {
                    const user = await AuthService.getUserByPhone(phone);

                    if (!user) {
                        res.status(403).json({
                            error: 'Invalid credential',
                        });
                    } else {
                        const passwordIsValid = await compare(
                            password,
                            user.password,
                        );
                        if (!passwordIsValid) {
                            res.status(403).json({
                                error: 'Invalid credential',
                            });
                        } else {
                            res.status(200).json({
                                message: 'Successfully connected',
                            });
                        }
                    }
                } else {
                    res.status(500).json({
                        error: 'Missing credential',
                    });
                }
            } catch (error) {
                res.status(500).json({ message: 'An error occured', error });
            }
        } else {
            res.status(500).json({
                error: 'Missing credential',
            });
        }
    }
}

export default AuthController;

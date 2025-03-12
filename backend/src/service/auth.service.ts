import { Role, User } from '@prisma/client';
import prisma from '../utils/prisma';
import jwt from 'jsonwebtoken';

export default class AuthService {
    static async createAccount(
        lastname: string,
        firstname: string,
        email: string,
        phone: string,
        hashedPassword: string,
        role: string,
    ): Promise<User> {
        const settedRole = role as Role;
        try {
            const newUser = await prisma.user.create({
                data: {
                    lastname,
                    firstname,
                    email,
                    phone,
                    password: hashedPassword,
                    role: settedRole,
                },
            });

            return newUser;
        } catch {
            throw new Error('An error occurred');
        }
    }

    static async getUserByEmail(email: string) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email,
                },
            });
            return user;
        } catch (error) {
            throw new Error('An error occurred');
        }
    }
    static async getUserByPhone(phone: string) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    phone,
                },
            });
            return user;
        } catch (error) {
            throw new Error('An error occurred');
        }
    }

    static generateJWT(email: string) {
        return jwt.sign({ email }, process.env.JWT_SECRET as string);
    }
}

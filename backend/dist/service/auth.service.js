"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../utils/prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    static createAccount(lastname, firstname, email, phone, hashedPassword, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const settedRole = role;
            try {
                const newUser = yield prisma_1.default.user.create({
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
            }
            catch (_a) {
                throw new Error('An error occurred');
            }
        });
    }
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma_1.default.user.findUnique({
                    where: {
                        email,
                    },
                });
                return user;
            }
            catch (error) {
                throw new Error('An error occurred');
            }
        });
    }
    static getUserByPhone(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma_1.default.user.findUnique({
                    where: {
                        phone,
                    },
                });
                return user;
            }
            catch (error) {
                throw new Error('An error occurred');
            }
        });
    }
    static generateJWT(email) {
        return jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET);
    }
}
exports.default = AuthService;

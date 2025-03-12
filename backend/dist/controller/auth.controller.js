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
const bcryptjs_1 = require("bcryptjs");
const auth_service_1 = __importDefault(require("../service/auth.service"));
class AuthController {
    static signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { lastname, firstname, email, phone, password, role } = req.body;
            try {
                const hashedPassword = yield (0, bcryptjs_1.hash)(password, 10);
                try {
                    const user = yield auth_service_1.default.createAccount(lastname, firstname, email, phone, hashedPassword, role);
                    res.status(201).json({
                        message: 'Account is successfully created',
                    });
                }
                catch (error) {
                    res.json('An error occured');
                }
            }
            catch (error) {
                res.json('An error occured');
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, phone, password } = req.body;
            if ((email || phone) && password) {
                try {
                    if (email) {
                        const user = yield auth_service_1.default.getUserByEmail(email);
                        if (!user) {
                            res.status(403).json({
                                error: 'Invalid credential',
                            });
                        }
                        else {
                            const passwordIsValid = yield (0, bcryptjs_1.compare)(password, user.password);
                            if (!passwordIsValid) {
                                res.status(403).json({
                                    error: 'Invalid credential',
                                });
                            }
                            else {
                                const token = auth_service_1.default.generateJWT(email);
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
                    }
                    else if (phone) {
                        const user = yield auth_service_1.default.getUserByPhone(phone);
                        if (!user) {
                            res.status(403).json({
                                error: 'Invalid credential',
                            });
                        }
                        else {
                            const passwordIsValid = yield (0, bcryptjs_1.compare)(password, user.password);
                            if (!passwordIsValid) {
                                res.status(403).json({
                                    error: 'Invalid credential',
                                });
                            }
                            else {
                                res.status(200).json({
                                    message: 'Successfully connected',
                                });
                            }
                        }
                    }
                    else {
                        res.status(500).json({
                            error: 'Missing credential',
                        });
                    }
                }
                catch (error) {
                    res.json('An error occured');
                }
            }
            else {
                res.status(500).json({
                    error: 'Missing credential',
                });
            }
        });
    }
}
exports.default = AuthController;

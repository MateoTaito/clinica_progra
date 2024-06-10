import type { Request, Response } from "express";
import Admin from "../models/Admin.model";
import bcrypt from "bcrypt";
import Token from "../models/Token.model";
import { generate6digitToken } from "../utils/token";
import { transporter } from "../config/nodemailer";
import { checkPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";
import User from "../models/Paciente.model";


export class AuthController {
}
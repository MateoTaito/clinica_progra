import { Router } from "express";
import { AuthController } from "../controllers/AuthControllers";
import { body } from "express-validator";
import { handleInputErros } from "../middleware";
import { param } from "express-validator";
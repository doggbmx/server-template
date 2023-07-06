import express, { NextFunction, Request, Response } from "express";
import { validatorHandler } from "../../../core/middlewares/validation_handler";
import { AuthRepository } from "../domain/repositories/auth_repository";
import { emailAndPasswordValidation } from "./auth_middleware";
import { authRepository } from "../domain/repositories/auth_repository_implementation";

export default function AuthRouter(authRepository: AuthRepository) {
  const router = express.Router();
  router.post(
    "/login",
    ...emailAndPasswordValidation,
    validatorHandler,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { email, password } = req.body;
        const payload = await authRepository.singInWithEmailAndPassword(
          email,
          password
        );
        res.status(201).send(payload);
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    "/signup",
    ...emailAndPasswordValidation,
    validatorHandler,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { email, password } = req.body;
        const payload = await authRepository.singUpWithEmailAndPassword(
          email,
          password
        );
        res.status(201).send(payload);
      } catch (error) {
        next(error);
      }
    }
  );

  return router;
}

export const authRouter = AuthRouter(authRepository);

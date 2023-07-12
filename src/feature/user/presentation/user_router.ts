import express, { NextFunction, Request, Response } from "express";
import { UserRepositories } from "../domain/repositories/user_repositories";
import {
  createUserValidator,
  getUserValidator,
  updateUserValidator,
} from "./users_middleware";
import { validatorHandler } from "../../../core/middlewares/validation_handler";

export default function usersRouter(usersRepository: UserRepositories) {
  const router = express.Router();

  router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await usersRepository.getAllUsers();
      console.log(users);
      res.send(users);
    } catch (error) {
      next(error);
    }
  });

  router.get(
    "/:id",
    ...getUserValidator,
    validatorHandler,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const user = await usersRepository.getUser(id);
        res.send(user);
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    "/:firebaseId",
    ...getUserValidator,
    validatorHandler,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { firebaseId } = req.params;
        const user = await usersRepository.getUserByFirebaseId(firebaseId);
        res.send(user);
      } catch (error) {}
    }
  );

  router.post(
    "/",
    ...createUserValidator,
    validatorHandler,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const newUser = await usersRepository.createUser(req.body);
        res.status(201).send(newUser);
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    "/:id",
    ...getUserValidator,
    validatorHandler,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        await usersRepository.deleteUser(id);
        res.sendStatus(204);
      } catch (err) {
        next(err);
      }
    }
  );

  router.patch(
    "/:id",
    ...updateUserValidator,
    validatorHandler,
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const user = await usersRepository.updateUser(id, req.body);
        res.send(user);
      } catch (err) {
        next(err);
      }
    }
  );

  return router;
}

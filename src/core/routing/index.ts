import express, { Application } from "express";
import { usersRouter } from "../../feature/user/presentation";
import { authRouter } from "../../feature/auth/presentation/auth_router";
import { authHandler } from "../middlewares/auth_handler";

export const configureRouting = (app: Application) => {
  const router = express.Router();
  app.use("/api", router);
  router.use("/auth", authRouter);
  router.use(authHandler);
  router.use("/users", usersRouter);
};

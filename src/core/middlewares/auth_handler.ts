import { NextFunction, Request, Response } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { authService } from "../services/auth_service";
import { AuthenticationError } from "../error/authetication_error";

declare global {
  namespace Express {
    interface Request {
      user?: DecodedIdToken;
    }
  }
}

export const authHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    return next(new AuthenticationError());
  }
  let idToken = req.headers.authorization.split("Bearer ")[1];
  try {
    const decodedIdToken = await authService.verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
  } catch (e) {
    next(new AuthenticationError());
  }
};

import { AuthPayload } from "../models/auth_payload";

export interface AuthRepository {
  singInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthPayload>;
  singUpWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthPayload>;
}

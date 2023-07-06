import { AuthPayload } from "../../domain/models/auth_payload";

export interface AuthDataSource {
  singInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthPayload>;
  singUpWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthPayload>;
}

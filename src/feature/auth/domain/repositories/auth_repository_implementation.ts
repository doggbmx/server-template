import { CustomError } from "../../../../core/error/custom_error";
import { GenericError } from "../../../../core/error/generic_error";
import { authDataSource } from "../../data/data_sources/auth_data_source_implementation";
import { AuthDataSource } from "../../data/interfaces/auth_data_source";
import { AuthPayload } from "../models/auth_payload";
import { AuthRepository } from "./auth_repository";

class AuthRepositoryImplementation implements AuthRepository {
  constructor(private dataSource: AuthDataSource) {
    this.dataSource = dataSource;
  }
  singInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthPayload> {
    return this.callDataSource(() =>
      this.dataSource.singInWithEmailAndPassword(email, password)
    );
  }
  singUpWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthPayload> {
    return this.callDataSource(() =>
      this.dataSource.singUpWithEmailAndPassword(email, password)
    );
  }
  async callDataSource<T>(callback: () => Promise<T>): Promise<T> {
    try {
      return await callback();
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw new GenericError(`${this.constructor.name} error`);
    }
  }
}

export const authRepository = new AuthRepositoryImplementation(authDataSource);

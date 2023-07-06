import axios from "axios";
import { config } from "../../../../core/config/config";
import { AuthPayload } from "../../domain/models/auth_payload";
import { AuthDataSource } from "../interfaces/auth_data_source";
import { authPayloadFromJson } from "../utils/auth_serializer";
import { CustomError } from "../../../../core/error/custom_error";
import { GenericError } from "../../../../core/error/generic_error";

const AUTH_BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";

class AuthDataSourceImplementation implements AuthDataSource {
  async singInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthPayload> {
    return this.callDataSource(async () => {
      const response = await axios.post(
        `${AUTH_BASE_URL}signInWithPassword?key=${config.firebaseApiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      return authPayloadFromJson(response.data);
    });
  }
  async singUpWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthPayload> {
    return this.callDataSource(async () => {
      const response = await axios.post(
        `${AUTH_BASE_URL}signUp?key=${config.firebaseApiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      return authPayloadFromJson(response.data);
    });
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

export const authDataSource = new AuthDataSourceImplementation();

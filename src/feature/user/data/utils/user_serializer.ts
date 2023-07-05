import { User } from "../../domain/models/user_model";

export const userFromPG = (item: any): User => {
  return {
    userId: item.id,
    name: item.name,
    email: item.email,
    password: item.password,
    recoveryToken: item.recovery_token,
  };
};

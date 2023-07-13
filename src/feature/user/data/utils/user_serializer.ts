import { User } from "../../domain/models/user_model";

export const userFromPG = (item: any): User => {
  return {
    userId: item.id,
    name: item.name,
    email: item.email,
    firebaseId: item.firebase_id,
    recoveryToken: item.recovery_token,
  };
};

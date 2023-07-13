export interface User {
  userId: string;
  name: string;
  email: string;
  firebaseId?: string;
  recoveryToken?: string | null;
}

export interface CreateUser extends Omit<User, "userId"> {}

export interface UpdateUser extends Partial<User> {}

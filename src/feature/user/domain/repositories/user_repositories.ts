import { CreateUser, UpdateUser, User } from "../models/user_model";

export interface UserRepositories {
  getUser(id?: string): Promise<User>;
  getUserByFirebaseId(firebaseId: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getUserByEmail(email: string): Promise<User>;
  createUser(data: CreateUser): Promise<User>;
  deleteUser(userId: string): Promise<void>;
  updateUser(userId: string, data: UpdateUser): Promise<User>;
}

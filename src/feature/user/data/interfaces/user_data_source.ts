import { CreateUser, UpdateUser, User } from "../../domain/models/user_model";

export interface UserDataSource {
  getAllUsers(): Promise<User[]>;
  getUser(userId: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User>;
  deleteUser(userId: string): Promise<void>;
  createUser(data: CreateUser): Promise<User>;
  updateUser(data: User): Promise<User>;
}

import { CustomError } from "./custom_error";

export class AuthenticationError extends CustomError {
  statusCode = 403;

  constructor() {
    super();
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }

  formatError(): { message: string; field?: string }[] {
    return [{ message: "Unauthorized" }];
  }
}

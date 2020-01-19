export class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class PostError extends DatabaseError {
  data: Error;
  constructor(error: Error) {
    super(error.message);
    this.data = error;
  }
}

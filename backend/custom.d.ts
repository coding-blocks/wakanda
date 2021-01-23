export {};

declare global {
  namespace Express {
    interface User {
      id: number;
      oneauth_id: string;
      name: string;
      email: string;
      username: string;
      role: string;
    }

    interface Request {
      session?: any;
    }
  }
}

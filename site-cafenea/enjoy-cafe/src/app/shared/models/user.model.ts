export interface User {
  _id?: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface AuthToken {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

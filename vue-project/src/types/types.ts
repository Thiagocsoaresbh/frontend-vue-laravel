export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  username: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User;
}


export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}


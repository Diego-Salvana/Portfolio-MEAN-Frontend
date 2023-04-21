export interface Auth {
   email: string;
   password: string;
}

export interface AuthResponse {
   token: string;
   user: string;
}

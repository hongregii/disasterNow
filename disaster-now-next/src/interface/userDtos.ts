export interface SignupDto {
  email: string;

  password: string;

  passwordCheck: string;

  userName: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

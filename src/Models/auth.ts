export interface LoginDTO {
  username: string;
  password: string;
}

export interface LoginRes {
  data: { token: string };
}

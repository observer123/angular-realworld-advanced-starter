export interface UserLogin {
  email: string;
  password: string;
}

export interface UserProfile {
  username: string;
  password: string;
  token: string;
  email: string;
  bio: string;
  image: any;
}

export interface LoginError {
  body: string[];
}

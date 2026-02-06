export interface IUser {
  email: string;
  role: string;
}

export interface IActivity {
  action: string;
  createdAt: string;
  id: string;
  user: IUser;
  userId: string;
}

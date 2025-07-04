export type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
  terms?: string;
};

export type UserInfo = {
  name: string;
  email: string;
  password: string;
  isChecked: boolean;
  passwordverify:boolean;
   isPasswordSecure: boolean
};

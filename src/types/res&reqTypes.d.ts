export type SignupRequestBody = {
    name:string,
    username:string,
    email:string,
    password:string
}

export type SigninRequestBody = {
    email_or_username :string,
    password: string;
}
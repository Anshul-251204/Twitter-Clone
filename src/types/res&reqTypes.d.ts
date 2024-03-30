export type SignupRequestBody = {
    name:string,
    username:string,
    email:string,
    password:string
}

export type SigninRequestBody = {
    username :string,
    password: string;
}
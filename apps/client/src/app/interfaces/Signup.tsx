interface ISignup {
    title: string;
    email: string;
    submit: string;
    password: string;
    alreadyHaveAccount: string;
}

interface ISignin {
    title: string;
    email: string;
    submit: string;
    password: string;
    alreadyHaveAccount: string;
}

export interface ISignupData {
    signup: ISignup;
    signin: ISignin;
}

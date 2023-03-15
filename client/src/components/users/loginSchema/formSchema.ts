import * as YUP from "yup";

const passwordRules:any = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$";

const loginSchema = YUP.object().shape({
    email: YUP.string()
    .email("Invalid Email")
    .required("*Required"),
    password: YUP.string()
    .matches(passwordRules, {message: 'Password should contain more than 6 digits include one upparcase letter and a number'})
    .required("*Required"),
});

export default loginSchema;
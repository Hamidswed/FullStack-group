import * as YUP from "yup";

const passwordRules:any = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$";

const registrationSchema = YUP.object().shape({
    firstName: YUP.string()
    .min(2, "Name Too Short!")
    .max(50, "Name Too Long!")
    .required("*Required"),
    lastName: YUP.string()
    .min(2, "Name Too Short!")
    .max(50, "Name Too Long!")
    .required("*Required"),
    email: YUP.string()
    .email("Invalid Email")
    .required("*Required"),
    password: YUP.string()
    .matches(passwordRules, {message: 'Password should contain atleast 6 digits include one upparcase letter, one number and special char'})
    .required("*Required"),
    confirmPassword: YUP.string()
    .oneOf([YUP.ref('password'), null || '{}'], "Password must match")
    .required("*Required")
});

export default registrationSchema;
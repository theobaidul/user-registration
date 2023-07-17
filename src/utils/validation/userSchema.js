import * as Yup from 'yup';

const userSchema = Yup.object().shape({
    fullName: Yup.string().required('Please enter your name'),
    email: Yup.string().email('Invalid email address!').required('Please provide a email address!'),
    password: Yup.string().min(8, 'Password must be 8 character long!').required('Enter password'),
    confirmPassword: Yup.string()
        .required('Enter confirm password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
    phoneNumber: Yup.number(),
});

export default userSchema;

import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetEditableFormValue } from '../redux/features/editForm/editableFormSlice';
import { addUser, updateUser } from '../redux/features/user/userSlice';
import getRandomId from '../utils/helper/getRandomId';
import userSchema from '../utils/validation/userSchema';

const initData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
};

export default function Signup() {
    const dispatch = useDispatch();
    const { editable, formInfo } = useSelector((state) => state?.editableForm || {});

    const formik = useFormik({
        initialValues: initData,
        validationSchema: userSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log(values);
            if (editable) {
                dispatch(updateUser(values));
                dispatch(resetEditableFormValue());
            } else {
                dispatch(addUser({ id: getRandomId(), ...values }));
            }
            resetForm(initData);
            setSubmitting(false);
        },
    });

    useEffect(() => {
        if (editable) {
            formik.setValues(formInfo);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editable, formInfo]);

    return (
        <div>
            <h1>User Registration Form</h1>
            <form onSubmit={formik?.handleSubmit} className="form">
                <input
                    type="text"
                    name="fullName"
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    value={formik?.values?.fullName}
                />
                {formik?.errors?.fullName && formik?.touched?.fullName ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>{formik?.errors?.fullName}</div>
                ) : null}
                <input
                    type="email"
                    name="email"
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    value={formik?.values?.email}
                />
                {formik?.errors?.email && formik?.touched?.email ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>{formik?.errors?.email}</div>
                ) : null}
                <input
                    type="password"
                    name="password"
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    value={formik?.values?.password}
                />
                {formik?.errors?.password && formik?.touched?.password ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>{formik?.errors?.password}</div>
                ) : null}
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    value={formik?.values?.confirmPassword}
                />
                {formik?.errors?.confirmPassword && formik?.touched?.confirmPassword ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>
                        {formik?.errors?.confirmPassword}
                    </div>
                ) : null}
                <input
                    type="number"
                    name="phoneNumber"
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    value={formik?.values?.phoneNumber}
                />
                {formik?.errors?.phoneNumber && formik?.touched?.phoneNumber ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>
                        {formik?.errors?.phoneNumber}
                    </div>
                ) : null}
                <button type="submit" disabled={formik?.isSubmitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

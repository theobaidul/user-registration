import { useDispatch } from 'react-redux';
import { setEditableFormValue } from '../redux/features/editForm/editableFormSlice';
import { removeUser } from '../redux/features/user/userSlice';

export default function UserTableItem({ user }) {
    const { id, fullName, email, password, confirmPassword, phoneNumber } = user || {};
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(setEditableFormValue(user));
    };
    const handleDelete = () => {
        dispatch(removeUser({ id }));
    };

    return (
        <tr>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{confirmPassword}</td>
            <td>{phoneNumber}</td>
            <td>
                <button type="button" onClick={handleEdit} style={{ width: '100%' }}>
                    Edit
                </button>
            </td>
            <td>
                <button type="button" onClick={handleDelete} style={{ width: '100%' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

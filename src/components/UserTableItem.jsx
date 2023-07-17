import { useDispatch } from 'react-redux';
import { setEditableFormValue } from '../redux/features/editForm/editableFormSlice';
import { removeUser, toggleSelect } from '../redux/features/user/userSlice';

export default function UserTableItem({ user }) {
    const { id, fullName, email, password, confirmPassword, phoneNumber, selected } = user || {};
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(setEditableFormValue(user));
    };
    const handleDelete = () => {
        dispatch(removeUser({ id }));
    };
    const handleSelect = () => {
        dispatch(toggleSelect({ id }));
    };

    return (
        <tr>
            <td>
                <input type="checkbox" onChange={handleSelect} checked={selected} />
            </td>
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

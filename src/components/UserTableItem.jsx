import { useDispatch } from 'react-redux';
import { setEditableFormValue } from '../redux/features/editForm/editableFormSlice';
import { removeUser } from '../redux/features/user/userSlice';

const styles = {
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        border: '1px solid #ccc',
    },
    header: {
        background: '#f2f2f2',
        padding: '8px',
        border: '1px solid #ccc',
    },
    cell: {
        padding: '8px',
        border: '1px solid #ccc',
        textAlign: 'center',
    },
};

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
            <td style={styles.cell}>{fullName}</td>
            <td style={styles.cell}>{email}</td>
            <td style={styles.cell}>{password}</td>
            <td style={styles.cell}>{confirmPassword}</td>
            <td style={styles.cell}>{phoneNumber}</td>
            <td style={styles.cell}>
                <button type="button" onClick={handleEdit} style={{ width: '100%' }}>
                    Edit
                </button>
            </td>
            <td style={styles.cell}>
                <button type="button" onClick={handleDelete} style={{ width: '100%' }}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

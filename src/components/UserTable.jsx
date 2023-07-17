import { useDispatch, useSelector } from 'react-redux';
import Styles from '../assets/css/userTable.module.css';
import { setEditableFormValue } from '../redux/features/editForm/editableFormSlice';
import {
    removeUser,
    toggleSelect,
    toggleSelectAll,
    updateUser,
} from '../redux/features/user/userSlice';

export default function UserTable() {
    const users = useSelector((state) => state?.user || []);
    const dispatch = useDispatch();

    const handleAllSelect = (e) => {
        dispatch(toggleSelectAll({ allSelected: e?.target?.checked }));
    };

    const handleEdit = (user) => {
        dispatch(setEditableFormValue(user));
    };
    const handleDelete = (id) => {
        dispatch(removeUser({ id }));
    };
    const handleSelect = (id) => {
        dispatch(toggleSelect({ id }));
    };
    const handlePasswordChange = (e, user) => {
        dispatch(updateUser({ ...user, password: e?.target?.value }));
    };

    return (
        <table className={Styles.table}>
            <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            onChange={handleAllSelect}
                            checked={users?.length > 0 && users?.every((user) => user.selected)}
                        />
                    </th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                    <th>Phone Number</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user) => (
                    <tr key={user?.id}>
                        <td>
                            <input
                                type="checkbox"
                                onChange={() => handleSelect(user?.id)}
                                checked={user?.selected}
                            />
                        </td>
                        <td>{user?.fullName}</td>
                        <td>{user?.email}</td>
                        <td>
                            <input
                                type="text"
                                value={user?.password}
                                onChange={(e) => handlePasswordChange(e, user)}
                            />
                        </td>
                        <td>{user?.confirmPassword}</td>
                        <td>{user?.phoneNumber}</td>
                        <td>
                            <button
                                type="button"
                                onClick={() => handleEdit(user)}
                                style={{ width: '100%' }}
                            >
                                Edit
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                onClick={() => handleDelete(user.id)}
                                style={{ width: '100%' }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

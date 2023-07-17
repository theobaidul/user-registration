import { useSelector } from 'react-redux';
import Styles from '../assets/css/userTable.module.css';
import UserTableItem from './UserTableItem';

export default function UserTable() {
    const users = useSelector((state) => state?.user || []);

    return (
        <table className={Styles.table}>
            <thead>
                <tr>
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
                    <UserTableItem key={user?.id} user={user} />
                ))}
            </tbody>
        </table>
    );
}

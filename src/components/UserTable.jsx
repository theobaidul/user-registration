import { useSelector } from 'react-redux';
import UserTableItem from './UserTableItem';

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
};

export default function UserTable() {
    const users = useSelector((state) => state?.user || []);

    return (
        <table style={styles.table}>
            <thead>
                <tr>
                    <th style={styles.header}>Full Name</th>
                    <th style={styles.header}>Email</th>
                    <th style={styles.header}>Password</th>
                    <th style={styles.header}>Confirm Password</th>
                    <th style={styles.header}>Phone Number</th>
                    <th style={styles.header}>Actions</th>
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

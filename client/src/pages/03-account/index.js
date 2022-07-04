import T03Account from '../../components/templates/03-account';
import useAuth from '../../contexts/auth';

const P03Account = () => {
    const {user, logout} = useAuth();

    return (
        <T03Account
            user={user}
            logout={logout}
        />
    );
};

export default P03Account;
import { noop } from "lodash";

const T03Account = ({
    user,
    logout = noop,
    deleteAccount = noop,
}) => {
    return (
        <>
            <section>
                {user.name}<br />
                <button onClick={logout}>Logout</button>
            </section>
            <section>
                <button onClick={deleteAccount}>Delete Account</button>
            </section>
        </>
    );
}

export default T03Account;
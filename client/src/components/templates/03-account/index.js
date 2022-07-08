import { noop } from "lodash";

import O01ProfileActionSection from "../../organisms/01-profile-action-section";
import L03MainContent from '../../../layouts/03-main-content'

const T03Account = ({
    user,
    logout = noop,
    deleteAccount = noop,
}) => {
    const userActions = [
        {
            label: "Logout",
            onClick: () => logout(),
        },
    ];
    return (
        <L03MainContent>
            <O01ProfileActionSection
                name={user.name}
                email={user.email}
                photoURL={user.picture}
                actions={userActions}
                hasBackground={true}
            />
            <section>
                <button onClick={deleteAccount}>Delete Account</button>
            </section>
        </L03MainContent>
    );
}

export default T03Account;
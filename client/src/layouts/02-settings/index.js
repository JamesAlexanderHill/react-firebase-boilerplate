import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    height: 100vh;
`;

const L02Settings = () => {

    return (
        <Wrapper>
            <aside>
                <p>Settings</p>
                <Link to="/settings/account">Account</Link>
            </aside>
            <Outlet />
        </Wrapper>
    )
}

export default L02Settings;
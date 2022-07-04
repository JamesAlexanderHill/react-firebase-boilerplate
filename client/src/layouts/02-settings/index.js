import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;
const StyledSection = styled.section`
    flex-grow: 1;
`;

const L02Settings = () => {

    return (
        <Wrapper>
            <aside>
                <p>Settings</p>
                <Link to="/settings/account">Account</Link>
            </aside>
            <StyledSection>
                <Outlet />
            </StyledSection>
        </Wrapper>
    )
}

export default L02Settings;
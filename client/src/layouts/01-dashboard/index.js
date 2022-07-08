import styled from 'styled-components';
import { Outlet, Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;
const StyledAside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const L01Dashboard = () => {
    return (
        <Wrapper>
            <StyledAside>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/settings/account'>Settings</Link>
                </div>
            </StyledAside>
            <Outlet />
        </Wrapper>
    );
}

export default L01Dashboard;
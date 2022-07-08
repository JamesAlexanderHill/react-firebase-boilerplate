import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const StyledH1 = styled.h1`
    font-family: sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    margin: 0px;
    color: #111827;
    margin-bottom: 24px;
`;

const T01Login = ({
    googleButton
}) => {
    return (
        <Wrapper>
            <StyledH1>Login</StyledH1>
            {!!googleButton && (googleButton)}
        </Wrapper>
    );
}

export default T01Login;
import styled from 'styled-components';

import L03MainContent from '../../layouts/03-main-content';

const StyledH1 = styled.h1`
    font-family: sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    margin: 0px;
    color: #111827;
`;

const P02Home = () => {
    return (
        <L03MainContent header={<StyledH1>Home</StyledH1>}>
            <p>Content goes here</p>
        </L03MainContent>
    );
};

export default P02Home;
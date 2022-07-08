import styled from "styled-components";

const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;
const StyledContent = styled.div`
    flex-grow: 1;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: #f3f4f6;
`;

const L03MainContent = ({header, children}) => {
    
    return (
        
        <StyledMain>
            {!!header && (<header>{header}</header>)}
            <StyledContent>
                {children}
            </StyledContent>
        </StyledMain>
    );
}

export default L03MainContent;
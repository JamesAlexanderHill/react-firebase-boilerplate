import styled from "styled-components";

const StyledWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 24px;
    border-radius: 0.5rem;
    background-color: ${({hasBackground}) => hasBackground ? 'white' : 'transparent'};
    padding: ${({hasBackground}) => hasBackground ? '20px 24px' : '0'};
    gap: 24px;
    flex-wrap: wrap;
`;

const StyledImg = styled.img`
    border-radius: 50%;
    width: 64px;
    aspect-ratio: 1 / 1;
`;
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const StyledH1 = styled.h1`
    font-family: sans-serif;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    margin: 0px;
    color: #111827;
`;
const StyledP = styled.p`
    font-family: sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    margin: 0px;
    color: #6b7280;
`;
const CenterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const O01ProfileActionSection = ({
    name,
    email,
    phone,
    photoURL,
    actions,
    hasBackground = false,
}) => {
    const actionButtons = actions.map(({label, onClick}) => <button key={label} onClick={onClick}>{label}</button>);

    return (
        <StyledWrapper hasBackground={hasBackground}>
            <StyledDiv>
                <CenterContent>
                    <StyledImg src={photoURL} alt="User profile provided by Google" referrerPolicy="no-referrer"/>
                </CenterContent>
                <div>
                    <StyledH1>{name}</StyledH1>
                    <StyledP>{email} {!!phone && (`| ${phone}`)}</StyledP>
                </div>
            </StyledDiv>
            <div>{actionButtons}</div>
        </StyledWrapper>
    );
};

export default O01ProfileActionSection;
import styled from 'styled-components';

const Article = styled.article`
    margin-bottom: 3rem;
`;

const Section = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 2rem;
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

const H3 = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
`;

const DivContainer = styled.div`

`;

const Span = styled.span`
    font-size: 1.6rem;
    font-weight: 400;
`;

const DivColor = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 0.5rem;
    height: 100%;
    background-color: ${props => props.income ? 'green' : 'red'};
`;

export {Article, Section, H3, DivContainer, Span, DivColor};
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Article = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 3rem;
  margin: 3rem 0;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`;

const H3 = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
`;

const H4 = styled.h4`
  font-weight: 600;
  font-size: 2.8rem;
`;

const P = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: ${props => props.income ? 'green' : 'darkred'};
`;

const Line = styled.div`
  background-color: #ccc;
  width: 1px;
  height: 6rem;
`;

export {Section, Article, H2, H3, H4, P, Line};
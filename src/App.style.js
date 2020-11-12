import styled from 'styled-components';

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	color: #161616;
`;

const Section = styled.section`
  width: 60rem;
  background-color: #f1f1f1;
  padding: 5rem;
`;

const H1 = styled.h1`
  text-align: center;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
`;

export {Main, Section, H1};
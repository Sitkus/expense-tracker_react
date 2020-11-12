import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 0.7rem;
`;

const LabelSpan = styled.span`
  display: block;
  color: gray;
  font-size: 1.4rem;
`;

const Input = styled.input`
  border: 1px solid ${props => props.error ? 'red' : '#f9f9f9'};
  outline: none;
  padding: 1.5rem 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: #161616;
  color: white;
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

export {Form, Label, LabelSpan, Input, Button};
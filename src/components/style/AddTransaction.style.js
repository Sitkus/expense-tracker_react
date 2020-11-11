import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 0.7rem;
`;

const LabelSpan = styled.span`
    color: gray;
    font-size: 1.4rem;
`;

const Input = styled.input`
    border: none;
    border: 1px solid #ccc;
    padding: 1.5rem 2rem;
    margin-bottom: 3rem;
`;

const Button = styled.button`
    border: none;
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
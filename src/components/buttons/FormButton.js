import styled from 'styled-components';

const FormButton = styled.button`
    font-family: inherit;
    font-size: 16px;
    color: rgb(20, 20, 20);
    width: 50%;
    min-width: 160px;
    padding: 5px;
    background-color: rgb(218 165 32);
    border: 1px solid rgb(100, 100, 100);
    border-radius: 5px;
    cursor: ${({ $loading }) => ($loading ? 'default' : 'pointer')};
`;

export default FormButton;

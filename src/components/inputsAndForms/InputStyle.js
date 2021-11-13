import styled from 'styled-components';

const InputStyle = styled.input`
    box-sizing: border-box;
    font-size: 18px;
    color: ${({ $loading }) =>
        $loading ? 'rgb(175, 175, 175)' : 'rgb(0,0,0)'};
    width: 100%;
    padding: 7px 10px;
    background-color: ${({ $loading }) =>
        $loading ? 'rgb(242, 242, 242)' : 'rgb(255,255,255)'};
    border: 1px solid rgb(204, 204, 204);
    border-radius: 5px;
    outline: none;

    ::placeholder {
        color: rgb(160, 160, 160);
    }

    :focus {
        color: ${({ $loading }) => ($loading ? 'transparent' : 'rgb(0,0,0)')};
        text-shadow: ${({ $loading }) =>
            $loading ? '0px 0px 0px rgb(175, 175, 175)' : 'none'};
    }

    @media (max-width: 400px) {
        padding: 7px 7px;
    }

    @media (max-height: 620px) {
        font-size: 16px;
    }
`;

export default InputStyle;

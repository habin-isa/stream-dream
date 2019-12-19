import styled from 'styled-components';

export const Wrapper = styled.div`
    background: black;
`;

export const Menu = styled.div`
    display: flex;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
`;

export const DateBox = styled.div`
    background: white;
    width: 100%;
    padding: 10px;
    &:hover {
        background: #fcba03;
    }
`;

export const CountBox = styled.div`
    background: black;
    color: white;
    width: 100%;
    padding: 10px;
    &:hover {
        background: #fcba03;
    }
`;

import styled from 'styled-components';

export const Button = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 15px;
    border: none;
    background-color: #facaff;
    box-shadow: 0 2px 3px 1px #fa52d3;
    margin-top: 5px;
    cursor: pointer;
    color: #551a8b;
    font-size: 20px;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
        background: #fa52d3;
        color: white;
    }
`;
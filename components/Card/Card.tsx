import { PropsWithChildren } from "react";
import styled from "styled-components";

type PropsType = {
  name: string;
};

export const Card = (props: PropsWithChildren<PropsType>) => {
  const { children, name } = props;

  return (
    <CardBlock>
      <Name>{name}</Name>
      {children}
    </CardBlock>
  );
};

const CardBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 15px 15px;
    border: 2px solid #facaff;
    box-shadow: 0 2px 3px 1px #fa52d3;
    border-radius: 15px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 28px;
    text-align: center;
    color: #551a8b;
    margin-bottom: 5px;
`;

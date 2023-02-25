import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 4px;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  width: 240px;
`;

export const Option = styled.p`
  margin: 0;
`;

export const Value = styled.span`
  font-weight: 500;
`;

export const Message = styled.p`
  font-size: 24px;
  margin: 0;
  color: tomato;
`;

import { styled } from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  min-width: 300px;
`;
export const Name = styled.p`
  font-weight: 600;
  margin-right: 5px;
  margin-left: 10px;
`;
export const Number = styled.p`
  margin-right: 10px;
`;
export const Button = styled.button`
  background-color: #be574a;
  border: none;
  color: white;
  padding: 6px 12px;
  text-align: center;
  font-size: 16px;
  margin: 2px 3px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  max-height: 45px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    opacity: 1;
  }
`;

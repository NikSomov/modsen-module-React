import styled from 'styled-components';
import { Button } from './../InputForm/styles';

export const TextContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const ToggleButton = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

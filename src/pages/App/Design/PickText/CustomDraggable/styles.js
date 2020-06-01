import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 1px;
  border-color: ${props => (props.selected ? '#ff0000' : 'transparent')};
  border-style: ${props => (props.selected ? 'dotted' : 'solid')};
  border-width: ${props => (props.selected ? '4px' : '0')};
  opacity: ${props => (props.selected ? '0.9' : '1')};
`;

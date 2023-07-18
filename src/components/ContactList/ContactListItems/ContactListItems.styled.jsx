import styled from '@emotion/styled';

export const ConctactListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
`;

export const ContactName = styled.span`
  font-weight: bold;
  font-size: 14px;
`;

export const ContactNumber = styled.span`
  color: #555;
  font-size: 14px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid #6fb0ed;
  background-color: transparent;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #6fb0ed;
  }
`;
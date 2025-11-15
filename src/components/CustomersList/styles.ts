import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 20px 0;
`;

export const ListTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 30px 0;
  color: #1a1a1a;
`;

export const UsersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UserItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.div`
  width: 56px;
  height: 56px;
  background-color: #dbeafe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #0a73cd;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.p`
  font-size: 18px;
  margin: 0;
  color: #1a1a1a;
`;

export const UserRole = styled.p`
  font-size: 14px;
  margin: 0;
  color: #6b7280;
`;

import styled from "styled-components";

export const FilterContainer = styled.div`
  padding: 20px 0;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 30px 0;
  color: #1a1a1a;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 14px
  }
`;

export const RadioOption = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background-color: ${(props) => (props.selected ? "#e6f2ff" : "#ffffff")};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#e6f2ff" : "#f5f5f5")};
  }
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
  accent-color: #2563eb;
`;

export const RadioLabel = styled.span`
  color: #1a1a1a;
  cursor: pointer;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

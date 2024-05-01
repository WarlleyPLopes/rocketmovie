import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  display: flex;
  text-align: center;
  padding: 16px;
  margin-right: 24px;
  border-radius: 10px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.INPUT_COLOR};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  > input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    display: flex;
    align-items: center;
    border: none;
    background: none;

    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;
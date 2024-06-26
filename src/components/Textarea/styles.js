import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 272px;

  background-color: ${({ theme }) => theme.COLORS.INPUT_COLOR};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

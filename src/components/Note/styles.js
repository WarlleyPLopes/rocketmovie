import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 15px;

  > h1 {
    text-align: left;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  p {
    font-weight: 400;
    margin-top: 15px;
    display: flex;
    justify-content: left;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  padding: 0 80px;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Form = styled.form`
  > header {
    margin-top: 40px;

    h1 {
      margin: 40px 0;
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-top: 40px;
    }
  }

  > .separete {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-bottom: 40px;

    .black {
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > section {
    h1 {
    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }

  div {
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: ${({theme}) => theme.COLORS.BLACK};
    border-radius: 15px;
  }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  > main {
    max-width: 1366px;
    margin: 0 auto;

    
  }
`;

export const Form = styled.form`


  > header {

    button {
      display: flex;
      align-items: center;
      margin-top: 40px;
      gap: 8px;

      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    h1 {
      margin: 40px 0;
      font-size: 36px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > .grid-input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;

    .full-width{
      grid-column: 1/3;
    }
  }



  > section {
    margin-top: 0;
    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .container-note{
      display: flex;
      flex-direction: row;
      padding: 16px;
      border-radius: 8px;
      background: ${({theme}) => theme.COLORS.BLACK};
    }

  }

  > .save-button {
    display: flex;
    justify-content: center;
    
    button {
      max-width: 536px;
    }
  }


margin-bottom: 40px;
`;
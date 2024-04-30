import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  height: 116px;
  max-width: 1366px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 64px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  > h1 {
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  > div {
    min-width: 110px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    text-align: right;
    margin: 0 9px 0 64px;
  }

  div strong {
    cursor: pointer;
  }
  div button {
    text-align: end;
  }

  a img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
  }
`;
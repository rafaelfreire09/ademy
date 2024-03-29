import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 1px solid #dedede;
`;

export const Logo = styled.a`
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
`;

export const Profile = styled.img`
  width: 37px;
  height: 37px;

  color: #e3e3e3;
  background-color: #e3e3e3;
  border-radius: 25px;

  margin-right: 1rem;
  cursor: pointer;
`;

export const AuthSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Cart = styled.div`
  margin: 0 17px 0 5px;
  cursor: pointer;
`;

export const CartAmount = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  position: absolute;
  margin: -13px 0 0 10px;

  width: 20px;
  height: 20px;
  background-color: #1c1d1f;

  font-size: 13px;
  color: #ffffff;

  border-radius: 20px;
`;

export const ButtonsSection = styled.div`
  display: flex;
  gap: 0 20px;
`;

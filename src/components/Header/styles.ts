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
`;

export const AuthSection = styled.div`
  display: flex;
`;

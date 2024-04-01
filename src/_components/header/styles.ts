import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

export const Location = styled.span`
  background-color: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-700']};

  padding: 0.5rem;
  border-radius: 0.5rem;
  line-height: 0;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    fill: ${({ theme }) => theme['purple-500']};
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  width: 1.25rem;
  height: 1.25rem;

  background-color: ${({ theme }) => theme['yellow-700']};
  color: ${({ theme }) => theme['white']};
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 700;

  border-radius: 50%;
  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShoppingCartLink = styled(NavLink)`
  background-color: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-700']};

  padding: 0.5rem;
  border-radius: 0.5rem;
  line-height: 0;
  position: relative;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-700']};
    color: ${({ theme }) => theme['yellow-100']};

    ${Badge} {
      background-color: ${({ theme }) => theme['yellow-100']};
      color: ${({ theme }) => theme['yellow-700']};
    }
  }
`;

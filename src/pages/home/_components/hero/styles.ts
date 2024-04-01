import styled from 'styled-components';

export const HeaderContainer = styled.section`
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  h1 {
    max-width: 588px;
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
  }

  p {
    max-width: 500px;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  img {
    display: none;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }

  @media screen and (min-width: 1024px) {
    img {
      display: block;
      max-width: 476px;
    }
  }
`;

export const IconsWraper = styled.div`
  min-width: 2rem;
  min-height: 2rem;

  color: ${({ theme }) => theme.white};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;

export const IconsList = styled.ul`
  margin-top: 4.125rem;

  color: ${({ theme }) => theme['gray-700']};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  li:nth-child(1) ${IconsWraper} {
    background-color: ${({ theme }) => theme['yellow-700']};
  }
  li:nth-child(2) ${IconsWraper} {
    background-color: ${({ theme }) => theme['gray-700']};
  }
  li:nth-child(3) ${IconsWraper} {
    background-color: ${({ theme }) => theme['yellow-500']};
  }
  li:nth-child(4) ${IconsWraper} {
    background-color: ${({ theme }) => theme['purple-500']};
  }
`;

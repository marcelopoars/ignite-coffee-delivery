import styled from 'styled-components';

export const CafesContainer = styled.section`
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.5rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;

    margin-bottom: 3.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

export const CafesList = styled.ul`
  display: grid;
  gap: 2.5rem 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CafeItem = styled.article`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 7rem 1.25rem 1.25rem;
  border-radius: 0.5rem 2rem;
  position: relative;

  img {
    position: absolute;
    top: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme['gray-800']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-600']};
  }

  h3,
  p {
    text-align: center;
  }

  > span {
    text-align: left;
  }
`;

export const DetailList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  margin-bottom: 1rem;
`;

export const DetailItem = styled.li`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  background-color: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-700']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CafeFooter = styled.footer`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-700']};

  strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    line-height: 0;
  }
`;

export const ChangeQuantityOfItens = styled.div`
  background-color: ${({ theme }) => theme['gray-300']};
  border-radius: 0.5rem;
  padding: 0.5rem;
  height: 38px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  button {
    color: ${({ theme }) => theme['purple-500']};
    border-radius: 0.25rem;
    padding: 0.25rem;
    
    &:hover {
      color: ${({ theme }) => theme['purple-700']};
    }

    &:active {
      color: ${({ theme }) => theme['purple-500']};
      background-color: ${({ theme }) => theme['gray-200']};
    }
  }

  span {
    min-width: 20px;
    text-align: center;
  }
`;

export const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme['purple-700']};
  color: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  padding: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }

  &:active {
    background-color: ${({ theme }) => theme['purple-700']};
  }
`;

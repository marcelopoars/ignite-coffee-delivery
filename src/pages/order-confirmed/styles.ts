import styled from 'styled-components';

export const OrderConfirmedContainer = styled.section`
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.5rem;

  > h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    color: ${({ theme }) => theme['yellow-700']};
    margin-bottom: 0.25rem;
  }

  > p {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

export const Row = styled.div`
  margin-top: 2.5rem;

  display: grid;
  gap: 3rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 3rem;
  }
`;

export const OrderDetailsList = styled.ul`
  padding: 2.5rem;

  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border: 2px solid transparent;
  border-radius: 6px 36px;

  display: grid;
  gap: 2rem;
`;

export const Flex = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const BoxIconBase = styled.div`
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 50%;
  background-color: purple;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const MapPinIconBox = styled(BoxIconBase)`
  background-color: ${({ theme }) => theme['purple-500']};
`;

export const TimerIconBox = styled(BoxIconBase)`
  background-color: ${({ theme }) => theme['yellow-500']};
`;

export const CurrencyDollarIconBox = styled(BoxIconBase)`
  background-color: ${({ theme }) => theme['yellow-700']};
`;

export const BoxImage = styled.div`

  img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    /*  */
  }
`;

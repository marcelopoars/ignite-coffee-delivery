import styled from 'styled-components';

export const CompleteOrderFormContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

export const BaseStyleWraper = styled.div`
  background-color: ${({ theme }) => theme['gray-100']};
  border-radius: 0.5rem;
  padding: 1.5rem;

  display: grid;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    padding: 2.5rem;
  }
`;

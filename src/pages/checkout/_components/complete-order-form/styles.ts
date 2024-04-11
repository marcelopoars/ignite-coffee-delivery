import styled from 'styled-components';

export const CompleteOrderFormContainer = styled.div`
  display: grid;
  gap: 1rem;
`;

export const BaseStyleWraper = styled.div`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 2.5rem;
  border-radius: 6px;

  display: grid;
  gap: 2rem;
`;

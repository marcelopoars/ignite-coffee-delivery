import styled from 'styled-components';

export const CheckoutCartContainer = styled.div`
  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
`;

export const CheckoutCartCard = styled.div`
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 2.5rem;

  border-radius: 6px 44px;
`;

export const CheckoutCartSummary = styled.div`
  margin-top: 1rem;

  > :last-child span {
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const CheckoutCartSummaryRow = styled.div`
  color: ${({ theme }) => theme['gray-800']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  :first-child {
    font-size: 0.875rem;
  }

  & + & {
    margin-top: 0.75rem;
  }
`;

export const ComfirmOrderButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme['yellow-700']};
  border-radius: 0.5rem;
  padding: 0.75rem;

  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-500']};
  }

  &:disabled {
    opacity: 0.8;
    pointer-events: none;
    user-select: none;
  }
`;

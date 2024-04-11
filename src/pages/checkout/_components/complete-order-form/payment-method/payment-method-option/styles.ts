import styled, { css } from 'styled-components';

export const PaymentMethodOptionContainer = styled.div`
  label {
    cursor: pointer;
  }

  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background-color: ${theme['purple-100']};
      border-color: ${theme['purple-700']};

      &:hover {
        background-color: ${theme['purple-100']};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  height: 3rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme['gray-300']};
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 6px;
  user-select: none;

  color: ${({ theme }) => theme['gray-700']};
  font-size: 0.75rem;
  text-transform: uppercase;
  white-space: nowrap;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  transition: 0.2s;

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }

`;

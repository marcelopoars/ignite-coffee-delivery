import styled, { css } from 'styled-components';

export const PaymentMethodOptionContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;

  input {
    visibility: hidden;
    appearance: none;
    position: absolute;
  }

  input:checked + label {
    ${({ theme }) => css`
      background-color: ${theme['purple-100']};
      border-color: ${theme['purple-700']};

      &:hover {
        background-color: ${theme['purple-100']};
      }
    `}
  }
`;

export const ContentContainer = styled.label`
  width: 100%;
  flex: 1;
  height: 3rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme['gray-300']};
  border: 1px solid ${({ theme }) => theme['gray-300']};
  border-radius: 0.5rem;
  
  color: ${({ theme }) => theme['gray-700']};
  font-size: 0.75rem;
  text-transform: uppercase;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  transition: 0.2s;

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`;

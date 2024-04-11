import styled from "styled-components";

export const CheckoutCartItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;

  border-bottom: 1px solid ${({ theme }) => theme['gray-300']};
  padding-bottom: 1rem;

  & + & {
    padding-top: 1rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const CheckoutCartItemTitle = styled.h3`
  color: ${({ theme }) => theme['gray-800']};
  font-size: 1rem;
  font-weight: 400;

  margin-bottom: 0.5rem;
`;

export const CheckoutCartPrice = styled.span`
  font-weight: 700;
  white-space: nowrap;
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

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  span {
    min-width: 20px;
    text-align: center;
  }
`;

export const RemoveItemButton = styled.button`
  background-color: ${({ theme }) => theme['gray-300']};
  height: 38px;
  padding: 0.5rem;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme['gray-700']};
  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
  }
`;
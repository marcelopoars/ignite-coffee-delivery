import styled from 'styled-components';

import { BaseStyleWraper } from '../styles';

export const PaymentMethodContainer = styled(BaseStyleWraper)`
  h2 {
    font-size: 1.125rem;
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const PaymentMethodHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`;

export const PaymentMethodOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media screen and (min-width: 640px) {
    /*  */
  }
`;

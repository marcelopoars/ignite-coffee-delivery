import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

import { cafes } from '../../../../lib';

import {
  CafesContainer,
  CafeItem,
  CafesList,
  DetailItem,
  DetailList,
  CafeFooter,
  Price,
  Actions,
  CheckoutButton,
  ChangeQuantityOfItens,
} from './styled';

import expressoImage from '../../../../assets/cafes/expresso-tradicional.png';

export function Cafes() {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(value);
  }

  return (
    <CafesContainer>
      <h2>Nossos cafés</h2>

      <CafesList>
        {cafes.map(({ name, description, price, details }) => (
          <CafeItem key={name}>
            <img src={expressoImage} alt={name} />

            <DetailList>
              {details.map((detail) => (
                <DetailItem key={detail}>{detail}</DetailItem>
              ))}
            </DetailList>

            <h3>{name}</h3>
            <p>{description}</p>

            <CafeFooter>
              <Price>
                R$ <strong>{formatCurrency(price)}</strong>
              </Price>

              <Actions>
                <ChangeQuantityOfItens>
                  <button>
                    <Minus weight="bold" />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus weight="bold" />
                  </button>
                </ChangeQuantityOfItens>
                <CheckoutButton>
                  <ShoppingCartSimple weight="fill" size={22} />
                </CheckoutButton>
              </Actions>
            </CafeFooter>
          </CafeItem>
        ))}
      </CafesList>
    </CafesContainer>
  );
}

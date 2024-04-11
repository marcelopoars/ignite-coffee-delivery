import { useState } from 'react';

import { useCart } from '../../../../hooks';

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

import {
  Actions,
  CafeFooter,
  ChangeQuantityOfItens,
  CheckoutButton,
  CoffeeItem,
  DetailItem,
  DetailList,
  Price,
} from './styled';
import { formatCurrency } from '../../../../utils';

type CoffeeDetail = 'Tradicional' | 'Gelado' | 'Com leite' | 'Especial' | 'Alcoólico';

export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  details: CoffeeDetail[];
  image: string;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeItem({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);

  const { addCoffeeToCart } = useCart();

  const { id, image, name, description, price, details } = coffee;

  function handleIncrementItem() {
    setQuantity((state) => state + 1);
  }

  function handleDecrementItem() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function HandleAddCoffeeToCart() {
    addCoffeeToCart({ quantity, ...coffee });
  }

  const disabledButton = quantity === 1

  return (
    <CoffeeItem key={id}>
      <img src={image} alt={name} />

      <DetailList>
        {details.map((detail) => (
          <DetailItem key={detail}>{detail}</DetailItem>
        ))}
      </DetailList>

      <h3>{name}</h3>
      <p>{description}</p>

      <CafeFooter>
        <Price>
          R$ <span>{formatCurrency(price)}</span>
        </Price>

        <Actions>
          <ChangeQuantityOfItens>
            <button type="button" onClick={handleDecrementItem} disabled={disabledButton}>
              <Minus weight="bold" />
            </button>

            <span>{quantity}</span>

            <button type="button" onClick={handleIncrementItem}>
              <Plus weight="bold" />
            </button>
          </ChangeQuantityOfItens>
          <CheckoutButton type="button" onClick={HandleAddCoffeeToCart}>
            <ShoppingCartSimple weight="fill" size={22} />
          </CheckoutButton>
        </Actions>
      </CafeFooter>
    </CoffeeItem>
  );
}

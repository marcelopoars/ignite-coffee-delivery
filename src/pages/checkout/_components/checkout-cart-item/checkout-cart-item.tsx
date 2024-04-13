import { Minus, Plus, Trash } from 'phosphor-react';

import { CartItem } from '../../../../context';
import { formatCurrency } from '../../../../utils';

import {
  Actions,
  ChangeQuantityOfItens,
  CheckoutCartItemContainer,
  CheckoutCartItemTitle,
  CheckoutCartPrice,
  Content,
  Header,
  RemoveItemButton,
} from './styles';
import { useCart } from '../../../../hooks';

interface CheckoutCartItemProps {
  coffee: CartItem;
}
export function CheckoutCartItem({ coffee }: CheckoutCartItemProps) {
  const { changeCoffeeQuantity, removeCoffeeFromCart } = useCart();

  const { id, name, price, image, quantity } = coffee;

  function handleIncrementItem() {
    changeCoffeeQuantity(id, 'increment');
  }

  function handleDecrementItem() {
    changeCoffeeQuantity(id, 'decrement');
  }

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(id);
  }

  const totalCoffee = formatCurrency(price * quantity);
  const disabledButton = quantity === 1;

  return (
    <CheckoutCartItemContainer>
      <img src={image} alt={name} />
      <Content>
        <Header>
          <CheckoutCartItemTitle>{name}</CheckoutCartItemTitle>
          <CheckoutCartPrice>R$ {totalCoffee}</CheckoutCartPrice>
        </Header>
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
          <RemoveItemButton onClick={handleRemoveCoffeeFromCart}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveItemButton>
        </Actions>
      </Content>
    </CheckoutCartItemContainer>
  );
}

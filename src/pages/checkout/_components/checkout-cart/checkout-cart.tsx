import { DELIVERY_AMOUNT } from '../../../../constants';
import { useCart } from '../../../../hooks';
import { formatCurrency } from '../../../../utils';
import { CheckoutCartItem } from '../checkout-cart-item';

import {
  CheckoutCartCard,
  CheckoutCartContainer,
  CheckoutCartSummary,
  CheckoutCartSummaryRow,
  ComfirmOrderButton,
} from './styles';

export function CheckoutCart() {
  const { cartItems, totalCartItems, totalAmnountCart } = useCart();

  const totalAmnountCartWithDelivery = totalAmnountCart + DELIVERY_AMOUNT;

  return (
    <CheckoutCartContainer>
      <h2>Cafés selecionados</h2>

      <CheckoutCartCard>
        {!cartItems.length && <strong>Nenhum item na lista.</strong>}

        {!!cartItems.length && (
          <ul>{cartItems?.map((coffee) => <CheckoutCartItem key={coffee.id} coffee={coffee} />)}</ul>
        )}

        <CheckoutCartSummary>
          <CheckoutCartSummaryRow>
            <span>Total de itens</span>
            <span>R$ {formatCurrency(totalAmnountCart)}</span>
          </CheckoutCartSummaryRow>
          <CheckoutCartSummaryRow>
            <span>Entrega</span>
            <span>{formatCurrency(DELIVERY_AMOUNT)}</span>
          </CheckoutCartSummaryRow>
          <CheckoutCartSummaryRow>
            <span>Total</span>
            <span>{formatCurrency(totalAmnountCartWithDelivery)}</span>
          </CheckoutCartSummaryRow>
        </CheckoutCartSummary>

        <ComfirmOrderButton type="submit" disabled={!totalCartItems}>
          Confirmar pedido
        </ComfirmOrderButton>
      </CheckoutCartCard>
    </CheckoutCartContainer>
  );
}

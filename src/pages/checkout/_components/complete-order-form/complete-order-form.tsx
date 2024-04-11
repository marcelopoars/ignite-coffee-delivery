import { CheckoutForm } from './checkout-form';
import { PaymentMethod } from './payment-method';
import { CompleteOrderFormContainer } from './styles';

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <CheckoutForm />
      <PaymentMethod />
    </CompleteOrderFormContainer>
  );
}

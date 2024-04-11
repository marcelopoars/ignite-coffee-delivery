import { useFormContext } from 'react-hook-form';

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';

import { CheckoutFormData } from '../../../checkout';

import { PaymentMethodContainer, PaymentMethodHeader, PaymentMethodOptions } from './styles';
import { PaymentMethodOption } from './payment-method-option';

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
};

export function PaymentMethod() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  return (
    <PaymentMethodContainer>
      <PaymentMethodHeader>
        <CurrencyDollar size={22} />
        <div>
          <h2>Pagamento-method</h2>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </PaymentMethodHeader>

      <PaymentMethodOptions>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethodOption
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </PaymentMethodOptions>
      {errors.paymentMethod && <span>{errors.paymentMethod.message}</span>}
    </PaymentMethodContainer>
  );
}

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { CheckoutCart, CompleteOrderForm } from './_components';

import { CheckoutContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutSchema = z.object({
  cep: z.string().min(1, 'Campo obrigatório'),
  street: z.string().min(1, 'Campo obrigatório'),
  number: z.string().min(1, 'Campo obrigatório'),
  complement: z.string(),
  district: z.string().min(1, 'Campo obrigatório'),
  city: z.string().min(1, 'Campo obrigatório'),
  uf: z.string().min(1, 'Campo obrigatório'),
  paymentMethod: z.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    },
  }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;

export function Checkout() {
  const { cleanCart } = useCart();
  const navigate = useNavigate();

  const checkoutForm = useForm<CheckoutFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      cep: '',
    },
  });

  const { handleSubmit } = checkoutForm;


  const handleCofirmOrder: SubmitHandler<CheckoutFormData> = (data) => {
    navigate('/order-confirmed', {
      state: data,
    });

    cleanCart()
  };

  return (
    <main>
      <CheckoutContainer onSubmit={handleSubmit(handleCofirmOrder)}>
        <FormProvider {...checkoutForm}>
          <CompleteOrderForm />
          <CheckoutCart />
        </FormProvider>
      </CheckoutContainer>
    </main>
  );
}

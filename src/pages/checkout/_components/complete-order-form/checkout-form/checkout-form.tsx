import { useFormContext } from 'react-hook-form';
import { MapPinLine } from 'phosphor-react';

import { CheckoutFormData } from '../../../checkout';

import { ErrorMessage } from './error-message';

import { CheckoutAddress, CheckoutFormContainer, Flex, Form, FormHeader, InputContainter } from './styles';

export function CheckoutForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  return (
    <CheckoutFormContainer>
      <h1>Complete seu pedido</h1>

      <CheckoutAddress>
        <FormHeader>
          <MapPinLine size={22} />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormHeader>
        <Form>
          <InputContainter>
            <input type="text" placeholder="CEP" {...register('cep')} />
            <ErrorMessage error={errors?.cep?.message} />
          </InputContainter>

          <InputContainter>
            <input type="text" placeholder="Rua" {...register('street')} />
            <ErrorMessage error={errors?.street?.message} />
          </InputContainter>

          <Flex>
            <InputContainter>
              <input type="text" placeholder="Número" {...register('number')} />
              <ErrorMessage error={errors?.number?.message} />
            </InputContainter>

            <InputContainter>
              <input type="text" placeholder="Complemento" {...register('complement')} />
            </InputContainter>
          </Flex>

          <Flex>
            <InputContainter>
              <input type="text" placeholder="Bairro" {...register('district')} />
              <ErrorMessage error={errors?.district?.message} />
            </InputContainter>

            <InputContainter>
              <input type="text" placeholder="Cidade" {...register('city')} />
              <ErrorMessage error={errors?.city?.message} />
            </InputContainter>

            <InputContainter>
              <input type="text" placeholder="UF" {...register('uf')} />
              <ErrorMessage error={errors?.uf?.message} />
            </InputContainter>
          </Flex>
        </Form>
      </CheckoutAddress>
    </CheckoutFormContainer>
  );
}

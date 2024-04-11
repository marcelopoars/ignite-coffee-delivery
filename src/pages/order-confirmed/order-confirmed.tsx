import { useLocation, useNavigate } from 'react-router-dom';

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import { CheckoutFormData } from '../checkout';
import { paymentMethods } from '../checkout/_components/complete-order-form/payment-method';

import {
  BoxImage,
  CurrencyDollarIconBox,
  Flex,
  MapPinIconBox,
  OrderConfirmedContainer,
  OrderDetailsList,
  Row,
  TimerIconBox,
} from './styles';

import illustration from '../../assets/illustration.svg';
import { useEffect } from 'react';

interface OrderConfirmedData {
  state: CheckoutFormData;
}

export function OrderConfirmed() {
  const navigate = useNavigate();

  const { state } = useLocation() as OrderConfirmedData;

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  
  if (!state) return <></>
  
  const { street, number, district, city, uf, paymentMethod } = state;

  return (
    <main>
      <OrderConfirmedContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <Row>
          <OrderDetailsList>
            <Flex>
              <MapPinIconBox>
                <MapPin weight="fill" size={16} />
              </MapPinIconBox>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {street}, {number}
                  </strong>
                </p>
                <span>
                  {district} - {city}, {uf}
                </span>
              </div>
            </Flex>

            <Flex>
              <TimerIconBox>
                <Timer weight="fill" size={16} />
              </TimerIconBox>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </Flex>

            <Flex>
              <CurrencyDollarIconBox>
                <CurrencyDollar size={16} />
              </CurrencyDollarIconBox>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{paymentMethods[paymentMethod].label}</strong>
              </div>
            </Flex>
          </OrderDetailsList>
          <BoxImage>
            <img src={illustration} alt="Ilustração de um entregador de moto" />
          </BoxImage>
        </Row>
      </OrderConfirmedContainer>
    </main>
  );
}

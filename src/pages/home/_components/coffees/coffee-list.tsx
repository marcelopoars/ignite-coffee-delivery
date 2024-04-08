import { useCart } from '../../../../hooks';
import { cafes } from '../../../../lib';

import { CoffeItem } from './coffee-item';
import { CoffeeContainer, CoffeeList } from './styled';

export function Coffees() {
  const {cartItems} = useCart()
  console.log('coffee list', cartItems);
  
  return (
    <CoffeeContainer>
      <h2>Nossos cafés</h2>

      <CoffeeList>
        {cafes.map((coffee) => (
          <CoffeItem key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeeContainer>
  );
}

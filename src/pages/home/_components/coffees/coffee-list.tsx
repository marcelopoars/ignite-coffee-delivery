import { coffees } from '../../../../lib';

import { CoffeItem } from './coffee-item';
import { CoffeeContainer, CoffeeList } from './styled';

export function Coffees() {
  return (
    <CoffeeContainer>
      <h2>Nossos cafés</h2>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeItem key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeeContainer>
  );
}

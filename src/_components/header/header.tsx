import { NavLink } from 'react-router-dom';

import { MapPin, ShoppingCart } from 'phosphor-react';

import coffeeDeliveryLogo from '../../assets/lcoffee-delivery-ogo.svg';

import { Badge, HeaderContainer, Location, ShoppingCartLink } from './styles';
import { useCart } from '../../hooks';

export function Header() {
  const { totalCartItems } = useCart();

  const showTotalCartItems = totalCartItems >= 1;

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />
      </NavLink>

      <nav>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </Location>
        <ShoppingCartLink to="/checkout">
          {showTotalCartItems && <Badge>{totalCartItems}</Badge>}
          <ShoppingCart weight="fill" size={22} />
        </ShoppingCartLink>
      </nav>
    </HeaderContainer>
  );
}

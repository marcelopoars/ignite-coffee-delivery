import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import coffeeDeliveryLogo from '../../assets/lcoffee-delivery-ogo.svg';

import { Badge, HeaderContainer, Location, ShoppingCartLink } from './styles';

export function Header() {
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
          <Badge>3</Badge>
          <ShoppingCart weight="fill" size={22} />
        </ShoppingCartLink>
      </nav>
    </HeaderContainer>
  );
}

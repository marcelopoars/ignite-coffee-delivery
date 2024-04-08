import { ReactNode, createContext, useState } from 'react';

import { produce } from 'immer';
import { Coffee } from '../pages/home/_components/coffees/coffee-item';

interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  totalCartItems: number;
  addCoffeeToCart: (coffee: CartItem) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addCoffeeToCart(coffee: CartItem) {
    const currentCoffeeIndex = cartItems.findIndex((item) => item.id === coffee.id);

    const newCart = produce(cartItems, (draft) => {
      if (currentCoffeeIndex === -1) {
        draft.push(coffee);
      } else {
        draft[currentCoffeeIndex].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  const totalCartItems = cartItems.length;

  return <CartContext.Provider value={{ cartItems, totalCartItems, addCoffeeToCart }}>{children}</CartContext.Provider>;
}

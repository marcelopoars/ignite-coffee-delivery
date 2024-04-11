import { ReactNode, createContext, useEffect, useState } from 'react';

import { produce } from 'immer';
import { CART_ITEMS_STORAGE_KEY } from '../constants';
import { Coffee } from '../pages/home/_components/coffees/coffee-item';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  totalCartItems: number;
  totalAmnountCart: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCoffeeQuantity: (coffeeId: string, type: 'increment' | 'decrement') => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(CART_ITEMS_STORAGE_KEY);

    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }

    return [];
  });

  const totalAmnountCart = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalCartItems = cartItems.length;

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

  function removeCoffeeFromCart(coffeeId: string) {
    const currentCoffeeIndex = cartItems.findIndex((item) => item.id === coffeeId);

    if (currentCoffeeIndex !== -1) {
      const newCart = cartItems.filter(({ id }) => id !== coffeeId);
      setCartItems(newCart);
    }
  }

  function changeCoffeeQuantity(coffeeId: string, type: 'increment' | 'decrement') {
    const currentCoffeeIndex = cartItems.findIndex((item) => item.id === coffeeId);

    const newCart = produce(cartItems, (draft) => {
      if (currentCoffeeIndex !== -1) {
        const item = draft[currentCoffeeIndex];

        draft[currentCoffeeIndex].quantity = type === 'increment' ? (item.quantity += 1) : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(CART_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCartItems,
        totalAmnountCart,
        addCoffeeToCart,
        removeCoffeeFromCart,
        changeCoffeeQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

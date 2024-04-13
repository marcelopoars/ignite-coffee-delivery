import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import { ContentContainer, PaymentMethodOptionContainer } from './styles';

type PaymentMethodOptionProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodOption = forwardRef<HTMLInputElement, PaymentMethodOptionProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <PaymentMethodOptionContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <ContentContainer htmlFor={id}>
          {icon}
          {label}
        </ContentContainer>
      </PaymentMethodOptionContainer>
    );
  },
);

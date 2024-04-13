import { HeroContainer, HeroContent, IconsList, IconsWraper, TextBox } from './styles';

import heroImage from '../../../../assets/hero/hero-mage.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <TextBox>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>

          <IconsList>
            <li>
              <IconsWraper>
                <ShoppingCart weight="fill" size={16} />
              </IconsWraper>
              Compra simples e segura
            </li>
            <li>
              <IconsWraper>
                <Package weight="fill" size={16} />
              </IconsWraper>
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconsWraper>
                <Timer weight="fill" size={16} />
              </IconsWraper>
              Entrega rápida e rastreada
            </li>
            <li>
              <IconsWraper>
                <Coffee weight="fill" size={16} />
              </IconsWraper>
              O café chega fresquinho até você
            </li>
          </IconsList>
        </TextBox>

        <img src={heroImage} alt="Imagem de um copo plático de café branco com tampa preta" />
      </HeroContent>
    </HeroContainer>
  );
}

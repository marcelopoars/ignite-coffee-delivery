import tradicional from '../assets/cafes/expresso-tradicional.png';
import americano from '../assets/cafes/expresso-americano.png';
import cremoso from '../assets/cafes/expresso-cremoso.png';
import gelado from '../assets/cafes/expresso-gelado.png';
import cafeComLeite from '../assets/cafes/cafe-com-leite.png';
import latte from '../assets/cafes/latte.png';
import capuccino from '../assets/cafes/capuccino.png';
import macchiato from '../assets/cafes/macchiato.png';
import mocaccino from '../assets/cafes/mocaccino.png';
import chocolateQuente from '../assets/cafes/chocolate-quente.png';
import cubano from '../assets/cafes/cubano.png';
import havaiano from '../assets/cafes/havaiano.png';
import arabe from '../assets/cafes/arabe.png';
import irlandes from '../assets/cafes/irlandes.png';

type CafeDetail = 'Tradicional' | 'Gelado' | 'Com leite' | 'Especial' | 'Alcoólico';

interface CafesProps {
  name: string;
  description: string;
  price: number;
  details: CafeDetail[];
  image: string
}

export const cafes: CafesProps[] = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    details: ['Tradicional'],
    image: tradicional
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    details: ['Tradicional'],
    image: americano
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    details: ['Tradicional'],
    image: cremoso
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    details: ['Tradicional', 'Gelado'],
    image: gelado
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
    image: cafeComLeite
  },
  {
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
    image: latte
  },
  {
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
    image: capuccino
  },
  {
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
    image: macchiato
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
    image: mocaccino
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    details: ['Especial', 'Com leite'],
    image: chocolateQuente
  },
  {
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    details: ['Especial', 'Alcoólico', 'Gelado'],
    image: cubano
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    details: ['Especial'],
    image: havaiano
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    details: ['Especial'],
    image: arabe
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    details: ['Especial', 'Alcoólico'],
    image: irlandes
  },
];

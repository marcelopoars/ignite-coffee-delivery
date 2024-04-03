type CafeDetail = 'Tradicional' | 'Gelado' | 'Com leite' | 'Especial' | 'Alcoólico';

interface CafesProps {
  name: string;
  description: string;
  price: number;
  details: CafeDetail[];
}

export const cafes: CafesProps[] = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    details: ['Tradicional'],
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    details: ['Tradicional'],
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    details: ['Tradicional'],
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    details: ['Tradicional', 'Gelado'],
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
  },
  {
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
  },
  {
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
  },
  {
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    details: ['Tradicional', 'Com leite'],
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    details: ['Especial', 'Com leite'],
  },
  {
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    details: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    details: ['Especial'],
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    details: ['Especial'],
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    details: ['Especial', 'Alcoólico'],
  },
];
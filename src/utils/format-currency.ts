export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(value);
}

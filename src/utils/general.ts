export function formatPrice(value: number) {
  let BRReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return BRReal.format(value);
}

export const formatDecimalAsPercentage= (num)=> {
  if (typeof num !== 'number') {
    throw new Error(`Expected a number, got ${typeof num}`);
  }

  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}
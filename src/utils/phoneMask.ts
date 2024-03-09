function phoneMask(number: string) {
  number = number.replace(/\D/g, '');
  if (number.length === 11) {
    return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (number.length === 10) {
    return number.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else {
    return number;
  }
}

function phoneUnmask(number: string) {
  return number.replace(/\D/g, '');
}

export { phoneMask, phoneUnmask };

export const generateRandomData = (): string => {
  const formulas = [
    'E = mc^2',
    '\\int_{a}^{b} x^2 dx',
    'a^2 + b^2 = c^2',
    '\\frac{d}{dx}e^x = e^x',
    '\\sum_{n=1}^{\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}'
  ];
  const randomIndex = Math.floor(Math.random() * formulas.length);
  return formulas[randomIndex];
};

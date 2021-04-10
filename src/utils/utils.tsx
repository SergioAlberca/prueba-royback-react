export const getTypeByValue = (value: string): string => {
  switch (value) {
    case '1':
      return 'Hotel gest';
    case '2':
      return 'Travel agency';
    case '3':
      return 'Company';
    default:
      return '';
  }
};

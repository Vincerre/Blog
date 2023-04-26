import { format } from 'date-fns';

export const dateToString = (date) => {
  return format(date, 'dd/MM/yyyy');
};

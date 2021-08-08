export const convertPopulation = (num: number | string) => {
  if (Number(num) > 999 && Number(num) < 1000000) {
    return (Number(num) / 1000).toFixed(2) + 'K'; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (Number(num) / 1000000).toFixed(2) + 'M'; // convert to M for number from > 1 million
  } else if (num >= 1000000000) {
    return (Number(num) / 1000000000).toFixed(2) + 'B';
  } else if (Number(num) < 900) {
    return Number(num); // if value < 1000, nothing to do
  }
};

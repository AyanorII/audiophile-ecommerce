export const getPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const getShortName = (name: string) => {
  return name
    .replace(/(headphones?)|(earphones?)|(speakers?)/i, " ")
    .toUpperCase();
};

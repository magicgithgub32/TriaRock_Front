export const highestAndLowestPrices = (categoriesData, currentPath, validCurrentPath) => {
  if ((categoriesData, currentPath)) {
    const getLowestPrice = () => {
      const currentCategory = categoriesData.filter(
        (category) => category.name === validCurrentPath
      );

      const prices = currentCategory[0].items.map((product) =>
        Number(product.price.slice(0, -2).replace(',', '.'))
      );
      const ascendingPrices = prices?.sort((a, b) => a - b);
      const lowestPrice = ascendingPrices[0];
      return lowestPrice;
    };

    const getHighestPrice = () => {
      const currentCategory = categoriesData.filter(
        (category) => category.name === validCurrentPath
      );

      const prices = currentCategory[0].items.map((product) =>
        Number(product.price.slice(0, -2).replace(',', '.'))
      );
      const descendingPrices = prices.sort((a, b) => b - a);
      const highestPrice = descendingPrices[0];
      return highestPrice;
    };

    const lowestPrice = getLowestPrice();
    const highestPrice = getHighestPrice();
    const roundedLowestPrice = lowestPrice && Math.floor(lowestPrice);
    const roundedHighestPrice = highestPrice && Math.ceil(highestPrice);
    return { roundedLowestPrice, roundedHighestPrice };
  }
};

export const genders = ['hombre', 'mujer', 'infantil'];

export const filterProducts = (
  categoryItems,
  selectedTypes,
  selectedGender,
  selectedPrice,
  roundedHighestPrice
) => {
  let filteredProducts = categoryItems;

  if (selectedTypes !== []) {
    filteredProducts = filteredProducts?.filter((product) =>
      selectedTypes.includes(product.name.split(' ')[0])
    );
  }

  if (selectedGender !== '') {
    // const excludedGenders = genders.filter((gender) => gender !== selectedGender);
    // filteredProducts = filteredProducts?.filter((product) => {
    //   return excludedGenders.some(
    //     (word) => !product.name.toLowerCase().includes(word.toLowerCase())
    //   );
    // });
    filteredProducts = filteredProducts?.filter((product) =>
      product.name.toLowerCase().includes(selectedGender)
    );
  }

  if (selectedPrice !== roundedHighestPrice) {
    filteredProducts = filteredProducts?.filter(
      (product) => Number(product.price.slice(0, -2).replace(',', '.')) <= selectedPrice
    );
  }

  console.log(filteredProducts);
  return filteredProducts;
};

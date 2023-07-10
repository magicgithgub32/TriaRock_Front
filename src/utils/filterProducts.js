export const genders = ['hombre', 'mujer', 'infantil'];

export const filterProducts = (selectedGender, selectedPrice, productsToRender, selectedTypes) => {
  let filteredProducts = productsToRender;

  filteredProducts = filteredProducts.filter((product) => product.price <= selectedPrice);

  if (selectedGender !== '') {
    const excludedGenders = genders.filter((gender) => gender !== selectedGender);

    filteredProducts = filteredProducts.filter(
      (product) => !excludedGenders.includes(product.name)
    );
  }

  if (selectedTypes !== []) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedOptions.includes(product.name.split(' ')[0])
    );
  }
  return filteredProducts;
};

export const genders = ['hombre', 'mujer', 'infantil'];


// const filteredProducts = PRODUCTS.filter((product) => {
//   if (
//     (categoriesChecked.includes(product.category) ||
//       categoriesChecked.length === 0) &&
//     (inputPriceMin.value <= product.price || inputPriceMin.value === '') &&
//     (product.price <= inputPriceMax.value || inputPriceMax.value === '')
//   ) {
//     return product;
//   }
// });

export const filterProducts = (
  categoryItems,
  selectedTypes,
  selectedGender,
  selectedPrice,
  roundedHighestPrice
) => {
  console.log(selectedGender)
  let filteredProducts = categoryItems;

  if (selectedTypes !== []) {
    filteredProducts = [...filteredProducts]?.filter((product) =>
      selectedTypes.includes(product.name.split(' ')[0])
    );
  } else {  filteredProducts = [...filteredProducts]?.filter((product) =>
    selectedTypes.includes(''))
  }

  if (selectedGender === 'hombre' || selectedGender === 'mujer') {
    const excludedGenders = genders.filter((gender) => gender !== selectedGender);
    filteredProducts = [...filteredProducts]?.filter(
      (product) =>
        !excludedGenders.some((word) => product.name.toLowerCase().includes(word.toLowerCase()))
    );
  } else if (selectedGender === 'infantil') {
    filteredProducts = [...filteredProducts]?.filter((product) =>
      product.name.toLowerCase().includes(selectedGender)
    );
  }

  if (selectedPrice < roundedHighestPrice) {
    filteredProducts = [...filteredProducts]?.filter(
      (product) => Number(product.price.slice(0, -2).replace(',', '.')) <= selectedPrice
    );
    console.log('abc', filteredProducts)
  }

  return filteredProducts;
};

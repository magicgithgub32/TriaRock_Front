export const genders = ['hombre', 'mujer', 'infantil'];

export const filterProducts = (selectedGender, selectedPrice, productsToRender, selectedTypes, roundedHighestPrice) => {
  let filteredProducts = productsToRender;
  
console.log(selectedPrice)
  if (selectedPrice !== roundedHighestPrice) {
    
  filteredProducts = filteredProducts?.filter((product) => {
    const productPrice = Number(product.price.slice(0, -2).replace(',', '.'));
    console.log(productPrice)
    productPrice <= selectedPrice});
  }

  if (selectedGender !== '') {
    const excludedGenders = genders.filter((gender) => gender !== selectedGender);
    // filteredProducts = filteredProducts.filter((product) => {
    //   return excludedGenders.some((word) =>
    //     !((product.name).toLowerCase()).includes(word.toLowerCase())
    //   );
    // });
    filteredProducts = filteredProducts?.filter((product) => 
      // console.log('product name', product.name.toLowerCase())
      // console.log('selectedgender', selectedGender.toLowerCase())
    (product.name).includes(selectedGender)
  )
  }

  if (selectedTypes !== []) {
    filteredProducts = filteredProducts?.filter((product) =>
      selectedTypes.includes(product.name.split(' ')[0])
    );
  }
  console.log(filteredProducts)
  return filteredProducts;
};

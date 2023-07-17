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

  if (selectedGender === 'hombre' || selectedGender === 'mujer') {
    const excludedGenders = genders.filter((gender) => gender !== selectedGender);    
    filteredProducts = filteredProducts?.filter((product) => 
     !excludedGenders.some((word) => product.name.toLowerCase().includes(word.toLowerCase()))
    )    
  } else if (selectedGender === 'infantil') {
    filteredProducts = filteredProducts?.filter((product) =>
    product.name.toLowerCase().includes(selectedGender)
    );
  }
  
  if (selectedPrice !== roundedHighestPrice) {
    filteredProducts = filteredProducts?.filter(
      (product) => Number(product.price.slice(0, -2).replace(',', '.')) <= selectedPrice
    );
  }
  
  return filteredProducts;
};

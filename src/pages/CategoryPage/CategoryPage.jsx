import React, {useLocation} from 'react'; 
import './CategoryPage.css';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';

const CategoryPage = ( {category} ) => {

//     const [ filteredProducts, setFilteredProducts ] = useState()

//     const getFilteredProducts = (category) => {
//       allProducts.filter((product) => product.category === category)
//   }
 
  
//     const [category, setCategory] = useState();
//     const location = useLocation();
//     const currentPath = location.pathname;

//   useEffect(() => {
//    if (currentPath === '/swimming') { setCategory('swimming') } 
//    else if (currentPath === '/cycling') { setCategory('cycling') } 
//    else if (currentPath === '/running') { setCategory('running') } 
//     }, [currentPath])

  return (
    <div>
      <Header />
      <ProductCard category={category}/>
      <Footer />
    </div>
  )
}

export default CategoryPage

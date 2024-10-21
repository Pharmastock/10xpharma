// import { useContext, createContext, useEffect, useReducer } from 'react'
// import axios from 'axios'
// import productReducer, { PRODUCTS_ACTIONS } from '../reducer/productReducer'
// import skincare from '../components/images/skincare.jpg'
// import hairCare from '../components/images/imageshair care.jpeg'
// import hygincare from '../components/images/hygincare.jpg'
// import firstaid from '../components/images/firstaid.jpg'

// const API = 'https://api.pujakaitem.com/api/products'
// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featuredProducts: [],
//   isSingleLoading: false,
//   singleProduct: {},
// }

// // context
// const ProductContext = createContext()

// // provider
// const ProductProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(productReducer, initialState)

//   const getProducts = async (url) => {
//     dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING })
//     try {
//       const res = await axios.get(url)
//       dispatch({
//         type: PRODUCTS_ACTIONS.SET_PRODUCTS,
//         payload: res.data,
//       })
//     } catch (error) {
//       dispatch({ type: PRODUCTS_ACTIONS.SET_ERROR })
//     }
//   }

//   const getSingleProduct = async (url) => {
//     dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING })
//     try {
//       const res = await axios.get(url)
//       const product = res.data
//       dispatch({
//         type: PRODUCTS_ACTIONS.SET_SINGLE_PRODUCT,
//         payload: product,
//       })
//     } catch (error) {
//       dispatch({ type: PRODUCTS_ACTIONS.SET_ERROR })
//     }
//   }

//   useEffect(() => {
//     // getProducts(API)
//   }, [])

//   return (
//     <ProductContext.Provider value={{ ...state, getSingleProduct }}>
//       {children}
//     </ProductContext.Provider>
//   )
// }
// const dummyData = [
//   {
//     "id": "skincare",
//     "name": "Skin Care",
//     "company": "10X beauty",
//     "price": 23000,
//     "image": skincare,
//     "description": "The mission of LoveBites is to establish a skin-problem-free community across India by providing an effective, scientifically-backed night cream that guarantees visible results. By focusing on the unique skin care needs of Indian consumers, LoveBites aims to address common skin issues such as pigmentation, acne, and dullness through its dermatologically tested formulation. Our commitment to excellence and transparency ensures that each user experiences significant improvement in their skin health, promoting confidence and well-being. With LoveBites, we envision creating a society where flawless, healthy skin is not a luxury but an accessible reality for all.",
//     "category": "Skin Care",
//     "featured": true
//   },
//   {
//     "id": "haircare",
//     "name": "Hair Care",
//     "company": "10X beauty",
//     "image": hairCare,
//     "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//     "category": "Hair Care",
//     "featured": true,
//     "shipping": true
//   },
//   {
//     "id": "intimatecare",
//     "name": "Intimate Care",
//     "company": "10X beauty",
//     "image": hygincare,
//     "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//     "category": "Intimate Care",
//     "featured": true,
//     "shipping": true
//   },
//   {
//     "id": "firstaid",
//     "name": "First-Aid",
//     "company": "10X beauty",
//     "image": firstaid,
//     "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//     "category": "First-Aid",
//     "featured": true,
//     "shipping": true
//   }
// ]
// // custom hook for global context
// export const useProduct = () => {
//   return useContext(dummyData)
// }

// export default ProductProvider
import { useContext, createContext, useReducer } from 'react';
import skincare from '../components/images/skincare.jpg';
import hairCare from '../components/images/imageshair care.jpeg';
import hygincare from '../components/images/hygincare.jpg';
import firstaid from '../components/images/firstaid.jpg';
import productReducer, { PRODUCTS_ACTIONS } from '../reducer/productReducer';

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

// context
const ProductContext = createContext();

// Dummy data for products
const dummyData = [
  // {
  //   id: 'skincare',
  //   name: 'Skin Care',
  //   company: '10X Beauty',
  //   price: 23000,
  //   image: skincare,
  //   description:
  //     'The mission of LoveBites is to establish a skin-problem-free community across India by providing an effective, scientifically-backed night cream that guarantees visible results. By focusing on the unique skin care needs of Indian consumers, LoveBites aims to address common skin issues such as pigmentation, acne, and dullness through its dermatologically tested formulation.',
  //   category: 'Skin Care',
  //   featured: true,
  // },
  {
    id: '1',
    name: 'LoveBite Night Cream',
    company: '10X Beauty',
    price: 23000,
    image: [skincare],
    description:
      'The mission of LoveBites is to establish a skin-problem-free community across India by providing an effective, scientifically-backed night cream that guarantees visible results. By focusing on the unique skin care needs of Indian consumers, LoveBites aims to address common skin issues such as pigmentation, acne, and dullness through its dermatologically tested formulation.',
    category: 'Skin Care',
    featured: true,
  },
  {
    id: 'haircare',
    name: 'Hair Care',
    company: '10X Beauty',
    image: hairCare,
    
    category: 'Hair Care',
    featured: true,
    shipping: true,
  },
  {
    id: 'intimatecare',
    name: 'Intimate Care',
    company: '10X Beauty',
    image: hygincare,
    category: 'Intimate Care',
    featured: true,
    shipping: true,
  },
  {
    id: 'firstaid',
    name: 'First-Aid',
    company: '10X Beauty',
    image: firstaid,
    
    category: 'First-Aid',
    featured: true,
    shipping: true,
  },
];

// provider
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    ...initialState,
    products: dummyData,
    featuredProducts: dummyData.filter((product) => product.featured),
  });

  const getSingleProduct = (id) => {
    dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING });
    console.log('here in single product page',id)
    const product = dummyData.find((item) => item.id === id);
    console.log(product,'product')
    if (product) {
      dispatch({
        type: PRODUCTS_ACTIONS.SET_SINGLE_PRODUCT,
        payload: product,
      });
    } else {
      dispatch({ type: PRODUCTS_ACTIONS.SET_ERROR });
    }
  };

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// custom hook for global context
export const useProduct = () => {
  return useContext(ProductContext);
};

export default ProductProvider;

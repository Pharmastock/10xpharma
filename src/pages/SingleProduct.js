import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useProduct } from '../context/productContext'
import { useEffect } from 'react'
import PageNavigation from '../components/PageNavigation'
import { Container } from '../styles/Container'
import ProductImage from '../components/ProductImage'
import FormatPrice from '../helpers/FormatPrice'
import { MdSecurity } from 'react-icons/md'
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import { Button } from '../styles/Button'
import Star from '../components/Star'
import './singlepage.css'
import AddToCart from '../components/AddToCart'
import pdfFile from '../components/images/nightCream/LoveBitesBrochure.pdf'; // Adjust path as needed
import skincare from '../components/images/skincare.jpg';
import hairCare from '../components/images/imageshair care.jpeg';
import hygincare from '../components/images/hygincare.jpg';
import firstaid from '../components/images/firstaid.jpg';
import first from '../components/images/nightCream/1.jpeg';
import secound from '../components/images/nightCream/2.jpeg';
import third from '../components/images/nightCream/3.jpeg';
import fourth from '../components/images/nightCream/4.jpg';
import fifth from '../components/images/nightCream/5.jpg';
// import Star from './Star'; // Make sure to import the Star component properly

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
    price: 500,
    image: [skincare],
    description:
      'The mission of LoveBites is to establish a skin-problem-free community across India by providing an effective, scientifically-backed night cream that guarantees visible results. By focusing on the unique skin care needs of Indian consumers, LoveBites aims to address common skin issues such as pigmentation, acne, and dullness through its dermatologically tested formulation.',
    Vision: 'The vision of LoveBites night cream is to revolutionise skin care by offering an affordable solution that effectively addresses prevalent skin concerns such as hyperpigmentation, acne, freckles, uneven skin tone, sun-tan, wrinkles, blemishes, and visible pores. Our goal is to create a product that combines cutting-edge dermatological research with the finest medicinal ingredients to deliver assured results for all skin types. By making high-quality, result-oriented skincare formulation, LoveBites night cream aspires to become a trusted name in every household, fostering user confidence and satisfaction. We aim to empower our users by revealing their natural beauty, helping them achieve flawless, even tone, radiant skin without financial burden.',
    ProductDetails: "LoveBites is a registered trademark owned by the firm 10X Beauty Expert. This is a night use cream and it's use is recommended untill the skin have any problems like Sun Tan, Under Eye Circles, Acne, Blemishes, Black Pigments, Red Pigments, Uneven Skin Tone, Brown Patches, Frakles, Melasma, Hyperpigmentation, etc.Once the problem disappears, we recommend to discontinue the use of product.This is Unisex product.Both male and female can use it.We recommend to use the product above 12 years of age.",
    HowToUse: "Clean the Target screen area with soap and water thoroughly after sunset and rinse the eyes with plenty of water. Wipe out the face, dry with a cotton cloth. Take a thumb nail quantity (one centimeter) of LoveBites night cream and apply it gently without pressure on the targeted area of your face. Do not massage. Make sure that you don't sweat after applying the product. When you wake up in the morning, make sure that you wash the LoveBites night cream with soap and water immediately. Rinse your face with cold water 3 times a day (approximately every 6 hours) during the treatment period. Repeat this process daily.",
    Durationoftreatment: "Minor skin problems could be solved in 2 to 5 times use and major skin problems can take more than 28 days. Many users reported visible effect on the first morning itself. We recommend to use the product first on the small area to check the overall effect.",
    Caution: "Use LoveBites night cream Only after sunset use LoveBites night cream For a maximum of 28 days and then take a break of 7 days. LoveBites total repair night cream has to keep away from sunlight/UV light, moisture/ sweat and heat. Users should remove air from the LoveBites tube after every use and close the cap tightly to avoid oxygen contact. Make sure that you use the product only after sunset, ideally just before going to bed. Don't sweat much after using the product. Do not apply the product on cuts and wounds. If your skin is too sensitive, skin peeling can be observed. Do not panic in this situation. Use the product for another 3 days as per direction above, skin pilling will stop and it will give you good results.",
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


const SingleProduct = () => {
  // const { getSingleProduct, singleProduct, isLoading } = useProduct()
  const { id } = useParams()
  const singleProduct = dummyData.find((item) => item.id === id)


  const {
    id: productId,
    company,
    description,
    name,
    price,
    category,
    stock,
    stars = 4.5,
    reviews =120,
    image,
    Vision,
ProductDetails,
    HowToUse,
    Durationoftreatment,
    Caution,
  } = singleProduct

  // const stars = 4.5; // 4.5 star rating
  // const reviews = 120; // Example review count

  return (
    <Wrapper>
      <Container className="container">
        <PageNavigation title={name} />
        <div className="grid grid-two-column">
          <div className="product_images">
            <img src={first} className='image'/>
            <img src={secound} className='image'/>
            <img src={third} className='image'/>
            <img src={fourth} className='image'/>
            <img src={fifth} className='image'/>
         
            {/* <img src={skincare} className='image'/> */}
            {/* <ProductImage images={skincare} />
            <ProductImage images={hairCare} />
            <ProductImage images={hygincare} />
            <ProductImage images={firstaid} /> */}
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <p>
              <Star stars={stars} reviews={reviews} />
            </p>
            <p className="product-data-price">
              MRP :-  {` ` + price + `/-`}
              {/* <del>
                <FormatPrice price={price + 400000} />
              </del> */}
            </p>
            {/* <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p> */}
            <p><b>Mission :-  </b> {'  ' + description}</p>
            <p><b>Vision :-  </b> {'  ' + Vision ? Vision : ''}</p>
            <p><b>ProductDetails :-  </b> {'  ' + ProductDetails ? ProductDetails : ''}</p>
            <p><b>HowToUse :-  </b> {'  ' + HowToUse ? HowToUse : ''}</p>
            <p><b>Durationoftreatment :-  </b> {'  ' + Durationoftreatment ? Durationoftreatment : ''}</p>
            <p><b>Caution :-  </b> {'  ' + Caution ? Caution : ''}</p>
            {/* <p><b>Vision :-  </b> {'  ' + Vision ?Vision :''}</p> */}
            <div className="product-data-warranty">
              {/* <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div> */}
            </div>
            <div className="product-data-info">
              <p>
                Availblity:{' '}
                <span>{stock > 0 ? 'In Stock' : 'Availabe at Your near Pharmacy Shop'}</span>
              </p>
              {/* <p>
                ID: <span>{productId}</span>
              </p> */}
              <p>
                Brand: <span>{company}</span>
              </p>
            </div>
            <hr />
            <div>
              <h2>Download Our Brochure</h2>
              <br />
              <center>
                <a href={pdfFile} download="LoveBites Brochure.pdf">
                  <Button>LoveBites Brochure</Button>
                </a>
              </center>
            </div>
            {stock > 0 ? <AddToCart product={singleProduct} /> : ''}
          </div>

        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product-image {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`

export default SingleProduct

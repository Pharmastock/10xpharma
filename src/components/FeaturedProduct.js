import React from 'react'
import { useProduct } from '../context/productContext'
import styled from 'styled-components'
import Product from '../pages/Product'
import loveBite from '../components/images/loveBite.jpeg'
import skincare from '../components/images/skincare.jpg'
import hairCare from '../components/images/imageshair care.jpeg'
import hygincare from '../components/images/hygincare.jpg'
import firstaid from '../components/images/firstaid.jpg'

function FeaturedProduct() {
  const { isLoading, featuredProducts } = useProduct()
  const dummyData = [
    {
      "id": "1",
      "name": "LoveBites",
      "company": "10X beauty",
      "price": 50000,
      "image": skincare,
      "description": "The mission of LoveBites is to establish a skin-problem-free community across India by providing an effective, scientifically-backed night cream that guarantees visible results. By focusing on the unique skin care needs of Indian consumers, LoveBites aims to address common skin issues such as pigmentation, acne, and dullness through its dermatologically tested formulation. Our commitment to excellence and transparency ensures that each user experiences significant improvement in their skin health, promoting confidence and well-being. With LoveBites, we envision creating a society where flawless, healthy skin is not a luxury but an accessible reality for all.",
      "category": "Skin Care",
      "featured": true
    },
    {
      "id": "haircare",
      "name": "Hair Care",
      "company": "10X beauty",
      "image": hairCare,
      "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      "category": "Hair Care",
      "featured": true,
      "shipping": true
    },
    {
      "id": "intimatecare",
      "name": "Intimate Care",
      "company": "10X beauty",
      "image": hygincare,
      "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      "category": "Intimate Care",
      "featured": true,
      "shipping": true
    },
    {
      "id": "firstaid",
      "name": "First-Aid",
      "company": "10X beauty",
      "image": firstaid,
      "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
      "category": "First-Aid",
      "featured": true,
      "shipping": true
    }
  ]

  return isLoading ? (
    <Wrapper className="section">
      <div className="container">
        <div className="common-heading">Loading ...</div>
      </div>
    </Wrapper>
  ) : (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Products</div>
        <div className="grid grid-three-column">
          {dummyData.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`

export default FeaturedProduct

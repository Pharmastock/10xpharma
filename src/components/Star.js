import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

function Star({ reviews, stars }) {
  console.log(reviews, stars)
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
// console.log(ratingStars)
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    )
  })

  return (
    <Wrapper>
      <div className="icon-style">
        {ratingStars}
        <p>{reviews} By Most Famous Rating Agency</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`

export default Star

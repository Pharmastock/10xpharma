import styled from 'styled-components'
import './contact.css'
const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          input[type='submit'] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `

  return (
    <Wrapper>
      <h2 className="common-heading"> Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.47139496982913!2d72.8551224823123!3d21.21033292248699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f71e13845dd%3A0xeeba0941efe8f7b0!2sPharmaOne%20eBooks%20eLibrary%20Publication%20House!5e0!3m2!1sen!2sin!4v1729505040696!5m2!1sen!2sin"
        width="80%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.47139496982913!2d72.8551224823123!3d21.21033292248699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f71e13845dd%3A0xeeba0941efe8f7b0!2sPharmaOne%20eBooks%20eLibrary%20Publication%20House!5e0!3m2!1sen!2sin!4v1729505040696!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.9322468419499!2d72.85487712534933!3d21.210350902208916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f71e13845dd%3A0xeeba0941efe8f7b0!2sPharmaOne%20eBooks%20eLibrary%20Publication%20House!5e1!3m2!1sen!2sin!4v1729505018261!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <div className="container">
        <div className='make-containr'>
          <div>
            <h2>10X Beauty</h2>
            <p>53, Hansh Society, Varachh Road, Near Baroda Prestige, Surat-395006</p>
          </div>
        </div>
        <br />
        <br />
        <div className='make-containr'>
          <div className="footer-contact">
            <h2>Call Us</h2>
            <h3>
              <a href="tel:+918591181166" className="text-black">+91 85911 81166</a>
            </h3>
          </div> </div>
        {/* <div className="contact-form">
          <form
            action="https://formspree.io/f/mdorgobp"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="Username"
              required
              autoComplete="off"
              placeholder="Enter your Username"
            />
            <input
              type="email"
              name="Email"
              required
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div> */}
      </div>
    </Wrapper>
  )
}

export default Contact

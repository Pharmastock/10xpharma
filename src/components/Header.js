import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import logo from './images/logo.png'


function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 7rem;
  }
`

export default Header

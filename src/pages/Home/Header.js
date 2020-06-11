import React, { useState } from 'react'
import { HeaderNav } from './styles'
import Logo from '../../images/logo.png'
import Menu from '../../images/ico-menu.svg'
import Close from '../../images/ico-close.svg'

export default function Header () {
  const [menuMobile, setMenuMobile] = useState(false)

  const openMenu = () => {
    setMenuMobile(true)
  }

  const closeMenu = () => {
    setMenuMobile(false)
  }

  return (
    <HeaderNav>
      <h1><img src={ Logo } /></h1>
      <nav>
        <ul>
          <li><a href="#">HTML5</a></li>
          <li><a href="#">CSS3</a></li>
          <li><a href="#">JAVASCRIPT</a></li>
          <li><a href="#">REACT</a></li>
          <li><a href="#">REDUX</a></li>
        </ul>
      </nav>
      <div className="menu-mobile">
        <button onClick={ openMenu }><img src={ Menu } /></button>
        {menuMobile &&
        <div>
          <div className="overlay-fluid">
          </div>
          <div className="itens-menu-mobile">
            <div>
              <button onClick={ closeMenu }><img src={ Close } /></button>
            </div>
            <ul>
              <li><a href="#">HTML5</a></li>
              <li><a href="#">CSS3</a></li>
              <li><a href="#">JAVASCRIPT</a></li>
              <li><a href="#">REACT</a></li>
              <li><a href="#">REDUX</a></li>
            </ul>
          </div>
        </div>
        }
      </div>
    </HeaderNav>
  )
}

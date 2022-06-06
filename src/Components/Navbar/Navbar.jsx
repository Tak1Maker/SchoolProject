import React from 'react'
import SuzukiCard from '../Cards/Suzuki/SuzukiCards'
//import { NavLink } from 'react-router-dom'
import Suzuki from '../Cards/Suzuki/SuzukiCards'
import './Navbar.css'

export default function Navbar() {

  return (
    <>
      <input type="checkbox" id="main-navigation-toggle" className="btn btn--close" title="Toggle main navigation" />
      <label htmlFor="main-navigation-toggle">
        <span></span>
      </label>

      <nav id="main-navigation" className="nav-main">
        <ul className="menu">

          <li className="menu__item">
            <a className="menu__link" to='/'>Accueil</a>
          </li>

          <li className="menu__item">
            <a className="menu__link" to='suzuki'>Suzuki</a>
          </li>

          <li className="menu__item">
            <a className="menu__link" to="Yamaha">Yamaha</a>
          </li>

          <li className="menu__item">
            <a className="menu__link" to="Kawasaki">Kawasaki</a>
          </li>

          <li className="menu__item">
            <a className="menu__link" href={SuzukiCard}>Contact</a>
          </li>

        </ul>
      </nav></>
  )
}

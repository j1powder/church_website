'use client'

import React, {Fragment, useEffect} from 'react'
import Link from 'next/link'
import classes from './HeaderAndFooter.module.css'
import Image from 'next/image'
import logo from '../../public/Upper-Room-Logo-by-Royal.png'



const Header = () => {


  return (
    <Fragment>
      <div className={classes.mainDiv}>
      <Image src={logo} alt="Upper Room Logo" className={classes.logo} />
      <h2>Upper Room Apostolic Church of Maryvale</h2>
      <nav className={classes.navBar}>
        <ul className={classes.menuList}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Vison/Mission</Link>
          </li>
          <li>
            <Link href="#">Pastors</Link>
          </li>
          <li>
            <Link href="#">Ministries</Link>
          </li>
          <li>
            <Link href="#">Photo Gallery</Link>
          </li>
        </ul>
      </nav>
      </div>
    </Fragment>
  )
}

export default Header
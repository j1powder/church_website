'use client'

import React, {Fragment, useEffect} from 'react'
import Link from 'next/link'
import classes from './HeaderAndFooter.module.css'



const Header = () => {


  return (
    <Fragment>
      <div className={classes.mainDiv}>
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
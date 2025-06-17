'use client'

import React, {Fragment, useEffect, useState} from 'react'
import Link from 'next/link'
import classes from './HeaderAndFooter.module.css'
import Image from 'next/image'
import logo from '../../public/Upper-Room-Logo-by-Royal.png'
import mobileMenu from '../../public/mobileMenu.png'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';



const Header = () => {
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { label: 'Home', icon: 'pi pi-home', link: '#' },
    { label: 'Vision/Mission', icon: 'pi pi-eye', link: '#' },
    { label: 'Pastors', icon: 'pi pi-users', link: '#' },
    { label: 'Ministries', icon: 'pi pi-briefcase', link: '#' },
    { label: 'Photo Gallery', icon: 'pi pi-image', link: '#' }
  ];

  return (
    <Fragment>
      <div className={classes.mainDiv}>
      <Image src={logo} alt="Upper Room Logo" className={classes.logo} />
      <h2>Upper Room Apostolic Church of Maryvale</h2>
      <nav className={classes.navBar}>
        <ul className={classes.menuList}>
          {menuItems.map((item)=>{
            return (
              <li key={item.label}>
                <Link href={item.link} className={classes.link}>
                  <i className={item.icon}></i> {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <Button className={classes.menuBtn} unstyled onClick={()=>setVisible(true)}>
      <i className="pi pi-bars"></i>
      </Button>
      </div>

      <Sidebar position="right" visible={visible} onHide={()=>setVisible(false)}>
      <nav className={classes.sidebarNav}>
        <ul className={classes.sidebarMenuList}>
          {menuItems.map((item)=>{
            return (
              <li key={item.label}>
                <Link href={item.link} className={classes.sidebarLink}>
                  <i className={item.icon}></i> {item.label}
                </Link>
                <br/>
                <br/>
              </li>
            )
          })}
        </ul>
          
      </nav>
      </Sidebar>
      
    </Fragment>
  )
}

export default Header
import {useEffect, useState} from "react";
import axios from "axios";
import classes from '../modules/Header.module.scss'
import cart from '../assets/cart-icon.svg'
import favorites from '../assets/favorites-icon.svg'
import profile from '../assets/profile-icon.svg'
import logo from '../assets/cyber-logo.svg'
import search from '../assets/search-icon.svg'
import {Link} from "react-router";


export const Header = () => {
  const [navItems, setNavItems] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5300/menus/navbarItems")
        .then(response => {
          console.log("Fetched menus:", response.data);
          setNavItems(response.data[0]);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setNavItems({});
        });
  }, []);

  const burgerMenu =()=>{
    setMenuOpen(!menuOpen)
  }

  return (
      <>
          <header className={classes['header-wrapper']}>
              <figure>
                  <Link className={`${classes['navlink']} ${classes['active']}`}
                        to={'/'}>
                      <img src={logo} alt="cyber-logo"/>
                  </Link>

              </figure>

              <figure className={classes['search-wrapper']}>
                  <img src={search} alt="search-icon"/>
                  <input placeholder='Search' type='text'/>
              </figure>

              {/*<nav>*/}
              {/*  <ul className={menuOpen ? classes['ul active'] : classes['ul']}>*/}
              {/*    {navItems.map((navItem, index) => (*/}
              {/*        <div key={index}>*/}
              {/*          {navItem.home && (*/}
              {/*              <li>*/}
              {/*                <Link className={`${classes['navlink']} ${classes['active']}`} to={navItem.home.slug}>*/}
              {/*                  {navItem.home.name}*/}
              {/*                </Link>*/}
              {/*              </li>*/}
              {/*          )}*/}
              {/*          {navItem.about && (*/}
              {/*              <li>*/}
              {/*                <Link className={classes['navlink']} to={navItem.about.slug}>*/}
              {/*                  {navItem.about.name}*/}
              {/*                </Link>*/}
              {/*              </li>*/}
              {/*          )}*/}
              {/*          {navItem.contactUs && (*/}
              {/*              <li>*/}
              {/*                <Link className={classes['navlink']} to={navItem.contactUs.slug}>*/}
              {/*                  {navItem.contactUs.name}*/}
              {/*                </Link>*/}
              {/*              </li>*/}
              {/*          )}*/}
              {/*          {navItem.blog && (*/}
              {/*              <li>*/}
              {/*                <Link className={classes['navlink']} to={navItem.blog.slug}>*/}
              {/*                  {navItem.blog.name}*/}
              {/*                </Link>*/}
              {/*              </li>*/}
              {/*          )}*/}
              {/*        </div>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*</nav>*/}

              <nav>
                  <ul >



                                  <li>
                                      <Link className={`${classes['navlink']} ${classes['active']}`}
                                            to={'/'}>
                                     home
                                      </Link>
                                  </li>


                                  <li>
                                      <Link className={classes['navlink']} to={'/about'}>
            about
                                      </Link>
                                  </li>


                                  <li>
                                      <Link className={classes['navlink']} to={'/contactUs'}>
                          contact us
                                      </Link>
                                  </li>

                                  <li>
                                      <Link className={classes['navlink']} to={'/blog'}>
                    blog
                                      </Link>
                                  </li>



                  </ul>
              </nav>


              <figure className={menuOpen ? classes['icons-wrapper active'] : classes['icons-wrapper']}>
                  <img src={cart} alt="cart-icon"/>
                  <img src={favorites} alt="favorites-icon"/>
                  <img src={profile} alt="profile-icon"/>
              </figure>

              <div className={classes['hamburger']} onClick={burgerMenu}>
                  {menuOpen ? ' ☰' : '×'}
              </div>

          </header>
      </>
  )
}


export default Header
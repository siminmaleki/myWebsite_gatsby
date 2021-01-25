import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Tutorials",
      path: "tutorials",
    },
    // {
    //   title: "Podcasts",
    //   path: "Podcasts",
    // },

    // {
    //   title: "Apps",
    //   path: "apps",
    // },
    {
      title: "Research",
      path: "Research",
    },
    {
      title: "About me",
      path: "who",
    },
  ]

  const [menuActive, setMenuActive] = useState(false)
  const [nav, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeBackground)

  return (
    <nav className={nav ? "site-navigation active" : "site-navigation"}>
      <section className="logoContainer">
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </section>

      <div className={`menu-content-container  ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} activeClassName="active">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  )
}
export default Header

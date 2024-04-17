import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Menu, HeaderStyled } from "./header.styles"

const Header = ({ siteTitle }) => {
  const result = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          menu_items {
            destination_page {
              uid
            }
            label
          }
        }
      }
    }
  `)
  return (
    <HeaderStyled>
      <Menu>
        {result.prismicNavigation.data.menu_items.map(menuItem => (
          <Link
            to={`/${menuItem.destination_page.uid}`}
            key={menuItem.destination_page.uid}
          >
            {menuItem.label}
          </Link>
        ))}
      </Menu>
    </HeaderStyled>
  )
}

export default Header

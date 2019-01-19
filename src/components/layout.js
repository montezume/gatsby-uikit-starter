import React from 'react'
import PropTypes from 'prop-types'
import { Text, customProperties } from '@commercetools-frontend/ui-kit'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            <Text.Body>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a
                style={{ color: customProperties['--color-green'] }}
                href="https://www.gatsbyjs.org"
              >
                Gatsby
              </a>
            </Text.Body>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

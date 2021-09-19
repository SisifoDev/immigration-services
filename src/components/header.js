import * as React from "react"
import PropTypes from "prop-types"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

export default function Header(props) {
  const { siteTitle } = props
  const { languages, changeLanguage } = useI18next()

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <ul>
          {languages.map(lng => (
            <li key={lng}>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault()
                  changeLanguage(lng)
                }}
              >
                {lng}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

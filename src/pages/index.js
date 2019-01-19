import React from 'react'
import { Link } from 'gatsby'
import {
  Text,
  CameraIcon,
  customProperties,
} from '@commercetools-frontend/ui-kit'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Text.Headline elementType="h2">Hi people</Text.Headline>
    <Text.Body>Welcome to your new Gatsby site.</Text.Body>
    <Text.Body>Now go build something great.</Text.Body>
    <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
      <CameraIcon size="scale" theme="green" />
    </div>
    <Text.Body>
      <Link
        style={{
          color: customProperties['--color-green'],
          textDecoration: 'none',
        }}
        to="/page-2/"
      >
        Now go build something great.
      </Link>
    </Text.Body>
  </Layout>
)

export default IndexPage

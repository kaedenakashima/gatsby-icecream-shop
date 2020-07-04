import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from '../components/Home/Menu'
import Products from '../components/Home/Products'
import Contact from '../components/Home/Contact'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keyword={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Icecream Shop"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout >
)

export const query = graphql`
  {
    img: file(relativePath:{eq:
    "default-background.jpeg"}){
     childImageSharp{
       fluid{
        ...GatsbyImageSharpFluid_withWebp
       }
     }
   } 
   menu:allContentfulIceCreamItemExample {
    edges{
      node{
        id
        title
        description {
          description
        }
        price
        category
        image {
          fixed(width:50, height:110) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  } 
 }
`
export default IndexPage

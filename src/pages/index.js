import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keyword={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Icecream Shop"
      styleClass="default-background"
    />
    <Info />
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
 }
`
export default IndexPage

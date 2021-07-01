import React from "react"
import { graphql } from "gatsby"
import "../styles/index.scss"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "profile" } }) {
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 3080, quality: 100, webpQuality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

export default function ProfilePage({ data }) {
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div id="ProfileContainer">
        <Img fluid={featuredImgFluid} />
        <h1>{post.frontmatter.title}</h1>
        <div id="CV" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

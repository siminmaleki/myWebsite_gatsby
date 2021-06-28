import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Img from "gatsby-image"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { postType: { eq: "BlogPost" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              author
              postType
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol className="posts">
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className="post">
              <Link id="postLinks" to={`/blog/${edge.node.fields.slug}`}>
                <Img
                  fluid={
                    edge.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                />

                <h2>{edge.node.frontmatter.title}</h2>

                <p>
                  {edge.node.frontmatter.date} by {edge.node.frontmatter.author}{" "}
                </p>
                <p>{edge.node.excerpt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage

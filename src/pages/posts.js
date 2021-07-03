import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Img from "gatsby-image"
import { navigate } from "gatsby"

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { postType: { eq: "BlogPost" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              tags
              date
              author
              postType
              cardImage {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 100, webpQuality: 100) {
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
          const tags = edge.node.frontmatter.tags || []
          return (
            <li className="post">
              <Link id="postLinks" to={`/post/${edge.node.fields.slug}`}>
                <Img
                  fluid={edge.node.frontmatter.cardImage.childImageSharp.fluid}
                />

                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <p>
                {edge.node.frontmatter.date} by {edge.node.frontmatter.author}{" "}
              </p>
              <p>{edge.node.excerpt}</p>

              {/* {tags.map(tag => {
                return [
                  <div
                    key={tag}
                    variant="outlined"
                    onClick={event => {
                      navigate(`/tag/${tag}`)
                    }}
                  >
                    <p>{tag}</p>
                  </div>,
                ]
              })} */}
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default PostsPage

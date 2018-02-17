import React from 'react'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Image from 'gatsby-image'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image,
  path
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="containerPost">
        <Image className="headerImage" resolutions={image} />
        <h1 className="title ">{title}</h1>
        <div className="text">
          <PostContent content={content} />
        </div>
        
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`AnormalSpace | ${post.frontmatter.title}`} />}
      image={post.frontmatter.image.childImageSharp.resolutions}
      title={post.frontmatter.title}
      path={post.frontmatter.path}      
      shortname={'anormal-space-1'}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image {
              childImageSharp {
                resolutions(
                  width: 1900,
                  height:400,
                  cropFocus: CENTER,
                  quality: 90,
                  toFormat: WEBP,
                  duotone: {
                    highlight: "#ab000d",
                    shadow: "#003c8f"
                  }
                ) {
                  src
                  srcSet
                  base64
                }
              }
            }
      }
    }
  }
`
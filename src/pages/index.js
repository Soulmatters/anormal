import React from 'react'
import Link from 'gatsby-link'
import Script from 'react-load-script'
import graphql from 'graphql'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <div className="content">
            <h1 className="h1-is-center">Blog... mai puțin normal</h1>
          </div>

          <div className="cards">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'blog-post')
              .map(({ node: post }) => (
                <Card
                  key={Math.random()}
                  style={{
                    width: '100%',
                    height: 'auto',
                    margin: '20px',
                    boxSizing: 'border-box',
                  }}
                >
                  <CardTitle
                    href={post.frontmatter.path}
                    title={post.frontmatter.title}
                  />
                  <CardText>{post.excerpt}</CardText>
                  <CardActions>
                    <Link to={post.frontmatter.path}>
                      <FlatButton label="Vezi tot" primary={true} />
                    </Link>
                  </CardActions>
                </Card>
              ))}
          </div>
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            image
          }
        }
      }
    }
  }
`

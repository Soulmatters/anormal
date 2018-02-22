import React from 'react'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import Image from 'gatsby-image'
import Paper from 'material-ui/Paper';

export const BlogPostTemplate = ({
  content,
  title,
  slug,
  resolutions,
  helmet
}) => {

  return (
    <section className="section">
      <div className="containerPost">
      {helmet || ''}
      <Image className="headerImage" resolutions={ resolutions }/>
        <h1 className="title " dangerouslySetInnerHTML={{ __html: title}}/>
        <Paper zDepth={2} className="text">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        </Paper>
        
      </div>
    </section>
  )
}

export default ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <BlogPostTemplate
      resolutions={post.featured_media.localFile.childImageSharp.resolutions}  
      content={post.content}
      title={post.title}
      helmet={<Helmet title={`${post.title} | Anormal Space `}>
       <meta name="description" content={post.excerpt.substring(0, 160).replace(/(<([^>]+)>)/ig, "")} />
       <meta property="og:title" content={`${post.title} | Anormal Space `} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={location.href} />
      <meta property="og:image" content={post.featured_media.localFile.childImageSharp.resolutions.src} />
      <meta property="og:description" content={post.excerpt.substring(0, 160).replace(/(<([^>]+)>)/ig, "")} />
    </Helmet>}

      slug={post.slug}    
      shortname={'anormal-space-1'}
    />
  )
}

export const pageQuery = graphql`
 query currentPostQuery($id: String!) {
  wordpressPost(id: { eq: $id }) {
    title
    content
    excerpt
    featured_media {
                localFile {
                  childImageSharp {
                    resolutions(
                    traceSVG: {
                      color: "lightgray",
                      optTolerance: 0.4,
                      turdSize: 100,
                      turnPolicy: TURNPOLICY_MAJORITY,
                      background: "gray"
                      }
                      width: 780,
                      height:400,
                      cropFocus: CENTER,
                      quality: 100,
                      toFormat: WEBP,
                     
                    ) {
                      src
                      srcSet
                      base64
                      tracedSVG
                    }
                  }
                } 
            } 
    }

}
`

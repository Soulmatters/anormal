import React, { Component } from "react"
import PropTypes from "prop-types"
import Paper from 'material-ui/Paper';
import Image from 'gatsby-image'


import Helmet from "react-helmet"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <div>
         <div className="header">
       <Image className="introImg" resolutions={ currentPage.featured_media.localFile.childImageSharp.resolutions } style={{
        width:'100%',
        height:'400px'
      }}/>
       <h1 className="h1-is-center" dangerouslySetInnerHTML={{ __html: currentPage.title }} style={{
              background: '-webkit-linear-gradient( #fd746c, #ff9068)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900',
            position:'relative'}}
            /> 
       </div>
     

      <Paper zDepth={2} className="text" style={{
        width: '100%',
        maxWidth: '980px',
        margin: '0px auto',
        padding: '20px'
      }}>
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </Paper>
        </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
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
                      width: 1620,
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
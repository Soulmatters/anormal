import React from 'react'
import Link from 'gatsby-link'
import graphql from 'graphql'
import Image from 'gatsby-image'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card'

export default class IndexPage extends React.Component {

  render() {
    const  data  = this.props.data

    return (
      <section className="section" >
       <div className="container">
       <div className="header">
       <img className="introImg" src="/img/intro.jpg"/>
       <h1 className="h1-is-center" style={{
              background: '-webkit-linear-gradient( #fd746c, #ff9068)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '900'}}
            >Anormal Space</h1> 
       </div>
          <div className="content">
            <h1 className="h1-is-center" style={{
              background: '-webkit-linear-gradient( #fd746c, #ff9068)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '300'}}
            >Blog... mai puțin normal</h1> 
          </div>
            
          <div className="cards">       

               {data.allWordpressPost.edges.map(({ node }) => (

                <Link key={node.id} to={node.date + '/' +  node.slug} css={{ textDecoration: `none` }}>
<Card className="cardName" style={{
  maxWidth: '460px',
  height: '100%',
  background:' linear-gradient(to right, #fd746c, #ff9068)',
  color: '#fff',
}}>
<CardHeader
  title={node.author.name}
  subtitle="autor anormal"
  avatar={node.author.avatar_urls.wordpress_48.replace('http', 'https')}
/>
<CardMedia>
<Image resolutions={ node.featured_media.localFile.childImageSharp.resolutions } style={{
  height: 300,
  objectFit: 'cover'
 }}/></CardMedia>
<CardTitle title={ <h3 dangerouslySetInnerHTML={{ __html: node.title}}/>} subtitle={node.date}  />
<CardText style={{
  fontSize: '18px'
}}>
<div dangerouslySetInnerHTML={{ __html: node.content.substring(0, 200).replace(/(<([^>]+)>)/ig, "") }} />

</CardText>
</Card>

</Link>
             
               ))}
             </div>


             
          </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(sort: { fields: [date], order:DESC }) {
      edges {
        node {
          id
          title
          excerpt
          slug
          content
          date(formatString:"YYYY/MM/DD")
          author {
          name
          avatar_urls {
            wordpress_48
            wordpress_96
          }
        }
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
                      width: 400,
                      height:300,
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
    }
  }
`

import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content, contentComponent, description, title, helmet, image,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      { helmet || ''}
      <div className="containerPost">
       
         
            <img className="headerImage" src={image}/>
            <h1 className="title ">{title}</h1>
            <div className="text">
            <PostContent content={content} />
         </div>
       
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (<BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    helmet={<Helmet title={`AnormalSpace | ${post.frontmatter.title}`} />}
    image={post.frontmatter.image}
    title={post.frontmatter.title}
  />);
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image
      }
    }
  }
`;

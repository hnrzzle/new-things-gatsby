import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { SITENAME } from '../constants';
import PostPreview from '../components/PostPreview';

const Index = ({ data }) => (
  <Layout>
    <h1>{SITENAME}</h1>
    {data.allWordpressPost.edges.map(({ node }) => {
      const { id, slug, title, excerpt, date, author, categories } = node;

      return (
        <PostPreview
          key={id}
          title={title}
          author={author.name}
          date={date}
          slug={slug}
        >
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </PostPreview>
      );
    })}
    <Link to="/about/">Learn more about Us!</Link>
  </Layout>
);

export default Index;

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          content
          excerpt
          date(formatString: "MMMM DD, YYYY")
          modified
          content
          format
          author {
            id
            name
          }
          categories {
            id
            slug
            name
          }
        }
      }
    }
  }
`;

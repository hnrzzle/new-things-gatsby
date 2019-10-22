import React from 'react';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { SITENAME } from '../constants';
import PostPreview from '../components/PostPreview';

const styles = css`
  color: #5f50aa;
  border-bottom: 1px solid #aeacb7;
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1.2rem;
`;

const Index = ({ data }) => (
  <Layout>
    <h2 css={styles}>New Things</h2>
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
          <div
            css={css`
              margin: 0.4rem 0 0 0;
              font-family: "Lato", sans-serif;
            `}
            dangerouslySetInnerHTML={{ __html: excerpt }} />
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

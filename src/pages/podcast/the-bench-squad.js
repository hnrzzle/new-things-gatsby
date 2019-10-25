import React from 'react';
import { css } from '@emotion/core';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import { PODCAST, SITENAME } from '../../constants';
import PostPreview from '../../components/PostPreview';

const styles = css`
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const TheBenchSquad = ({ data }) => (
  <Layout>
    <div css={styles}>
      <h1>{PODCAST.POD_NAME}</h1>
      {data.allWordpressPost.edges.map(({ node }) => {
        const podcastOrNot = node.categories.filter(({ slug }) => slug === 'podcasts');
        if (!podcastOrNot.length) {
          return;
        }
        const { id, slug, title, excerpt, date, author, categories } = node;
        // eslint-disable-next-line
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
                font-family: 'Merriweather', serif;
              `}
              dangerouslySetInnerHTML={{ __html: excerpt }} 
            />
          </PostPreview>
        );
      })}
      <Link to="/about/">Learn more about Us!</Link>
    </div>
  </Layout>
);

export default TheBenchSquad;

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

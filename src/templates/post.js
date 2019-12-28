import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/PostPreview';
import { STYLE_CONSTS } from '../constants';

class PostTemplate extends Component {
  render() {
    const { id, slug, title, excerpt, content, date, author, categories } = this.props.data.wordpressPost;

    return (
      <Layout id={id} slug={slug} title={title} path="post" excerpt={excerpt}>
        <Helmet>
          <meta property="og:description" content={excerpt} />
          {/* <meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" /> */}
        </Helmet>
        <PostPreview
          key={id}
          title={title}
          author={author.name}
          date={date}
          slug={slug}
        >
          <div
            css={css`
              margin: 1.4rem 0 0 0;
              font-family: 'Merriweather', serif;
              font-size: 1.1rem;
              a {
                color: ${STYLE_CONSTS.main_purp};
                font-weight: bold;
                :hover {
                  color: #44397b;
                }
              }
            `}
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </PostPreview>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      author {
        id
        name
      }
      categories {
        id
        slug
        name
      }
      date(formatString: "MMMM DD, YYYY")
      slug
      content
    }
  }
`;

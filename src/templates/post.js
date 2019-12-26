import React, { Component } from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostPreview from '../components/PostPreview';

class PostTemplate extends Component {
  render() {
    const { id, slug, title, content, date, author, categories } = this.props.data.wordpressPost;

    return (
      <Layout id={id} slug={slug}>
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

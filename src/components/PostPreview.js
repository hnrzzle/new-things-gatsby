import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { STYLE_CONSTS } from '../constants';

const style = css`
  color: ${STYLE_CONSTS.black_reading_text};
  h2 {
    margin-bottom: 0.5rem;
  }
  .author-name {
    margin-top: 0rem;
    font-weight: 600;
    font-size: 0.8rem;
    margin-right: 0.3rem;
  }
  .date {
    font-style: italic;
    font-size: 0.8rem;
    margin-left: 0.3rem;
  } 
`;

const PostPreview = ({ title, author, children, date, slug }) => (
  <article css={style}>
    <Link to={`/${slug}`}>
      <h2>{title}</h2>
      <span className="author-name">{author}</span>|<span className="date">{date}</span>
    </Link>
    {children}
  </article>
);

export default PostPreview;

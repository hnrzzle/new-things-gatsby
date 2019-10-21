import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const PostPreview = ({ title, author, children, date, slug }) => (
  <article>
    <Link to={`/${slug}`}>
      <h2>{title}</h2>
      <span>{date}</span>
    </Link>
    <span>
      By <span>{author}</span>
    </span>
    {children}
  </article>
);

export default PostPreview;

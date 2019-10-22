import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { SITENAME, PODCAST, STYLE_CONSTS } from '../constants';

const PromoLink = styled(Link)`
  color: ${STYLE_CONSTS.main_white};
  /* background-color: ${STYLE_CONSTS.accent_color};
  border-radius: 5px;
  border: 2px solid ${STYLE_CONSTS.grey}; */
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || '500'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.5rem;
  text-decoration: none;
  border: 2px solid #5f50aa;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const HeaderPromoLink = ({ link, title, children }) => (
  <PromoLink to={link} activeClassName="promo-link">
    {children}
  </PromoLink>
);

export default HeaderPromoLink;

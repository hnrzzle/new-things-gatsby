import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { SITENAME, PODCAST, STYLE_CONSTS } from '../constants';
import HeaderPromoLink from './HeaderPromoLink';

const NavLink = styled(Link)`
  color: ${STYLE_CONSTS.main_white};
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || '600'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
  h1 {
    color: ${STYLE_CONSTS.main_white};
    font-family: "Righteous"
  }
`;

const Header = () => (
  <header
    css={css`
      background-color: ${STYLE_CONSTS.main_black};
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 1.5rem calc((100vw - 900px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      <h1>{SITENAME}</h1>
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
        display: flex;
        align-items: center;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/sports/" activeClassName="current-page">
        Sports
      </NavLink>
      <NavLink to="/pop-culture/" activeClassName="current-page">
        Pop Culture
      </NavLink>
      <HeaderPromoLink
        link={`/podcast/${PODCAST.POD_SLUG}`}
        activeClassName="current-page"
      >
        The Podcast
      </HeaderPromoLink>
    </nav>
  </header>
);

export default Header;

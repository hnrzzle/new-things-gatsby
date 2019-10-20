import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { SITENAME } from '../constants';

const About = () => (
  <Layout>
    <h1>About Us</h1>
    <p>Welcome to {SITENAME}</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;

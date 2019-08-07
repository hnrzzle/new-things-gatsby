import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>About Us</h1>
    <p>Welcome to new things!</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;

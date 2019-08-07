import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <h1>New Things About New Things</h1>
    <Link to="/about/">Learn more about Us!</Link>
  </Layout>
);

export default Index;

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { SITENAME } from '../constants';

const Index = () => (
  <Layout>
    <h1>{SITENAME}</h1>
    <Link to="/about/">Learn more about Us!</Link>
  </Layout>
);

export default Index;

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { PODCAST_NAME } from '../constants';

const Index = () => (
  <Layout>
    <h1>{PODCAST_NAME} Podcast</h1>
    <Link to="/">Return to home</Link>
  </Layout>
);

export default Index;

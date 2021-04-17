import React from 'react';
import Head from 'next/head';

import logoImg from '../assets/image_default.png'
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <img src={logoImg} alt="logo" />
      <h1>Hello world</h1>
      <p>A Reacjts + Next.js structure made by Rockeseat.</p>
    </Container>
  )
};

export default Home

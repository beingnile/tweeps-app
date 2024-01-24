import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import ScrollUp from '../components/ScrollUp';
import styles from '../styles/pages/Home.module.scss';

export default function Home () {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Tweeps fastfoods</title>
        <meta
          name='description'
          content='Tweeps landing page'
        />
        <link rel='icon' href='/favicon.ico' />
      </Helmet>
      <Header />
      <Main />
      <Footer />
      <Loader />
      <ScrollUp />
    </div>
  );
}

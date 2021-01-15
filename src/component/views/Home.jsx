import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';

import Styles from '../../css/Home.module.css';
import AppButton from '../common/app-button/AppButton';

function Home() {
  const history = useHistory();

  const redirect = () => {
    history.push('/connexion');
  };

  return (
    <section className={Styles.home}>
      <div className={Styles.homeBgImg}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Paye Ton Stage, le site qui met en relation les entreprises et les futurs pépites de la tech."
          />
          <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link rel="canonical" href="http://mysite.com/example" />
          <title>Inscription | Connection</title>
        </Helmet>

        <main className={Styles.homeContent}>
          <h1 className={Styles.homeTitle}>Paye ton stage</h1>
          <p className={Styles.homeDescription}>Lorem lorem lorem</p>
          <AppButton
            title="Inscription stagiaire"
            onClick={() => history.push('/inscription-stagiaire')}
          />
          <AppButton
            title="Inscription entreprise"
            onClick={() => history.push('/inscription-entreprise')}
          />
          <AppButton title="Connexion" onClick={redirect} />
        </main>
      </div>
    </section>
  );
}

export default Home;

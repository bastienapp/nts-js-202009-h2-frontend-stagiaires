import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import fr from 'dayjs/locale/fr';

import styles from '../../css/AnnouncementDetail.module.css';
import { AnnonceContext } from '../../Context/AnnonceContext';

dayjs.extend(advancedFormat);
dayjs.locale(fr);

export default function AnnouncementDetaille() {
  const { annonce, setAnnonce } = useContext(AnnonceContext);
  const [annoucement, setAnnoucement] = useState([]);
  const { id } = useParams();

  const handleAnnonces = () => {
    const set1 = new Set([...annonce, annoucement]);
    setAnnonce([...set1]);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/annonces/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setAnnoucement(data.annonce);
      })
      .catch((err) => {
        let message;
        if (err.response.status === 401) {
          message = "You're not authorized to access these datas";
        } else {
          message = err.response.data.errorMessage;
        }
        alert(message);
        console.error(err);
      });
  }, [id]);

  function descriptionHTML() {
    return { __html: annoucement.description };
  }

  const date = dayjs(annoucement.debut).format('DD/MM/YYYY');
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Vous trouverez ici une annonce détaillée vous permettant d'avoir accès aux informations du stage ou alternance proposé: Entreprise, lieux, durée, début, langage, spécialité."
        />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta
          name="keywords"
          content="stage, alternance, dev, developpeur, tech, etudes, entreprise, technologie, langage, front-end, back-end, full-stack"
        />
        <title>Annonce Détaillée</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main className={styles.annonceDetailContainer}>
        <section>
          <picture>
            <source
              srcSet={annoucement.logo_small}
              media="(max-width: 768px)"
            />
            <img
              src={annoucement.logo}
              alt={annoucement.name}
              className={styles.annonceDetailLogo}
            />
          </picture>

          <section className={styles.annonceDetailInfo}>
            <div className={styles.annonceDetailEnt}>
              <h3>{annoucement.nom}</h3>
              <p>{annoucement.expertise}</p>
              <p>{annoucement.langage}</p>
            </div>
            <div className={styles.annonceDetailStage}>
              <p>{annoucement.localisation}</p>
              <p>{annoucement.duree}</p>
              <p>{annoucement.type}</p>
              <time dateTime={date} className={styles.annonceDetailDebut}>
                {date}
              </time>
            </div>
          </section>
          <section className={styles.annonceDetailDesription}>
            <h3 className={styles.annonceDetailDesriptionTitle}>Description</h3>
            <p
              className={styles.annonceDetailText}
              dangerouslySetInnerHTML={descriptionHTML()}
            />
          </section>
          <section className={styles.annonceDetailPrixContener}>
            <button
              className={styles.annonceDetailPrix}
              type="button"
              onClick={() => handleAnnonces()}
            >
              {annoucement.prix}
              &nbsp;€
            </button>
            <FontAwesomeIcon
              className={styles.annonceDetailCart}
              icon={faShoppingCart}
            />
          </section>
        </section>
      </main>
    </>
  );
}

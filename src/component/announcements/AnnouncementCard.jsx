import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/AnnouncementCard.module.css';
import announcementPropType from '../prop-types/AnnouncementPropTypes';

export default function AnnouncementCard({ announcement }) {
  const {
    logo_small,
    nom,
    langage,
    expertise,
    localisation,
    slug,
    id,
    prix,
  } = announcement;
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={logo_small} alt={nom} />
      <div className={styles.cardDescription}>
        <h3>{nom}</h3>
        <h4>
          {expertise}&nbsp;({langage})
        </h4>
        <p>{localisation}</p>
      </div>
      <button className={styles.cardButton} type="button">
        <Link to={`/annonces/${slug}/${id}`}>{`${prix} €`}</Link>
      </button>
    </div>
  );
}

AnnouncementCard.propTypes = announcementPropType;

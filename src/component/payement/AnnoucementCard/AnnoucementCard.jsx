import React from 'react';

import style from './AnnoucementCard.module.css';
import trash from '../../../Assets/icons/delete.svg';
import announcementPropType from '../../prop-types/AnnouncementPropTypes';

const AnnoucementCard = ({
  id,
  logo_small,
  name,
  localisation,
  expertise,
  prix,
  handleCard,
}) => {
  return (
    <div className={style.CardLayout}>
      <img
        className={style.pictureCompany}
        src={logo_small}
        alt={`logo ${name}`}
      />
      <section className={style.descriptionCard}>
        <div className={style.decriptionCard}>
          <h3 className={style.company}>{name}</h3>
          <h4 className={style.expert}>{expertise}</h4>
          <p className={style.location}>{localisation}</p>
        </div>
        <p className={style.price}>{`${prix}€`}</p>
      </section>
      <button
        onClick={() => handleCard(id)}
        className={style.buttonTrash}
        type="button"
      >
        <img src={trash} alt="suprimer l'annonce" />
      </button>
    </div>
  );
};

export default AnnoucementCard;

AnnoucementCard.propTypes = announcementPropType;

import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function StudiesFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Niveau d&apos;études :&nbsp;</p>
      <label htmlFor="bac2studies">
        <input type="radio" id="bac2studies" name="niveau_etudes" />
        Bac +2
      </label>
      <label htmlFor="bac3studies">
        <input type="radio" id="bac3studies" name="niveau_etudes" />
        Bac +3
      </label>
      <label htmlFor="bac4studies">
        <input type="radio" id="bac4studies" name="niveau_etudes" />
        Bac +4
      </label>
      <label htmlFor="all">
        <input type="radio" id="all" name="niveau_etudes" />
        Tous niveaux
      </label>
    </div>
  );
}

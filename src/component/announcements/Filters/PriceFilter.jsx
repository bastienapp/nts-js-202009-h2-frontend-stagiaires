import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function PriceFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Prix: &nbsp;</p>
      <select className={styles.inputSelect} name="prix" id="prix">
        <option value="Croissant">Croissant</option>
        <option value="Décroissant">Décroissant</option>
      </select>
    </div>
  );
}

import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function LocalisationFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Localisation : &nbsp;</p>
      <select
        className={styles.inputSelect}
        name="localisation"
        id="localisation-select"
      >
        <option name="localisation" value="defaultLocalisation">
          Choisir une localisation
        </option>
        <option name="localisation" value="Paris">
          Paris
        </option>
        <option name="localisation" value="Nantes">
          Nantes
        </option>
        <option name="localisation" value="Lille">
          Lille
        </option>
        <option name="localisation" value="Marseille">
          Marseille
        </option>
        <option name="localisation" value="Clichy">
          Clichy
        </option>
        <option name="localisation" value="Orléans">
          Orléans
        </option>
      </select>
    </div>
  );
}

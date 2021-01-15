import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function TypeFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Type :&nbsp;</p>
      <label htmlFor="stageType">
        <input type="radio" id="stageType" name="type" />
        Stage
      </label>
      <label htmlFor="alternanceType">
        <input type="radio" id="alternanceType" name="type" />
        Alternance
      </label>
      <label htmlFor="allType">
        <input type="radio" id="allType" name="type" />
        Les deux
      </label>
    </div>
  );
}

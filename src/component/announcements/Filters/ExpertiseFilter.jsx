import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function ExpertiseFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Expertise : &nbsp;</p>
      <label htmlFor="Full-Stack">
        <input type="radio" id="Full-Stack" name="expertise" />
        Full-Stack
      </label>
      <label htmlFor="Front-End">
        <input type="radio" id="Front-End" name="expertise" />
        Front-End
      </label>
      <label htmlFor="Back-End">
        <input type="radio" id="Back-End" name="expertise" />
        Back-End
      </label>
    </div>
  );
}

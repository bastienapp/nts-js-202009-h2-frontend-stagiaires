import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function LanguageFilter({ filters, setFilters }) {
  return (
    <div className={styles.blocFilter}>
      <p>Langage : &nbsp;</p>
      <select
        className={styles.inputSelect}
        name="langage"
        id="language-select"
        onChange={(e) => setFilters({ [e.target.name]: e.target.value })}
      >
        <option name="langage" value="Java">
          Java
        </option>
        <option name="langage" value="React JS">
          React JS
        </option>
        <option name="langage" value="Node JS">
          Node Js
        </option>
        <option name="langage" value="Angular">
          Angular
        </option>
        <option name="langage" value="Vue JS">
          Vue JS
        </option>
        <option name="langage" value="PHP">
          PHP
        </option>
        <option name="langage" value="Swift">
          Swift
        </option>
      </select>
    </div>
  );
}

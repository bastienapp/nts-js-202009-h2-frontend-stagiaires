import React from 'react';
import PropTypes from 'prop-types';

import styles from './Payement.module.css';

const Payement = ({ icon, alt, href }) => {
  return (
    <div className={styles.payementContener}>
      <a href={href} title={alt} className={styles.wrapperPayement}>
        <img className={styles.IconPayement} src={icon} alt={alt} />
      </a>
    </div>
  );
};

export default Payement;
Payement.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

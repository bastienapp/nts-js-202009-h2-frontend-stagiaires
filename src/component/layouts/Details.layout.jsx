import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Return from '../common/Return';
import Notif from '../common/notif/Notif';
import { AnnonceContext } from '../../Context/AnnonceContext';

import style from '../../css/HeaderAndFooter.module.css';

function DetailsLayout({ children }) {
  const { annonce } = useContext(AnnonceContext);
  return (
    <>
      <header className={style.header}>
        <h1 className={style.brand}>Paye ton stage</h1>
        <Link to="/panier">
          <FontAwesomeIcon
            style={{
              color: '#F8DDBE',
            }}
            icon={faShoppingCart}
          />
          {annonce.length > 0 && <Notif length={annonce.length} />}
        </Link>
      </header>
      <body className={style.container}>{children}</body>

      <footer className={style.container}>
        <Return path="/annonces" />
      </footer>
    </>
  );
}

DetailsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailsLayout;

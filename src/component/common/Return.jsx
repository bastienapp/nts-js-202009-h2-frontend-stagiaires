import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import style from '../../css/HeaderAndFooter.module.css';

const Return = ({ path }) => {
  const history = useHistory();
  return (
    <>
      <FontAwesomeIcon
        icon={faArrowCircleLeft}
        className={style.arrow}
        onClick={() => history.push(path)}
      />
      Retour aux annonces
    </>
  );
};

export default Return;

Return.propTypes = {
  path: PropTypes.string.isRequired,
};

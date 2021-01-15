import React from 'react';

import styles from './Notif.module.css';

const notif = ({ length }) => <div className={styles.notif}>{length}</div>;

export default notif;

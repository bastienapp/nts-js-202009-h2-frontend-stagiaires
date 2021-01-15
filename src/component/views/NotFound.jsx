import React from 'react';
import { Helmet } from 'react-helmet';

import style from '../../css/NotFound.module.css';

function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Oups... Perdu tu es!" />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="http://mysite.com/example" />
        <title>Oups...</title>
      </Helmet>
      <section className={style.container}>
        <img
          src="https://i.imgflip.com/4tq6r9.jpg"
          title="made at imgflip.com"
          alt="Yoda envoyant une 404"
          className={style.yoda}
        />
      </section>
    </>
  );
}

export default NotFound;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Auth from '../../authenticate/Authenticate';
import AppButton from '../common/app-button/AppButton';
import AppInput from '../common/app-input/AppInput';

import Styles from '../../css/SignUp.module.css';

const SignUpCompany = () => {
  const [state, setState] = useState({
    nom: '',
    adresse: '',
    email: '',
    telephone: '',
    domaine: '',
    password: '',
    password2: '',
  });
  const [cgu, setCgu] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleCheck = (e) => {
    setCgu(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.password !== state.password2) {
      return alert('Les mots de passe ne matchent pas');
    }
    if (cgu) {
      axios
        .post('http://localhost:8080/register/user', state)
        .then(({ data }) => {
          localStorage.setItem('TOKEN', data.token);
          localStorage.setItem('USER', JSON.stringify(data.user));

          Auth.logIn(() => history.push('/annonces'));
        })
        .catch((err) => {
          alert(err.response.data);
        });
    } else alert(`Merci d'accepter les CGU`);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Des centaines d'entreprises utilisent déjà Paye Ton Stage! Venez recruter vos futurs talents et faites les payer!"
        />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="http://mysite.com/example" />
        <title>Entreprise</title>
      </Helmet>
      <section className={Styles.signUp}>
        <div className={Styles.signUpBgImg}>
          <div className={Styles.signUpContent}>
            <div className={Styles.signUpHead}>
              <h1 className={Styles.signUpTitle}>Paye ton stage</h1>
              <p className={Styles.signUpDescription}>Lorem lorem lorem</p>
            </div>
            <div className={Styles.signUpGrpButton}>
              <AppButton
                title="Connexion"
                onClick={() => history.push('/connexion')}
              />
              <AppButton
                title="Inscription stagiaire"
                onClick={() => history.push('/inscription-stagiaire')}
              />
            </div>
            <form className={Styles.signUpForm} onSubmit={handleSubmit}>
              <h2 className={Styles.signUpSecondTitle}>Inscription</h2>
              <AppInput
                name="nom"
                label="Nom :"
                placeholder="société"
                value={state.state}
                onChange={handleChange}
              />
              <AppInput
                name="adresse"
                label="Adresse :"
                placeholder="10 rue du stage"
                value={state.state}
                onChange={handleChange}
              />
              <AppInput
                name="email"
                label="Adresse email :"
                placeholder="email@email.com"
                type="email"
                value={state.state}
                onChange={handleChange}
              />
              <AppInput
                name="telephone"
                label="Téléphone :"
                placeholder="07 00 00 00 00"
                value={state.state}
                onChange={handleChange}
              />
              <AppInput
                name="domaine"
                label="domaine :"
                placeholder="commerce, tech ..."
                value={state.state}
                onChange={handleChange}
              />
              <AppInput
                name="password"
                label="mot de passe :"
                placeholder="********"
                type="password"
                value={state.state}
                onChange={handleChange}
              />
              <AppInput
                name="password2"
                label="mot de passe :"
                placeholder="********"
                type="password"
                value={state.state}
                onChange={handleChange}
              />
              <div className={Styles.signUpCheck}>
                <input
                  className={Styles.signUpCheckox}
                  type="checkbox"
                  onClick={handleCheck}
                />
                <span>j&apos;accepte</span>
              </div>
              <AppButton title="Je me connecte" isSubmit />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpCompany;

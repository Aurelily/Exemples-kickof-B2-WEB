import React from 'react';
import useForm from '../hooks/useForm';

const MyForm = () => {
  
  // Fonction de validation de mon formulaire

  const validateForm = (values) => {
    const errors = {};
    if (!values.login) {
      errors.login = 'Le champ nom est requis';
    }else{
      errors.login = '';
    }
    if (!values.password) {
      errors.password = 'Le champ email est requis';
    }else{
      errors.password = '';
    }
    return errors;
  };

  // Utilisation de mon custom hook : useForm = (initialState, validationCallback)
  // ------------------------------------------------------------------------------
  // 1er argument : Objet initial qui représente l'état initial du formulaire
  // 2ème argument : Fonction de validation définie précédemment

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { login: '', password: '' },
    validateForm
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login">Login</label>
      <input
        type="text"
        name="login"
        id="login"
        value={values.login}
        onChange={handleChange}
        onKeyUp={handleChange}
        onBlur={handleChange}
      />
      {errors.login && <p className='error'>{errors.login}</p>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={values.password}
        onChange={handleChange}
        onKeyUp={handleChange}
        onBlur={handleChange}
      />
      {errors.password && <p className='error'>{errors.password}</p>}

      <button type="submit" disabled={isSubmitting}>
        Soumettre
      </button>
    </form>
  );
};


export default MyForm;

import React from 'react';
import useForm from '../customs/useForm';

const MyForm = () => {
  
  const validateForm = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Le champ nom est requis';
    }
    if (!values.email) {
      errors.email = 'Le champ email est requis';
    }
    return errors;
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { name: '', email: '' },
    validateForm
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <button type="submit" disabled={isSubmitting}>
        Soumettre
      </button>
    </form>
  );
};


export default MyForm;

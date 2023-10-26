import { useState } from 'react';

// Création du custom hook useForm
const useForm = (initialState, validationCallback) => {

  // Logiques métier gérées par ce customHook :
  //-------------------------------------------------------------------------
  // Gestion de l'état du formulaire,
  // Gestion de la validation du formulaire
  // Gestion des actions associées à la soumission du formulaire
  //-------------------------------------------------------------------------

  // values : Les valeurs actuelles des champs du formulaire.
  const [values, setValues] = useState(initialState); // initialState : initialiser cet objet lorsque le formulaire est créé.
  // errors : Les erreurs de validation associées aux champs du formulaire.
  const [errors, setErrors] = useState({});
  // isSubmitting : Un indicateur de soumission du formulaire.
  const [isSubmitting, setIsSubmitting] = useState(false);


  // handleChange : gestionnaire d'événements sur les champs de formulaire.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    const validationErrors = validationCallback(values);
    setErrors(validationErrors);
    setIsSubmitting(false);
  };



  // handleSubmit : gestionnaire d'événements pour la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validationCallback(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

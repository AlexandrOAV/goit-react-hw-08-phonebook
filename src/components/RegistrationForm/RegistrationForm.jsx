import React from 'react'
import css from './RegistrationForm.module.css'
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operation';




const RegistrationForm = () => {
   const dispatch = useDispatch();
  
  const handleSubmit =  event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
      name,
      email ,
      password
    }
    dispatch(registerUser(formData));
     event.currentTarget.reset();
  };



  
  return (
    <section className={css.container}>
      <h1 className={css.heder}>Registration</h1>
    <form className={css.form}  onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input 
        className={ css.input}
          type="text"
          name="name"
          placeholder='Enter name'
          required />
      </label >
      <label className={css.label}>
        Email
        <input 
        className={ css.input}
          type="email"
          name="email"
          placeholder='Enter e-mail'
          required />
      </label>
      <label  className={css.label}>
        Password
        <input 
        className={ css.input}
        type="password"
        name="password"
        placeholder='Enter password'
        required
        minLength={8} />
      </label>
      <button className={css.button} type="submit">Register</button>
    </form>
        </section>
   
  )
}

export default RegistrationForm
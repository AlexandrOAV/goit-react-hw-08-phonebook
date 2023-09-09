import React from 'react'
import css from './LoginForm.module.css'
import { useDispatch} from 'react-redux';
import { loginUser} from 'redux/auth/operation';
import { Link} from 'react-router-dom';
import { REGISTER_ROUTE } from 'constans/constans';






const LoginForm = () => {
   const dispatch = useDispatch();
  const handleSubmit =  event => {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = {
      email ,
      password
    }
    dispatch(loginUser(formData));
     event.currentTarget.reset();
  };

  return (
    <section className={css.container}>
    <h1 className={css.heder}>Autorisation</h1>
    <form className={css.form}  onSubmit={handleSubmit}>
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
      <button className={css.button} type="submit">Login</button>
      </form>
      <p className={css.textInfo}>if you are not registered, please register <Link to={REGISTER_ROUTE}>Registration</Link></p>
        </section>
   
  )
}

export default LoginForm
import { HOME_ROUTE } from 'constans/constans'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFaund = () => {
  return (
    <div style={{
      margin: 8,
      textAlign:'center',
        padding: "12px 16px",}}>
  <h1> SORRY!!! PAGE NOT FAUND!</h1>
      <p style={{fontSize:25, marginBottom:10, }}>PLease, go to <Link to={HOME_ROUTE}>Home page</Link> </p>
      <img src='https://i.pinimg.com/564x/27/56/12/275612ff655aaad0fc1c3e5d208fa784.jpg' alt="alone at home" />
    </div>
  )
}

export default NotFaund
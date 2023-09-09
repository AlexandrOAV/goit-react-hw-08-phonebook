import css from './HomeMain.module.css'
import React from 'react'

const HomeMain = () => {
  return (
     <div className={css.block}>
          <h1 style={{ marginBottom: 5 }}> My phonebook</h1>
          <img
              className={css.roundedImage }
              src='https://i.pinimg.com/564x/23/68/61/2368614f041f69fe9edc8d2d434023e9.jpg'
              alt="phone"
              width={350} />
        
    </div>
  )
}

export default HomeMain
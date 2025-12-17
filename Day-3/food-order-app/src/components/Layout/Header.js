import React from 'react'
import classes from './Header.module.css';
import meals from '../../asset/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <>  
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes.mainImage}>
            <img src={meals} alt='food'/>
        </div>
    </>
  )
}

export default Header
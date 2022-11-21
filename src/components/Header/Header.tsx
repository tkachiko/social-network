import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
  login: string | null,
  isAuth: boolean
}

export const Header: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.header}>
      <img
        src={'https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn'}
        alt={'logo'}/>
      <div className={styles.loginBlock}>
        {props.isAuth
          ? props.login
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </div>
  );
};

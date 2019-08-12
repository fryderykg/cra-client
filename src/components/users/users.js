import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import styles from './users.module.scss';
import globalStyles from '../../shares/css/common.module.scss';
import {Link} from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
  };
  
  componentDidMount() {
    fetch('/api/user')
      .then(res => res.json())
      .then(users => {
        this.setState({
          users
        })
      })
  }
  
  render() {
    console.log('users', this.state.users);
    return (
      <div className={styles.usersComponent}>
        <header className={globalStyles.headerWithLink}>
          <h2>Użytkownicy</h2>
          <Link to='/add-user'
                className={globalStyles.headerWithLink__link}>
            + Dodaj użytkownika
          </Link>
        </header>
        <div className={globalStyles.listHeader}>
          <div className={styles.userName}>Imię</div>
          <div className={styles.userSurname}>Nazwisko</div>
          <div className={styles.userCompany}>Firma</div>
          <div className={styles.userEmail}>Email</div>
        </div>
        <ul className={globalStyles.list}>
          {this.state.users.map(user => {
            /** @namespace user.user_id **/
            /** @namespace user.first_name **/
            /** @namespace user.last_name **/
            /** @namespace user.company **/
            /** @namespace user.email **/
            /** @namespace user.deleted **/
            /** @namespace user.type **/
            return (
              <li key={user.user_id}
                  className={globalStyles.listItem}>
                <div className={styles.userName}>
                  {user.first_name}
                </div>
                <div className={styles.userSurname}>
                 {user.last_name}
                </div>
                <div className={styles.userCompany}>
                  {user.company}
                </div>
                <div className={styles.userEmail}>
                  {user.email}
                </div>
                <div className={styles.userType}>
                  {user.type}
                </div>
                <div className={styles.userDeleted}>
                  {user.deleted}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

// Users.propTypes = {};

export default Users;

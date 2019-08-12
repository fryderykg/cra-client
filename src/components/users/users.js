import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import styles from './users.module.css';

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
        <h2>Użytkownicy</h2>
        <div className={styles.tableHeader}>
          <div className={styles.userName}>Imię</div>
          <div className={styles.userSurname}>Nazwisko</div>
          <div className={styles.userCompany}>Firma</div>
          <div className={styles.userEmail}>Email</div>
        </div>
        <ul className={styles.usersList}>
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
                  className={styles.userItem}>
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

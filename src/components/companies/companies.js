import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import styles from './companies.module.scss';
import globalStyles from '../../shares/css/common.module.scss'
import {Link} from "react-router-dom";

class Companies extends Component {
  render() {
    return (
      <div className={styles.companiesComponent}>
        <header className={globalStyles.headerWithLink}>
          <h2>Firmy</h2>

          <Link to='/add-company'
                   className={styles.addLink}>
            Dodaj firmę
          </Link>
        </header>
      </div>
    );
  }
}

// Companies.propTypes = {};

export default Companies;
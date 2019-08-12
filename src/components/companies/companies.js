import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import styles from './companies.module.scss';
import globalStyles from '../../shares/css/common.module.scss'
import {Link} from "react-router-dom";

class Companies extends Component {
  state = {
    companies: [],
  };

  componentDidMount() {
    fetch('/api/company')
        .then(res => res.json())
        .then(companies => {
          this.setState({
            companies
          })
        })
  }

  render() {
    return (
      <div className={styles.companiesComponent}>
        <header className={globalStyles.headerWithLink}>
          <h2>Firmy</h2>

          <Link to='/add-company'
                   className={globalStyles.headerWithLink__link}>
            Dodaj firmę
          </Link>
        </header>

        <div className={globalStyles.listHeader}>
          <div className={styles.companyName}>Nazwa</div>
        </div>
        <ul className={styles.companiesList}>
          {this.state.companies.map(company => {
            /** @namespace company.company_id **/
            /** @namespace company.name **/
            return (
                <li key={company.company_id}
                    className={styles.companyItem}>
                  <div className={styles.companyName}>
                    {company.name}
                  </div>
                </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

// Companies.propTypes = {};

export default Companies;
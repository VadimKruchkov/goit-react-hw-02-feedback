import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={css.Section__container}>
    <p className={css.Section__title}>{title}</p>
    {children}
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node,
};

import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({ titel, children }) => {
  return (
    <section className={css.content}>
      <h2 className={css.titel}>{titel}</h2>
      {children}
    </section>
  );
};

export default Section;

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

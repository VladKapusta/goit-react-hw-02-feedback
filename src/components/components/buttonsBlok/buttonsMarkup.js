import PropTypes from 'prop-types';
import css from './buttons.module.css'

const ButtonsMurkup = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.wrapper__buttons}>
      {options.map(option => (
        <button type="button" className={css[option]}  onClick={onLeaveFeedback} key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default ButtonsMurkup;

ButtonsMurkup.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

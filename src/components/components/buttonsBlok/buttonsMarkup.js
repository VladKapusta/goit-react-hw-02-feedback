const ButtonsMurkup = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(el => (
        <button type="button" onClick={onLeaveFeedback} key={el}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default ButtonsMurkup;

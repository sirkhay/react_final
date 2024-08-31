import PropTypes from 'prop-types';

const Button = ({ className, backGroundColor, text }) => {
  return (
    <button className={`btn ${className}`} style={{ backgroundColor: backGroundColor }}>
        { text }
    </button>
  )
}

Button.propTypes = {
    className: PropTypes.string,
    backGroundColor: PropTypes.string,
    text: PropTypes.string
};

export default Button
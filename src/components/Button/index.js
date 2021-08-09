// styles
import { Wrapper } from './Button.style';

// proptypes can use on developer mode only can't use on production
import PropTypes from 'prop-types';

function Button({ text, callback }) {
  return (
    <Wrapper onClick={(e) => callback(e)}>
      {text}
    </Wrapper>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
}

export default Button

// styles
import { Wrapper, Image } from './Actor.style';

// proptypes can use on developer mode only can't use on production
import PropTypes from 'prop-types';

import NoImage from '../../images/no_image.jpg';

function Actor({ name, character, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  )
}

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string
}

Actor.defaultProps = {
  imageUrl: NoImage
}

export default Actor

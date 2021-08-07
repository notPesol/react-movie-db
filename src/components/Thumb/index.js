// links
import { Link } from "react-router-dom";

// styles
import { Image } from "./Thumb.style";

// proptypes can use on developer mode only can't use on production
import PropTypes from 'prop-types';

function Thumb({ image, movieId, clickable }) {
  return (
    <div>
      {clickable ?
        (<Link to={`/${movieId}`}>
          <Image src={image} alt='movie-thumb' />
        </Link>)
        :
        (<Image src={image} alt='movie-thumb' />)
      }
    </div>
  )
}

Thumb.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number
}

export default Thumb;

// links
import { Link } from "react-router-dom";

// styles
import { Image } from "./Thumb.style";

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

export default Thumb;

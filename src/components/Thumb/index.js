import { Image } from "./Thumb.style";

import React from 'react'

function Thumb({ image, movieId, clickable }) {
  return (
    <div>
      <Image src={image} alt='movie-thumb' />
    </div>
  )
}

export default Thumb

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// components

import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

// hook
import { useMovieFetch } from './hooks/useMovieFetch';

// img
// import NoImage from '../images/no_image.jpg';

// path params
import { useParams } from 'react-router-dom';

function Movie() {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>


  console.log(movie);
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map(actor => (
          <Actor
            key={actor.credit_id}
            imageUrl={actor.profile_path ?
              `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : undefined}
            name={actor.name}
            character={actor.character}
          />
        ))}
      </Grid>
    </>
  )
}

export default Movie;

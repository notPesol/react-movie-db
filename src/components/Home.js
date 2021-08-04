// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
// hook
import { useHomeFetch } from './hooks/useHomeFetch'
// images
import NoImg from '../images/no_image.jpg';

function Home() {
  const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();
  // const randNum = state.results[0] ? Math.floor(Math.random() * state.results.length) : null;
  console.log(state);

  return (
    <>
      {
        !searchTerm && state.results[0] &&
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[5].backdrop_path}`}
          title={state.results[5].original_title}
          text={state.results[5].overview}
        />
      }
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={!searchTerm ? 'Popular Movies': null}>
        {state.results.map(movie =>(
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : NoImg
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner/>
    </>
  )
}

export default Home;
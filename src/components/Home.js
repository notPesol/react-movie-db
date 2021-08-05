// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// hook
import { useHomeFetch } from './hooks/useHomeFetch'
// images
import NoImg from '../images/no_image.jpg';

function Home() {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
  console.log(state);

  if (error) return (
    <div>Something went wrong!</div>
  )

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
      <Grid header={!searchTerm ? 'Popular Movies' : 'Search result'}>
        {state.results.map(movie => (
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
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading &&
        (<Button text="Load More" callback={setIsLoadingMore} />)
      }
    </>
  )
}

export default Home;
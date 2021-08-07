import { useState, useEffect } from "react";
import API from '../../API';

// Helper
import { isPersistedState } from '../../helpers';

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // get directors only
        const directors = credits.crew.filter(member => member.job === 'Director');

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }

    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      console.log('Grapping from sessionStorage');
      setState(sessionState);
      setLoading(false);
      return;
    }
    
    console.log('Grapping from API');
    fetchMovie();
  }, [movieId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state])

  return { state, loading, error };
}
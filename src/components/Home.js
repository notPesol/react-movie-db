import React, { useState, useEffect } from 'react';

// APi
import API from '../API';
// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components

// hook

// images
import NoImg from '../images/no_image.jpg';

function Home() {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMoveis = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      setState(prev => (
        {
          ...movies,
          results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
        }
      ));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMoveis(1);
  }, []);

  console.log(state);

  return (
    <div>Home page</div>
  )
}

export default Home;